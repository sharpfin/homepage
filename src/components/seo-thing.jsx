import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {LangContext} from "./context"

const Seo = ({ description, meta, title, image }) => {
  const { t, langKey } = React.useContext(LangContext)
  const { site } = useStaticQuery(
    graphql`
       query {
         site {
           siteMetadata {
             siteUrl
             title
             image
           }
         }
       }
     `
  )

  const metaDescription = description || t.seo.description
  const ogImage = image || site.siteMetadata.image
  let twitterCardStyle
  if (image === null || image === undefined) {
    twitterCardStyle = `summary`
  } else {
    twitterCardStyle = `summary_large_image`
  }

  return (
    <Helmet
      htmlAttributes={{
        langKey,
      }}
      title={title || ""}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: twitterCardStyle,
        },
        {
          name: `twitter:creator`,
          content: `@sharpfinfs`,
        },
        {
          name: `og:image`,
          content: `${site.siteMetadata.siteUrl}${ogImage}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
