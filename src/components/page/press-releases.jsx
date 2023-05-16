import { graphql, StaticQuery } from 'gatsby';
import * as React from "react";
import Blog from '../Blog';
import translations from '../../translations/translations'


const PressReleases = ({ data, langKey }) => {
    const t = translations(langKey)


    const articles = data.allMdx.edges
        .filter(({ node }) => {
            return (node.frontmatter.lang === langKey || node.frontmatter.lang === "all") && node.fields.source === "press_release"
        })

    return (
        <Blog
            title={t.press.title}
            articles={articles}
            langKey={langKey} />
    )
}


export default function PressReleasesWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                    edges {
                    node {
                        fields {
                            source
                        }
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
            render={data => <PressReleases data={data} {...props} />}
        />
    )
}