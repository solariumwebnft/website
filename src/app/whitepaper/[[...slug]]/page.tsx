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
  return { title: whitePaper?.title || "Default Title" };
}

interface WhitePaperPageProps {
  params: Params;
}

interface Document {
  title: string;
  author: string;
  body: {
    code: string;
  };
  slug: string;
}

const getDocFromParams = ({
  params,
}: WhitePaperPageProps): Document | undefined => {
  const slug = params.slug.join("/");

  const doc = allDocs.find((wp) => {
    return wp.slug === `/${slug}`;
  });

  return doc;
};

export default function WhitePaperPage({ params }: WhitePaperPageProps) {
  const doc = getDocFromParams({ params });

  if (!doc) {
    return <div>Document not found</div>;
  }

  const Component = useMDXComponent(doc.body.code);

  return (
    <article>
      <h1 className="max-w-[70%] text-[30px] font-bold">{doc.title}</h1>
      <div className="flex">
        <div className="prose mr-8 min-w-[70%] max-w-[70%]">
          <p>{doc.author}</p>
          <Component />
        </div>
        <div className="min-w-[30%] max-w-[30%] bg-primary">Overview</div>
      </div>
    </article>
  );
}
