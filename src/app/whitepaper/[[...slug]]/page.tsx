import { useMDXComponent } from "next-contentlayer/hooks";
import { Metadata } from "next";
import { allDocs } from "contentlayer/generated";

interface Params {
  slug: string[];
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const params = allDocs.map((doc) => ({
    slug: doc._raw.flattenedPath.split("/"),
  }));
  console.log(params);
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const whitePaper = allDocs.find((wp) => params.slug.includes(wp.slug));
  return { title: whitePaper?.title };
}

interface WhitePaperPageProps {
  params: Params;
}

const getDocFromParams = ({ params }: WhitePaperPageProps) => {
  const slug = params.slug.join("/");

  const doc = allDocs.find((wp) => {
    return wp.slug === `/${slug}`;
  });

  return doc;
};

export default function WhitePaperPage({ params }: WhitePaperPageProps) {
  const doc = getDocFromParams({ params });

  if (!doc) {
    return <div>doc not found</div>;
  }

  const Component = useMDXComponent(doc.body.code);

  return (
    <article className="">
      <h1 className="max-w-[70%] bg-orange-500 text-[30px] font-bold">
        {doc.title}
      </h1>
      <div className="flex">
        <div className="prose min-w-[70%]">
          <p className="bg-yellow-200">{doc.author}</p>
          <Component />
        </div>
        <div className="min-w-[30%] bg-blue-500">overview</div>
      </div>
    </article>
  );
}
