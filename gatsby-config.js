module.exports = {
  siteMetadata: {
    title: "Barmbeker Nephrologen Gespräche",
    siteUrl: "https://www.nephrologiehamburg.de",
    description: "Nephrologische Fortbildung aus Hamburg",
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/bng-icon.gif`,
        cache_busting_mode: 'none',
        theme_color_in_head: false,
        },
     },
     {
       resolve: 'gatsby-plugin-offline',
       options: {
         workboxConfig: {
           globPatterns: ['src/assets/bng-icon.gif']
         }
       }
     }
  ],
};
