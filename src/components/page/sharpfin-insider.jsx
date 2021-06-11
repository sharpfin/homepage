import { graphql, StaticQuery } from 'gatsby';
import * as React from "react";
import translations from '../../translations/translations';
import BlogCard from '../blog-card';
import Context from '../context';
import Layout from '../layout';

const SharpfinInsider = ({ data, langKey }) => {
    const t = translations(langKey)

    const articles = data.allMdx.edges
        .filter(({ node }) => {
            return node.frontmatter.lang === langKey || node.frontmatter.lang === "all"
        })

    return (
        <Context langKey={langKey} >
            <Layout title={t.sharpfin_insider.title}>
                <div className="max-w-7xl mx-auto mb-20 px-5">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-10 gap-10 justify-items-center">
                        {articles.map(({ node }) => (
                            <BlogCard
                                key={node.frontmatter.path}
                                title={node.frontmatter.title}
                                fluid={node?.frontmatter?.image?.childImageSharp?.fluid}
                                intro={node.excerpt}
                                link={node.frontmatter.path} />
                        ))}
                    </div>
                </div>
            </Layout>
        </Context>
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
                        frontmatter {
                        title
                        intro
                        date
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