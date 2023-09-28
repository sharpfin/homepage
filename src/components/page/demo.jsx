import { graphql, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import translations from '../../translations/translations'
import Layout from '../layout';
import LayoutContainer from '../layout-container'
import Img from 'gatsby-image'

const Demo = ({ data, langKey }) => {
    const t = translations(langKey)

    return (
        <Context langKey={langKey} >
            <Layout>
                <div className="bg-cover  bg-blue-50"  >
                    <LayoutContainer>
                        <div className="grid gap-10 lg:gap-32  lg:grid-cols-2" >
                            <Img className="rounded w-96 place-self-center lg:w-full" fluid={data.whitepaper.childImageSharp.fluid} />
                            <div className="flex-col z-20 ">
                                <h1 className="text-4xl font-bold mb-5">See Sharpfin in action: 1-on-1 demo</h1>
                                <div className="font-medium text-gray-500 mb-10 flex-col space-y-3">
                                    <p>Want to know what our tech team has been working on lately? Book a demo to see our automated, interactive and scalable Wealth Management System - in action.</p>
                                    <p>Your business is evolving, so are you customers, so should your systems.</p>
                                    <p>What you can expect:</p>
                                    <ul className='list-disc md:list-outside list-inside text-sharpfin-gray'>
                                        <li>System overview</li>
                                        <li>Q&A on customizations</li>
                                        <li>Price point </li>
                                    </ul>
                                </div>
                                <div className="bg-sharpfin-gray text-white rounded p-5">
                                    <form className="grid gap-10 md:p-5" method="post" netlify-honeypot="bot-field" data-netlify="true" name="book-a-demo" action="/book-a-demo-success">
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="book-a-demo" />
                                        <div>
                                            <label htmlFor="name" className="">{t.contact.name}*</label>
                                            <input placeholder="Peter Lynch" id="name" name="name" required className="block text-black p-2  pl-4 rounded w-full"></input>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="">{t.contact.email}*</label>
                                            <input placeholder="mail@example.com" id="email" pattern="^\S+@\S+$" name="email" required className="block text-black p-2 pl-4 rounded w-full"></input>
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="">{t.contact.phone}</label>
                                            <input placeholder="+ 46 10 585 82 77" id="phone" pattern="[+,-, ,0-9]*" name="phone" className="block text-black p-2 border border-gray-300 pl-4 rounded w-full"></input>
                                        </div>
                                        <div>
                                            <label htmlFor="company_name" className="">{t.contact.company_name}*</label>
                                            <input placeholder="Fidelity Investments" id="company_name" name="company_name" required className="block text-black p-2  pl-4 rounded w-full"></input>
                                        </div>
                                        <div>
                                            <label htmlFor="area" className="">Area of interest*</label>
                                            <select id="company_name" name="company_name" required className="block text-black py-2 border-r-5 px-4 rounded w-full">
                                                <option value="asset_manager">Asset Manager</option>
                                                <option value="family_office">Family Office</option>
                                                <option value="financial_advisor">Financial Advisor</option>
                                                <option value="other">Other</option>
                                            </select>
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


export default function DemoWrapper(props) {
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
            render={data => <Demo data={data} {...props} />}
        />
    )
}