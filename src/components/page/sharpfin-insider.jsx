import { graphql, StaticQuery } from 'gatsby';
import * as React from "react";
import BlogCard from '../blog-card';
import HighlightBlogCard from '../blog-card-highlight';
import Context from '../context';
import Layout from '../layout';
import LayoutContainer from '../layout-container';
import Subscribe from "../subscribe";

const SharpfinInsider = ({ data, langKey }) => {

    const articles = data.allMdx.edges
        .filter(({ node }) => {
            return node.frontmatter.lang === langKey || node.frontmatter.lang === "all"
        })

    const highlight = articles.shift().node;


    return (
        <Context langKey={langKey} >
            <Layout>
                <LayoutContainer title={"Sharpfin insider"} bgColorClass="bg-white">
                    {highlight && (<HighlightBlogCard
                        key={highlight.frontmatter.path}
                        title={highlight.frontmatter.title}
                        fluid={highlight?.frontmatter?.image?.childImageSharp?.fluid}
                        intro={highlight.frontmatter.intro}
                        link={highlight.frontmatter.path}
                        date={highlight.frontmatter.date} />)}
                    <SmallPosts className="mt-14" posts={articles.slice(0, 4)} />
                </LayoutContainer>

                <Subscribe />

                <LayoutContainer bgColorClass="bg-white">
                    <SmallPosts posts={articles.slice(4, -1)} />
                </LayoutContainer>
            </Layout>
        </Context>
    )
}

const SmallPosts = ({ posts, className }) => {
    return (
        <div className={`grid xl:grid-cols-4 sm:grid-cols-2  gap-5 ${className}`}>
            {posts.map(({ node }) => (
                <BlogCard
                    key={node.frontmatter.path}
                    title={node.frontmatter.title}
                    fluid={node?.frontmatter?.image?.childImageSharp?.fluid}
                    intro={node.frontmatter.intro}
                    link={node.frontmatter.path}
                    date={node.frontmatter.date} />
            ))}
        </div>
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
            render={data => <SharpfinInsider data={data} {...props} />}
        />
    )
}