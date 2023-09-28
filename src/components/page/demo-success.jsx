import { graphql, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import Layout from '../layout';
import LayoutContainer from '../layout-container';



const DemoSuccess = ({ data, langKey }) => {


    return (
        <Context langKey={langKey} >
            <Layout>
                <div>
                    <LayoutContainer title="Thank you for your interest in Sharpfin. ">
                        <div>
                            <p className="font-medium max-w-3xl text-xl mb-5">Our team will contact you within the next business day, to set up a day and time suitable for your busy schedule. </p>

                        </div>
                    </LayoutContainer>
                </div>
            </Layout>
        </Context>
    )
}

export default function DemoSuccessWrapper(props) {
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
            render={data => <DemoSuccess data={data} {...props} />}
        />
    )
}