const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "sharpfin",
    siteUrl: "https://elastic-leavitt-4677d6.netlify.com"
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

  ],
};
