import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo-thing'
import Context from '../components/context'

const Template = (props) => {
  const mdx = props.data.mdx;
  const langKey = props.pageContext.langKey;

  return (
    <Context langKey={langKey}>
      <Layout title={mdx.frontmatter.title}>
        <Seo title={mdx.frontmatter.title} />
        <div className="max-w-3xl mx-auto mt-5 px-5">
          <p className="text-lg italic mt-10 font-bold">{mdx.frontmatter.intro}</p>
          <div className="blog-post mt-10 pb-10">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
        </div>
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