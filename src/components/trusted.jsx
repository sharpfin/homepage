import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from "react";
import Estea from '../images/companies/estea_white.svg';
import LayoutContainer from './layout-container';

const Trusted = ({ data }) => {
    return (
        <LayoutContainer

            titleColorClass={"text-white"}
            bgColorClass={"bg-sharpfin-blue"}
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-items-center lg:justify-items-start">
                <Estea className="h-12" />
                <Img fluid={data.nordnet.childImageSharp.fluid} className="w-44 " />
                <Img fluid={data.consensus.childImageSharp.fluid} className="w-52" />
                <Img fluid={data.safe.childImageSharp.fluid} className="w-52" />
            </div>
        </LayoutContainer>
    )
}



export default function TrustedWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
              query {
                  nordnet: file(relativePath: { eq: "companies/nordnet_white.png" }) {
                      childImageSharp {
                          fluid(quality: 70) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  consensus: file(relativePath: { eq: "companies/consensus_white.png" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                safe: file(relativePath: { eq: "companies/safe_return.png" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
              }
          `}
            render={data => <Trusted data={data} {...props} />}
        />
    )
}