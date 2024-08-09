import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const sitemap = async (req: any, res: any) => {
  if (!req || !res) {
    return;
  }

  const links = [{ url: "/", changeFreq: "daily", priority: 1 }];
  const host = req.headers?.host || "localhost:3000";

  const stream = new SitemapStream({ hostname: `https://${host}` });
  res.setHeader("Content-Type", "application/xml");

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data: any) => data.toString());

  res.end(xmlString);
};

export default sitemap;
