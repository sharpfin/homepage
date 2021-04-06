import * as React from "react"
import BlogCard from '../components/blog-card'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Title from "../components/title"

const BlogPage = ({ data }) => {
    return (
        <Layout>
            <div>
                <Title title="Blog" />
                <div className="max-w-7xl mx-auto mb-20 px-5">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-10 gap-10 justify-items-center">
                        {data.allMdx.edges.map(({ node }) => (
                            <BlogCard
                                key={node.frontmatter.path}
                                title={node.frontmatter.title}
                                fluid={node.frontmatter.image.childImageSharp.fluid}
                                intro={node.excerpt}
                                link={node.frontmatter.path} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export const pageQuery = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
            edges {
            node {
                frontmatter {
                title
                intro
                date
                path
                image {
                    childImageSharp {
                    fluid(quality: 70) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                }
                excerpt(pruneLength: 200)
            }
            }
        }
    }
`
export default BlogPage