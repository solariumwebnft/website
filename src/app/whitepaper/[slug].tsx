import { allWhitePapers } from "../../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticPaths, GetStaticProps } from "next";

console.log("allWhitePapers:", allWhitePapers);
export const getStaticPaths: GetStaticPaths = () => {
  const paths = allWhitePapers.map((wp) => ({
    params: { slug: wp._raw.flattenedPath },
  }));
  console.log("Fetched paths:", paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const whitePaper = allWhitePapers.find(
    (wp) => wp._raw.flattenedPath === params?.slug,
  );
  console.log("Fetched whitePaper:", whitePaper);
  return { props: { whitePaper } };
};

const WhitePaperPage = ({ whitePaper }) => {
  console.log("Fetched whitePaper:", whitePaper);
  const Component = useMDXComponent(whitePaper.body.code);

  return (
    <article>
      <h1>{whitePaper.title}</h1>
      <Component />
    </article>
  );
};

export default WhitePaperPage;
