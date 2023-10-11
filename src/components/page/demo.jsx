import { graphql, StaticQuery } from 'gatsby';
import React from "react";
import translations from '../../translations/translations';
import Context from '../context';
import Layout from '../layout';
import LayoutContainer from '../layout-container';
import Quotes from '../quotes'
import Video from '../video';

const Demo = ({ data, langKey }) => {
    const t = translations(langKey)

    return (
        <Context langKey={langKey} >
            <Layout>
                <div className="bg-cover  bg-blue-50">
                    <LayoutContainer title={"Sharpfin in Action"}>
                        <h1 className="text-4xl font-bold mb-5"></h1>
                        <div className="grid gap-10 lg:gap-20  lg:grid-cols-2" >
                            <div>
                                <div className="font-medium text-gray-500 mb-10 flex-col space-y-3 text-lg">
                                    <p>Curious about the latest innovations by our development team?</p>
                                    <p>Schedule a demo to experience Sharpfin’s customer centric, interactive, and scalable Wealth Management System in action.</p>
                                    <p>Your business evolves, so do your customers, and so should your systems.</p>
                                    <p>What to anticipate in the demo:</p>
                                    <ul className='list-disc text-xl list-inside text-sharpfin-gray font-semibold '>
                                        <li>System Overview</li>
                                        <li>Back & Front Office Solution</li>
                                        <li>Price Point </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex-col z-20 ">


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
                                            <label htmlFor="area_of_interest" className="">Area of Interest*</label>
                                            <select id="area_of_interest" name="area_of_interest" required className="block text-black py-2 border-r-5 px-4 rounded w-full">
                                                <option value="wealth_manager">Wealth Manager</option>
                                                <option value="family_office">Family Office</option>
                                                <option value="financial_advisor">Financial Advisor</option>
                                                <option value="mutual_fund_manager">Mutual Fund Managert</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="role" className="">Role*</label>
                                            <select id="role" name="role" required className="block text-black py-2 border-r-5 px-4 rounded w-full">
                                                <option value="other">Other</option>
                                                <option value="ceo">CEO</option>
                                                <option value="coo">COO</option>
                                                <option value="cto">CTO</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="justify-self-end hover:bg-sharpfin-gray border hover:border-white text-white font-medium px-5 py-2 rounded border-sharpfin-blue bg-sharpfin-blue">Book a demo</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </LayoutContainer>
                    <Video />
                    <Quotes />
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