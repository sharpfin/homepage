import * as React from "react"
import { graphql, StaticQuery } from 'gatsby'
import ChevronRight from '../images/chevron-right.svg'
import BlogCard from '../components/blog-card'
import HighlightBlogCard from './blog-card-highlight'
import { LangContext } from './context'
import LangLink from './LangLink'
import LayoutContainer from './layout-container'

const Articles = ({ data }) => {
    const { t, langKey } = React.useContext(LangContext)
    const articles = data.allMdx.edges
        .filter(({ node }) => {
            return node.frontmatter.lang === langKey || node.frontmatter.lang === "all"
        })
        .slice(0, 5)

    const highlight = articles.shift().node;

    return (
        <LayoutContainer
            title={t.sharpfin_insider.title}
            titleColorClass={"text-sharpfin-gray"}
            bgColorClass={"bg-white"}
        >
            <HighlightBlogCard
                key={highlight.frontmatter.path}
                title={highlight.frontmatter.title}
                fluid={highlight?.frontmatter?.image?.childImageSharp?.fluid}
                intro={highlight.frontmatter.intro}
                link={highlight.frontmatter.path}
                date={highlight.frontmatter.date}
            />
            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-14 border-b pb-14">
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
            <LangLink to="sharpfin-insider" className="flex justify-end">
                <div className="">
                    <button className="bg-sharpfin-gray text-white font-medium px-4 py-2 rounded hover:bg-sharpfin-blue">
                        <div className="flex">{t.sharpfin_insider.all_articles}<ChevronRight className="" /></div>
                    </button>
                </div>
            </LangLink>



        </LayoutContainer>
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
                          date(formatString: "DD MMM, YYYY")
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