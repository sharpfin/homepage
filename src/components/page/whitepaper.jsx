import { graphql, Link, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import translations from '../../translations/translations'
import Layout from '../layout';
import LayoutContainer from '../layout-container'
import Img from 'gatsby-image'
import TrendReportPDf from '../../images/Sharpfin_Whitepaper_Trend-Report-2023.pdf'

const Whitepaper = ({ data, langKey }) => {
    const t = translations(langKey)

    const old_papers = [
        {
            type: "Trend Report",
            title: "A compass for the digital currents in Wealth management",
            description: "Keeping up the pace in the ever-changing world of investment management is tricky considering the digital development across all sectors, but knowing what trends to watch may just be the simple answer.",
            pdf: TrendReportPDf
        }
    ]

    return (
        <Context langKey={langKey} >
            <Layout>
                <div className="bg-cover  bg-blue-50"  >
                    <LayoutContainer>
                        <div className="grid gap-10 lg:gap-32  lg:grid-cols-2" >
                            <Img className="rounded w-96 place-self-center lg:w-full" fluid={data.whitepaper.childImageSharp.fluid} />
                            <div className="flex-col z-20">
                                <p className="text-sharpfin-blue font-medium mb-1">{"# Whitepaper"}</p>
                                <h1 className="text-4xl font-bold mb-5">Boost your wealth management business</h1>
                                <p className="font-medium text-lg text-gray-500 mb-10">Stay ahead of the competition and navigate increasing regulatory burdens by digitizing traditional practices. We've gathered valuable insights to guide you through the process of incorporating system support or upgrading your current system. </p>
                                <div className="bg-sharpfin-gray text-white rounded p-5">
                                    <form className="grid gap-10 md:p-5" method="post" netlify-honeypot="bot-field" data-netlify="true" name="whitepaper" action="/whitepaper-success">
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="whitepaper" />
                                        <div>
                                            <label htmlFor="name" className="">{t.contact.name}*</label>
                                            <input placeholder="Peter Lynch" id="name" name="name" required className="block text-black p-2  pl-4 rounded w-full"></input>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="">{t.contact.email}*</label>
                                            <input placeholder="mail@example.com" id="email" pattern="^\S+@\S+$" name="email" required className="block text-black p-2 pl-4 rounded w-full"></input>
                                        </div>
                                        <button type="submit" className="justify-self-end hover:bg-sharpfin-gray border hover:border-white text-white font-medium px-5 py-2 rounded border-sharpfin-blue bg-sharpfin-blue">Download Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </LayoutContainer>
                </div>
                <LayoutContainer title="Previous Whitepapers" >
                    <div className="grid">
                        {old_papers.map((paper) => (
                            <div className="grid grid-cols-1 sm:grid-cols-5 justify-between gap-5 items-center flex-wrap bg-blue-50 p-5 md:p-10 rounded">
                                <div className="max-w-2xl grid sm:col-span-4 ">
                                    <span className="text-sharpfin-blue font-medium mb-1">{'# ' + paper.type}</span>
                                    <h3 className="text-2xl font-medium mb-5">{paper.title}</h3>
                                    <p className="text-gray-500">{paper.description}</p>
                                </div>
                                <a href={paper.pdf} download>
                                    <button className="mt-5 sm:mt-0 text-white bg-green-500 py-2 px-5 rounded w-full hover:bg-sharpfin-blue">Download</button>
                                </a>
                            </div>
                        ))}
                    </div>
                </LayoutContainer>
            </Layout>
        </Context>
    )
}


export default function WhitepaperWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                whitepaper: file(relativePath: { eq: "whitepaper_2.png" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
                }
            }
        `}
            render={data => <Whitepaper data={data} {...props} />}
        />
    )
}