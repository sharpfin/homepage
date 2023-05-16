import * as React from "react";
import BlogCard from './blog-card';
import HighlightBlogCard from './blog-card-highlight';
import Context from './context';
import Layout from './layout';
import LayoutContainer from './layout-container';
import Subscribe from "./subscribe";

const Blog = ({articles, title, langKey }) => {
    const highlight = articles.shift().node;
    return (
        <Context langKey={langKey} >
            <Layout>
                <LayoutContainer title={title} bgColorClass="bg-white">
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


export default Blog;