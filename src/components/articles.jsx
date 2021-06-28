import * as React from "react"
import { graphql, StaticQuery } from 'gatsby'
import ChevronRight from '../images/chevron-right.svg'
import BlogCard from '../components/blog-card'
import { LangContext } from './context'
import LangLink from './LangLink'

const Articles = ({ data }) => {
    const { t, langKey } = React.useContext(LangContext)
    const articles = data.allMdx.edges
        .filter(({ node }) => {
            return node.frontmatter.lang === langKey || node.frontmatter.lang === "all"
        })
        .slice(0, 3)

    return (
        <div>

            <div className="grid justify-center mt-20 pb-5">
            <h1 className="text-4xl text-center font-bold mb-12 mx-5">{t.sharpfin_insider.read}</h1>
                <div className="flex  flex-wrap justify-center items-center">
                    {articles.map(({ node }) => (
                        <BlogCard

                            key={node.frontmatter.path}
                            title={node.frontmatter.title}
                            fluid={node?.frontmatter?.image?.childImageSharp?.fluid}
                            intro={node.frontmatter.intro}
                            link={node.frontmatter.path}
                            date={node.frontmatter.date} />
                    ))}
                </div>
            </div>

            <div className="bg-sharpfin-blue pt-10 grid justify-center">
                <LangLink to="sharpfin-insider">
                <button className="flex t-20 items-center rounded-lg w-max justify-self-center font-bold text-white bg-sharpfin-gray px-5 py-2 hover:bg-sharpfin-blue border-2 border-sharpfin-gray hover:border-white">
                    {t.sharpfin_insider.read_all}
                    <ChevronRight className="inline" />
                </button>
                </LangLink>
            </div>

            <div className="bg-sharpfin-blue flex flex-col items-center justify-center pb-20 pt-44">
                <h1 className="text-4xl text-white font-bold text-center mx-5">{t.sharpfin_insider.miss}</h1>
                <p className="text-white text-center mx-5">{t.sharpfin_insider.subscribe_text}</p>
                <form className="p-5 flex space-y-2 md:space-y-0 md:space-x-2 md:flex-row flex-col w-full justify-center" method="post" netlify-honeypot="bot-field" data-netlify="true" name="newsletter">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="newsletter" />
                    <input pattern="^\S+@\S+$" id="email2" name="email" placeholder="Email" className=" rounded-lg md:rounded-l-lg py-2 pl-4 border-2 md:w-96 border-white" />
                    <button type="submit" className=" rounded-lg md:rounded-r-lg font-bold text-white bg-sharpfin-gray px-5 py-2 hover:bg-sharpfin-blue border-2 border-sharpfin-gray hover:border-white">{t.sharpfin_insider.subscribe_btn}</button>
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
                allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                    edges {
                      node {
                        frontmatter {
                          title
                          intro
                          date(formatString: "YYYY MM DD")
                          path
                          lang
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
        `}
            render={data => <Articles data={data} {...props} />}
        />
    )
}