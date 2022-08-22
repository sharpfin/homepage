import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from "react";
import BlogCard from '../blog-card';
import HighlightBlogCard from '../blog-card-highlight';
import Context from '../context';
import Layout from '../layout';
import LayoutContainer from '../layout-container';
import Subscribe from "../subscribe";
import translations from '../../translations/translations'
import BackgroundSvg from "../../images/background_whitepaper3.svg"

const WhitepaperPage = ({ data, langKey }) => {
    const t = translations(langKey)

    return (
        <>


            <Context langKey={langKey} className="">


                <Layout className="relative">
                    <BackgroundSvg className="absolute top-0 left-0 h-full w-full z-0 py-32" />
                    <LayoutContainer bgColorClass={"bg-transparent relative"} >

                        <div className="grid lg:grid-cols-2 gap-5 lg:gap-16 items-start z-10">
                            <div className="lg:row-span-2 order-1 lg:order-none px-20 md:px-0">
                                <Img className="shadow rounded" fluid={data.wp.childImageSharp.fluid} />
                            </div>
                            <h1 className="order-0 lg:order-none text-sharpfin-gray text-3xl leading-10 md:text-4xl font-bold  place-self-end text-center md:text-left">
                                Download the most best Sharpfin Whitepaper!
                            </h1>
                            <div className="flex flex-col gap-5 order-2 md:order-none">
                                <p className="text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sint adipisci voluptatum enim minus facere, animi voluptates aperiam expedita! Fuga quidem unde dolor quas laboriosam distinctio doloremque labore quia vitae.
                                </p>

                                <form className="bg-sharpfin-gray px-5 py-10 grid gap-5 rounded">
                                    <div>
                                        <label htmlFor="name" className="text-white">{t.contact.name}*</label>
                                        <input placeholder="Michael Burry" id="name" name="name" required className="block text-black p-2 border border-gray-300 pl-4 rounded w-full"></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-white">{t.contact.email}*</label>
                                        <input placeholder="mail@example.com" id="email" pattern="^\S+@\S+$" name="email" required className="block text-black p-2 border border-gray-300 pl-4 rounded w-full"></input>
                                    </div>
                                    <button type="submit" className="justify-self-end bg-sharpfin-gray border border-white text-white font-medium px-5 py-2 rounded hover:border-sharpfin-blue hover:bg-sharpfin-blue">Send me the Report!</button>

                                </form>
                            </div>
                        </div>
                    </LayoutContainer>
                </Layout>
            </Context>
        </>

    )
}

export default function WhitepaperWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                wp: file(relativePath: { eq: "whitepaper.jpeg" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
                }
            }
        `}
            render={data => <WhitepaperPage data={data} {...props} />}
        />
    )
}