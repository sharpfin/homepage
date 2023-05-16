const path = require(`path`)

const url = "https://condescending-mahavira-9858b9.netlify.app";

module.exports = {
  siteMetadata: {
    title: "Sharpfin",
    author: "Sharpfin",
    siteUrl: url,
    image: "/sharpfin_fin_only_small.png"
  },
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sharpfin_insider`,
        path: `${__dirname}/src/sharpfin_insider`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `press_release`,
        path: `${__dirname}/src/press_releases`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: url,
        sitemap: url + '/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-mdx-source-name',
    'gatsby-plugin-postcss',
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              wrapperStyle: 'margin-bottom: 40px; margin-left: 0; margin-right: 0; margin: auto;',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-69056047-1",
        head: true,
      },
    },
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
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false
      }
    },
  ],
};
