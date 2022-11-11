import { graphql, Link, StaticQuery } from 'gatsby';
import React from "react";
import translations from '../translations/translations'
import LayoutContainer from './layout-container'
import LangLink from './LangLink';
import Img from 'gatsby-image'
import Wave from '../images/wave_upside_down.png'
import ArrowRight from '../images/icons/ArrowRight.svg'


const ReadWhitepaper = ({ data, langKey }) => {
    const t = translations(langKey)

    return (
        <div className="bg-cover" style={{ backgroundImage: `url(${Wave})` }}>
            <LayoutContainer title="Sharpfin Trend Report">
                <div className="grid gap-10 md:grid-cols-2 items-center">
                    <div className="text-lg text-sharpfin-gray flex-col space-y-5 order-2 md:order-1">
                        <p className="text-xl text-medium">Your compass for digital currents in wealth management</p>
                        <p className="text-gray-500">Keeping up the pace in the ever-changing world of investment management is tricky considering the digital development across all sectors, but knowing what trends to watch may just be the simple answer.</p>
                        <div>
                            <LangLink className="" to="whitepaper">
                                <div className="w-full p-3 text-white flex justify-center rounded items-center space-x-4  bg-sharpfin-blue hover:bg-sharpfin-gray">
                                    <span>Read here</span>
                                    <ArrowRight fill="white" className="w-42" />
                                </div>
                            </LangLink>
                        </div>
                    </div>
                    <Img fluid={data.whitepaper.childImageSharp.fluid} className="w-72 rounded shadow-xl place-self-center order-1 md:order-2" />
                </div>
            </LayoutContainer>
        </div>
    );
}


export default function ReadWhitepaperWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                whitepaper: file(relativePath: { eq: "whitepaper.png" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
                }
            }
        `}
            render={data => <ReadWhitepaper data={data} {...props} />}
        />
    )
}