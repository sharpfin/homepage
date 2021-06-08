import * as React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Estea from '../images/companies/estea_white.svg';
import Pc from '../images/companies/pc.svg';

const Trusted = ({ data }) => {
    return (
        <div className="bg-sharpfin-gray">
            <div className="bg-sharpfin-blue p-20 grid justify-center">
                {/* <h3 className="text-white text-center font-bold text-2xl">Trusted by</h3> */}
                <div className="flex  flex-wrap justify-center items-center">
                    <Estea className="h-12 m-10" />
                    <Img fluid={data.nordnet.childImageSharp.fluid} className="w-44 m-10" />
                    <Img fluid={data.consensus.childImageSharp.fluid} className="w-52 m-10" />
                    <Img fluid={data.safe.childImageSharp.fluid} className="w-52 m-10" />
                    <Pc className="w-52 m-10" />
                </div>
            </div>

        </div>
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