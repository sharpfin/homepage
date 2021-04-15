import * as React from "react"
import { graphql, StaticQuery } from 'gatsby'
import ChevronRight from '../images/chevron-right.svg'
import BlogCard from '../components/blog-card'

const Articles = ({ data }) => {
    return (
        <div>
            <div className="grid justify-center  mt-20">
                <h1 className="text-4xl text-center font-bold mb-12">Read our latest news</h1>
                <div className="flex flex-nowrap space-x-10 overflow-scroll md:overflow-hidden pl-10 items-stretch">
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

            <div className="h-72 bg-sharpfin-blue -mt-72"></div>
            <div className="bg-sharpfin-blue pt-10 grid justify-center">
                <button className="flex t-20 items-center rounded-lg w-max justify-self-center font-bold text-white bg-sharpfin-gray px-5 py-2 hover:bg-sharpfin-blue border-2 border-sharpfin-gray hover:border-white">
                    Read all news
                    <ChevronRight className="inline" />
                </button>
            </div>

            <div className="bg-sharpfin-blue flex flex-col items-center justify-center pb-20 pt-44">
                <h1 className="text-4xl text-white font-bold text-center">Never miss a thing</h1>
                <p className="text-white text-center">subscribe to our newsletter</p>
                <form className="p-5 flex space-y-2 md:space-y-0 md:space-x-2 md:flex-row flex-col w-full justify-center" method="post" netlify-honeypot="bot-field" data-netlify="true" name="newsletter">
                    <input id="email2" placeholder="Email" className=" rounded-lg md:rounded-l-lg py-2 pl-4 border-2 md:w-96 border-white" />
                    <button type="submit" className=" rounded-lg md:rounded-r-lg font-bold text-white bg-sharpfin-gray px-5 py-2 hover:bg-sharpfin-blue border-2 border-sharpfin-gray hover:border-white">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default function ArticlesWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
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
                file(relativePath: { eq: "christian.webp" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
            render={data => <Articles data={data} {...props} />}
        />
    )
}