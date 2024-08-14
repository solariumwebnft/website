import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export async function GET(req: Request) {
  const links = [
    { url: "/", changeFreq: "daily", priority: 1 },
    { url: "/privacy-policy", changeFreq: "monthly", priority: 0.8 },
    { url: "/terms-of-service", changeFreq: "monthly", priority: 0.8 },
  ];
  const host = req.headers.get("host");

  const stream = new SitemapStream({ hostname: `https://${host}` });
  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data: any) => data.toString());

  return new Response(xmlString, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
