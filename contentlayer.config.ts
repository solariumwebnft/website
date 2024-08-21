import { defineDocumentType, makeSource } from "contentlayer/source-files";

const WhitePaper = defineDocumentType(() => ({
  name: "WhitePaper",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: true },
    summary: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/whitepaper/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [WhitePaper],
  disableImportAliasWarning: true,
});
