import React, { useState } from "react"
import BlogCard from '../components/blog-card'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Title from "../components/title"
import Img from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll';

import WealthManagementIcon from '../images/icons/wm.svg'
import Advisory from '../images/icons/remote.svg'


const AssetManagers = ({ data }) => {
    const [selectedSolution, setSelectedSolution] = useState(0)

    const customers = [
        {
            link: "/",
            id: "assetmanagers",
            fluid: data.asset.childImageSharp.fluid,
            title: "Independent Asset Managers",
            text: "Sharpfins SaaS solution serves Independent Asset Managers well with technology that supports new client acquisition, automates reporting and free time up to provide even better investment advice towards your clients.",
            content:
                <div className="grid gap-5">
                    <p>Does your firm have an optimal balance of human and system capital to meet the increased pressure from regulations while providing the best service towards your clients?</p>
                    <p>Sharpfins SaaS solution serves Independent Asset Managers with technology that supports new client acquisition, automates reporting and free time up to provide even better investment advice for your clients.</p>
                    <p>Don't stand the risk of losing business entirely or being stuck in a non-profit waste land. Contact Sharpfin for a consultation, how our cloud-based technology can serve your continued growth for the future.</p>
                </div>
        }
    ]

    const solutions = [
        {
            title: "Wealth Management",
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>Portfolio management views of your clients' holdings and possibility to aggregate many portfolios into consolidated views</li>
                    <li>Order manager connected to proprietary trading systems (e.g. Infront Finance) or arbitrary via FIX</li>
                    <li>Shareholders register for fund managers</li>
                </ul>,
            icon: <WealthManagementIcon />
        },
        {
            title: "Advisory",
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>Make your advisory process fully MiFID II or IDD compliant and digital</li>
                    <li>Enable your clients to login and see their holdings and performance using our customer portal</li>
                    <li>Structure your client acquisition and KYC/AML processes</li>
                </ul>,
            icon: <Advisory />
        },
        {
            title: "Advisory",
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>Make your advisory process fully MiFID II or IDD compliant and digital</li>
                    <li>Enable your clients to login and see their holdings and performance using our customer portal</li>
                    <li>Structure your client acquisition and KYC/AML processes</li>
                </ul>,
            icon: <Advisory />
        },
        {
            title: "Advisory",
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>Make your advisory process fully MiFID II or IDD compliant and digital</li>
                    <li>Enable your clients to login and see their holdings and performance using our customer portal</li>
                    <li>Structure your client acquisition and KYC/AML processes</li>
                </ul>,
            icon: <Advisory />
        },
        {
            title: "Advisory",
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>Make your advisory process fully MiFID II or IDD compliant and digital</li>
                    <li>Enable your clients to login and see their holdings and performance using our customer portal</li>
                    <li>Structure your client acquisition and KYC/AML processes</li>
                </ul>,
            icon: <Advisory />
        }
    ]

    return (
        <Layout title={"Asset managers"}>
            <div className="max-w-6xl mb-20 py-16 mx-auto px-5 lg:px-0 grid justify-center gap-44">
                {customers.map(c => (
                    <div id={c.id} className="grid xl:grid-cols-2 gap-10 max-w-xl xl:max-w-none ">
                        <div className="grid gap-2 items-center order-2 xl:order-none">
                            {c.content}

                        </div>
                        <Img className="order-1 xl:order-none rounded" fluid={c.fluid} />
                    </div>
                ))}
            </div>
            <div className="mb-20">
                <h2 className="text-4xl text-center font-bold mx-5 mb-10">Commonly used modules</h2>
                <div className="flex  justify-center md:space-x-5 space-x-2 place-content-center  mb-10">
                    {solutions.map((solution, index) => (
                        <div onClick={() => setSelectedSolution(index)} className={`grid gap-2 justify-items-center p-2 cursor-pointer ${index === selectedSolution ? "border-b-4 border-sharpfin-blue" : ""}`}>
                            <div className={`mx-auto md:p-2 w-8 h-8 md:w-28 md:h-28 `}  >{solution.icon}</div>
                            <p className="text-sm lg:block hidden">{solution.title}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto ">
                    <div className="grid md:grid-cols-3 gap-10 items-center justify-items-center ">
                        <div className="w-36 h-36 md:block hidden ">
                            {solutions[selectedSolution].icon}
                        </div>
                        <div className="col-span-2 bg-sharpfin-gray text-white p-10 ">
                            <h4 className="font-bold text-2xl mb-5">{solutions[selectedSolution].title}</h4>
                            {solutions[selectedSolution].text}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid justify-center">
                <button onClick={() => scrollTo('#contact')} className="mt-5 justify-self-center bg-sharpfin-blue flex items-center hover:bg-sharpfin-gray px-5 py-2 text-white font-bold rounded">
                    Request a demo
                            </button>
            </div>
        </Layout>
    )
}

export default AssetManagers


export const pageQuery = graphql`
              query {
                  family: file(relativePath: { eq: "icons/family_office_small_blue.jpg" }) {
                      childImageSharp {
                          fluid(quality: 70) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  pension: file(relativePath: { eq: "icons/pension_advice_small_blue.jpg" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                  }
                  asset: file(relativePath: { eq: "icons/wealth_management_small_blue.jpg" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
              }
          `

