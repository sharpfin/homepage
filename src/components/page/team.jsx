import { graphql, StaticQuery } from 'gatsby';
import React, { useState } from "react";
import Context from '../context';
import Img from 'gatsby-image';
import Layout from "../layout"

import translations from '../../translations/translations'
import LayoutContainer from '../layout-container';


const Team = ({ data, langKey }) => {
    const t = translations(langKey)

    const team = [
        {
            name: "Markus Alin",
            title: "CEO",
            image: data.markus.childImageSharp.fluid
        },
        {
            name: "Peter Bäck",
            title: "Head of Sales",
            image: data.peter.childImageSharp.fluid
        },
        {
            name: "Kristina Ek",
            title: "CFO",
            image: data.kristina.childImageSharp.fluid
        },
        {
            name: "Linnea Pihl Sandberg",
            title: "Sales Representative",
            image: data.linnea.childImageSharp.fluid
        },
        {
            name: "Simon Lindblom",
            title: "CTO",
            image: data.simon.childImageSharp.fluid
        },
        {
            name: "Emil Nilsson",
            title: "Software Engineer",
            image: data.emil.childImageSharp.fluid,
            email: "emil@sharpfin.com"
        }
    ]

    const [gray, setGray] = useState(team.map(t => true))

    const active = (index, val) => {
        let list = team.map(t => true)
        list[index] = val;
        setGray(list)
    }

    return (
        <Context langKey={langKey} >
            <Layout>
                <LayoutContainer title={t.team.title}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {team.map((member, index) => (
                            <div>
                                <div className="h-96"  onMouseEnter={() => active(index, false)} onMouseLeave={() => active(index, true)}>
                                    {gray[index] ?
                                        <Img fluid={member.image} className="h-96" imgStyle={{objectPosition: `top`, filter: `grayscale(1)`}}/> :
                                        <Img fluid={member.image} className="h-96" imgStyle={{objectPosition: `top`}}/>}
                                </div>
                                <div className="px-5 py-2 bg-sharpfin-blue">
                                    <p className="text-xl text-white">{member.name}</p>
                                    <p className="text-white ">{member.title}</p>
                                    {/* <p className="text-white">{member?.email}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </LayoutContainer>
            </Layout>
        </Context>)
}




export default function TeamWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                emil: file(relativePath: { eq: "team/emil.jpg" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              markus: file(relativePath: { eq: "team/markus.jpg" }) {
                childImageSharp {
                    fluid(quality: 70) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            simon: file(relativePath: { eq: "team/simon.jpg" }) {
                childImageSharp {
                    fluid(quality: 70) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            linnea: file(relativePath: { eq: "team/linnea.jpg" }) {
                childImageSharp {
                    fluid(quality: 70) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
              peter: file(relativePath: { eq: "team/peter.jpg" }) {
                childImageSharp {
                    fluid(quality: 70) {
                        ...GatsbyImageSharpFluid
                    }
                }
              }
              kristina: file(relativePath: { eq: "team/kristina.png" }) {
                childImageSharp {
                    fluid(quality: 70) {
                        ...GatsbyImageSharpFluid
                    }
                }
              }
            }
        `}
            render={data => <Team data={data} {...props} />}
        />
    )
}