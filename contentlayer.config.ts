import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Home = defineDocumentType(() => ({
  name: "Home",
  filePathPattern: `home/*.md`,
}));

export const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: `nav/about/*.md`,
}));

export const Pricing = defineDocumentType(() => ({
  name: "Pricing",
  filePathPattern: `nav/pricing/*.md`,
}));

export const Themes = defineDocumentType(() => ({
  name: "Themes",
  filePathPattern: `nav/themes/*.md`,
}));

export const Blogs = defineDocumentType(() => ({
  name: "Blogs",
  filePathPattern: `nav/blogs/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string" },
    image: { type: "string" },
    author: { type: "string", default: "SOURAV" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blogs/${post._raw.flattenedPath}`,
    },
    category: {
      type: "string",
      resolve: (post) => {
        const pathSegments = post._raw.flattenedPath.split("/");
        return pathSegments.length > 1 ? pathSegments[0] : "uncategorized";
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "blogform",
  documentTypes: [Home, About, Pricing, Themes, Blogs],
});
