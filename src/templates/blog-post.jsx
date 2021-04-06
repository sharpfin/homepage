import * as React from "react"
import Header from '../components/header'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Person from '../components/person'

const Template = ({ data }) => {
    const mdx = data.mdx;
    return (
        <Layout >
            <div className="max-w-4xl mx-auto mt-5 px-5">
                <Img fluid={mdx.frontmatter.image.childImageSharp.fluid} className="rounded max-w-xl mx-auto"/>
                <h1 className="text-4xl mt-10">{mdx.frontmatter.title}</h1>
                <p className="text-lg italic mt-10 font-bold">{mdx.frontmatter.intro}</p>
                <div className="blog-post mt-10 border-b pb-10">
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                </div>
            </div>
        </Layout>
    )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markus: file(relativePath: { eq: "markus.jpeg" }) {
        childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
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