import * as React from "react"
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';

const Banks = ({ data }) => {
    return (
        <div className="grid justify-center bg-sharpfin-gray gap-5 py-32">
            <h3 className="text-center font-bold text-4xl text-white">Connected to <span className="italic">your</span> favourite bank</h3>
            <div className="rounded-lg bg-white mx-5 p-10 md:gap-20 flex justify-center gap-10 items-center flex-wrap">
                <Img fluid={data.ubs.childImageSharp.fluid} className="object-fill flex-shrink-0 w-44 h-16" />
                <Img fluid={data.avanza.childImageSharp.fluid} className="flex-shrink-0 w-44 h-16" />
                <Img fluid={data.nordnet.childImageSharp.fluid} className="flex-shrink-0 w-44 h-16 " />
                <Img fluid={data.seb.childImageSharp.fluid} className="flex-shrink-0 w-44 h-32" />
            </div>
            <div className="justify-self-center ">
                <div className="flex space-x-2 items-center justify-center px-5 mb-2">
                    <p className="text-white text-xl font-bold justify-self-center">A bank missing?</p>
                    <button className="inline border-2 border-transparent hover:border-white bg-sharpfin-blue hover:bg-sharpfin-gray px-5 py-2 md:text-lg text-white font-bold rounded" onClick={() => scrollTo('#contact')}>
                        Tell us
                    </button>
                </div>
                <p className="text-white text-sm mx-5">We're always looking to expand our network of connected banks</p>
            </div>

        </div>
    )
}

export default function BanksWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                seb: file(relativePath: { eq: "seb.png" }) {
                      childImageSharp {
                          fluid(quality: 70) {
                              ...GatsbyImageSharpFluid
                        }
                    }
                }
                avanza: file(relativePath: { eq: "avanza.png" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                nordnet: file(relativePath: { eq: "nordnet.png" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                ubs: file(relativePath: { eq: "ubs.png" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
          `}
            render={data => <Banks data={data} {...props} />}
        />
    )
}

