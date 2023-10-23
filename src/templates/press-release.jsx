import { graphql } from "gatsby"
import * as React from "react"
import LangLink from '../components/LangLink'
import ChevronRight from '../images/chevron-right.svg'
import BaseTemplate from './base-template'

import translations from '../translations/translations'

const Template = (props) => {
    const langKey = props.pageContext.langKey;
    const t = translations(langKey)
    return (
        <BaseTemplate {...props} >
            <div className="border-2 rounded-lg border-sharpfin-blue py-10 grid place-items-center mt-10">
                <h4 className="text-2xl font-bold text-center mb-1">{t.blog.press_releases_cta.title}</h4>
                <p className="text-center">{t.blog.press_releases_cta.description}</p>
                <div className="mt-8">
                    <LangLink to="book-a-demo" className="">
                        <button className="bg-sharpfin-blue text-white font-medium px-4 py-2 rounded hover:bg-sharpfin-gray">
                            <div className="flex">
                                <span>{t.blog.press_releases_cta.cta}</span>
                                <ChevronRight className="" />
                            </div>
                        </button>
                    </LangLink>
                </div>
            </div>
        </BaseTemplate>
    )
}

export default Template

export const pageQuery = graphql`
  query($id: String!) {
    mdx(frontmatter: { path: { eq: $id } }) {
      body
      excerpt(pruneLength: 200)
      frontmatter {
        path
        title
        date(formatString: "DD MMM, YYYY")
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
