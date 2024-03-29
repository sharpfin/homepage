import { graphql, StaticQuery } from 'gatsby';
import * as React from "react";
import Blog from '../Blog';

const SharpfinInsider = ({ data, langKey }) => {

    const articles = data.allMdx.edges
        .filter(({ node }) => {
            return (node.frontmatter.lang === langKey || node.frontmatter.lang === "all") && node.fields.source === "sharpfin_insider"
        })

    return (
        <Blog
            title="Sharpfin Insider"
            articles={articles}
            langKey={langKey} />
    )
}


export default function SharpfinInsiderWrapper(props) {
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
            render={data => <SharpfinInsider data={data} {...props} />}
        />
    )
}