const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Sharpfin",
    author: "Sharpfin",
    description: "Sharpfin will help you realize your full potential with the next generation of wealth management software. ",
    siteUrl: "http:localhost:8000/",
    image: "/sharpfin_fin_only_small.png"
  },
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    'gatsby-plugin-postcss',
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Sharpfin",
          short_name: "Sharpfin",
          start_url: `/`,
          background_color: `#fff`,
          theme_color: `#000`,
          display: `standalone`,
          icon: `src/images/sharpfin_fin_only_small.png`,
        },

    },

  ],
};
