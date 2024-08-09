const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const sitemap = async (req: any, res: any) => {
  const links = [{ url: "/", changeFreq: "daily", priority: 1 }];

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data: any) => data.toString());
  console.log(xmlString);
  res.end(xmlString);
};

export default sitemap;
