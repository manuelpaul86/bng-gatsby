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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/assets/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
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
        theme_color_in_head: `false`,
        },
     },
     {
       resolve: 'gatsby-plugin-offline',
       options: {
         workboxConfig: {
           globPatterns: ['.src/assets/bng-icon.gif']
         }
       }
     }
  ],
};
