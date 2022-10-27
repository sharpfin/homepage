import { graphql, Link, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import translations from '../../translations/translations'
import Layout from '../layout';
import LayoutContainer from '../layout-container'
import Img from 'gatsby-image'
import Wave from '../../images/wave.png'


const Whitepaper = ({ data, langKey }) => {
    const t = translations(langKey)

    return (
        <Context langKey={langKey} >
            <Layout>
                {/* <Wave className="h-full absolute z-1 mt-20" /> */}
                <div className="bg-cover mt-10" style={{ backgroundImage: `url(${Wave})`}}>
                    <LayoutContainer>
                        <div className="grid gap-10 lg:gap-32 -mt-20 lg:mt-0 lg:grid-cols-2 wave-bg" >
                            <Img className="rounded shadow-lg w-96 place-self-center lg:w-full" fluid={data.whitepaper.childImageSharp.fluid} />
                            <div className="flex-col z-20">
                                <h1 className="text-4xl font-bold mb-10">Sharpfin Trend Report - Your compass for digital currents in wealth management</h1>
                                <p className="font-medium mb-5">Keeping up the pace in the ever-changing world of investment management is tricky considering the digital development across all sectors, but knowing what trends to watch may just be the simple answer.</p>
                                <p className="font-medium mb-10">Find some guidance here, in the Sharpfin Trend Report 2022/2023 - your compass for the digital currents in wealth management. Download it now.</p>
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
            </Layout>
        </Context>
    )
}


export default function WhitepaperWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                whitepaper: file(relativePath: { eq: "whitepaper2.png" }) {
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