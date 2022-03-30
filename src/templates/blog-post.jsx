import { graphql } from "gatsby"
import Img from 'gatsby-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as React from "react"
import Context from '../components/context'
import DateFormat from '../components/date-format'
import Layout from '../components/layout'
import LayoutContainer from "../components/layout-container"
import Seo from '../components/seo-thing'
import Subscribe from '../components/subscribe'

const Template = (props) => {
  const mdx = props.data.mdx;
  const langKey = props.pageContext.langKey;

  return (
    <Context langKey={langKey}>
      <Layout>
        <Seo title={mdx.frontmatter.title} />
        <LayoutContainer>
          <div className="flex justify-center -mt-20 sm:-mt-8">
            <div className="max-w-2xl grid gap-3">
              {mdx.frontmatter?.image?.childImageSharp?.fluid && <div className="">
                <Img fluid={mdx.frontmatter?.image?.childImageSharp?.fluid} className="-mx-5 sm:mx-0" />
              </div>}
              <h1 className={`text-4xl leading-snug font-bold text-sharpfin-gray`}>{mdx.frontmatter.title}</h1>
              <DateFormat className="text-sm text-gray-500" date={mdx.frontmatter.date} />
              <p className="text-lg leading-relaxed font-semibold">{mdx.frontmatter.intro}</p>
              <div className="blog-post leading-relaxed ">
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </div>
            </div>
          </div>
        </LayoutContainer>
        <Subscribe />
      </Layout>
    </Context>
  )
}

export default Template

export const pageQuery = graphql`
  query($id: String!) {
    mdx(frontmatter: { path: { eq: $id } }) {
      body
      excerpt(pruneLength: 200)
      frontmatter {
        path
        title
        date(formatString: "YYYY MM DD")
        intro
        image {
          publicURL
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
