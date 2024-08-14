export default {
  layout: "page.html",
  tags: "_blog",
  eleventyComputed: {
    permalink: (data) => `/blog/${data.page.fileSlug}/`,
    title: async function (data) {
      if (data.title !== "") return data.title;
      return await import(`./${data.page.fileSlug}.mdx`).then((p) => p.title);
    },
  },
};
