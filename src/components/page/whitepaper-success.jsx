import { graphql, StaticQuery } from 'gatsby';
import React from "react";
import Pdf from '../../images/Sharpfin_Whitepaper-IT-Upgrade.pdf';
import Context from '../context';
import Layout from '../layout';
import LayoutContainer from '../layout-container';



const Whitepaper = ({ data, langKey }) => {


    return (
        <Context langKey={langKey} >
            <Layout>
                <div>
                    <LayoutContainer title="Thanks for submitting!">
                        <div className="w-96">
                            <p className="font-medium mb-5">Download the Sharpfin Trend Report by clicking the button below.</p>
                            <a role="button" href={Pdf} download>
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