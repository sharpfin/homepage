import * as React from "react"
import NewsIcon from '../images/news.svg'
import Img from "gatsby-image"
import { graphql, StaticQuery } from 'gatsby'
import ChevronRight from '../images/chevron-right.svg'

const Articles = ({ data }) => {
    const articles = [
        {
            title: "Consensus Asset Management Selects Sharpfins Advisory to Digitalize its KYC and AML",
            subTitle: "Consensus Asset Management invests in Sharpfins Advisory to digitalize and structure its client onboarding to be fully compliant with rules and directives."
        },
        {
            title: "Framtidens kapital- och förmögenhetsförvaltning tar avstamp i den digitala eran",
            subTitle: "Den digitala transformationen av samhället - globalt som lokalt är ett faktum - och bankvärlden är inget undantag. ",
            image: data.file.childImageSharp.fluid
        },
        {
            title: "Safe Return Asset Management Selects Sharpfin to Digitalize Operations",
            subTitle: "Safe Return Asset Management implements a Sharpfin-powered cloud-based platform to better support its clients and make substantial efficiency improvements."
        }
    ]

    return (
        <div>
            <div className="grid justify-center mx-auto mt-20">
                <h1 className="text-4xl text-center font-bold mb-12">Latest news</h1>
                <div className="flex flex-nowrap gap-10 overflow-scroll pl-10">
                    {articles.map(a => (
                        <div key={a.title} className="mt-5 flex-shrink-0 bg-white border shadow-lg rounded-xl w-96 p-10 transform cursor-pointer duration-500 hover:-translate-y-2">
                            {!a?.image && <div className="h-44 w-44 mx-auto mb-5 flex justify-center items-center"><NewsIcon className="w-28 h-28 " /></div>}
                            {a?.image && <Img fluid={a.image} className=" rounded h-44 mx-auto mb-5" />}
                            <h3 className="font-bold border-b pb-5 mb-5">{a.title}</h3>
                            <p>{a.subTitle}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-72 bg-sharpfin-blue -mt-72"></div>
            <div className="bg-sharpfin-blue grid justify-center pb-20 pt-44">
                <h1 className="text-4xl text-white font-bold text-center">Never miss a thing</h1>
                <p className="text-white  text-center">subscribe to our newsletter</p>
                <div className="flex p-5">
                    <input placeholder="Email" className="rounded-l-lg p-2 pl-4 flex-grow border-2 md:w-96 border-white"></input>
                    <button className="flex-none rounded-r-lg font-bold text-white bg-sharpfin-gray px-5 py-2 hover:bg-sharpfin-blue border-2 border-sharpfin-gray hover:border-white">Subscribe</button>
                </div>
                <p className="text-center text-white mb-5">or</p>
                <button className="flex items-center rounded-lg w-max justify-self-center font-bold text-white bg-sharpfin-gray px-5 py-2 hover:bg-sharpfin-blue border-2 border-sharpfin-gray hover:border-white">
                    Read all news
                    <ChevronRight className="inline" />
                    </button>
            </div>
        </div>
    )
}

export default function ArticlesWrapper(props) {
    return (
      <StaticQuery
        query={graphql`
            query {
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