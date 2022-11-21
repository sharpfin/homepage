import { graphql, Link, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import translations from '../../translations/translations'
import Layout from '../layout';
import LayoutContainer from '../layout-container'
import Wave from '../../images/wave.png'
import Pdf from '../../images/Sharpfin_Whitepaper_Trend-Report-2023.pdf'




const Whitepaper = ({ data, langKey }) => {
    const t = translations(langKey)

    return (
        <Context langKey={langKey} >
            <Layout>
                <div className="bg-cover " style={{ backgroundImage: `url(${Wave})` }}>
                    <LayoutContainer title="Thanks for submitting!">
                        <div className="w-96">
                            <p className="font-medium mb-5">Download the Sharpfin Trend Report by clicking the button below.</p>
                            <a href={Pdf} download>
                                <button className="w-full p-3 text-white flex justify-center rounded items-center space-x-4  bg-sharpfin-blue hover:bg-sharpfin-gray">
                                    <span>Download</span>
                                </button>
                            </a>
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
                whitepaper: file(relativePath: { eq: "whitepaper.png" }) {
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