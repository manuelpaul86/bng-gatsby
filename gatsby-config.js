module.exports = {
  siteMetadata: {
    title: "Barmbeker Nephrologen Gespräche",
    siteUrl: "https://www.nephrologiehamburg.de",
    description: "Monatliche nephrologische Fortbildung aus Hamburg",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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
