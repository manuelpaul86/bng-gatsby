module.exports = {
  siteMetadata: {
    title: "bng-gatsby",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
