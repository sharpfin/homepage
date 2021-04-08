import * as React from "react"
import WealthManagementIcon from '../images/icons/wm2.svg'
import AdvisoryIcon from '../images/icons/advisory-color.svg'
import AssetManagerIcon from '../images/icons/asset-managers-color.svg'
import FamilyOfficeIcon from '../images/icons/family-office-color.svg'
import ReferenceDataIcon from '../images/icons/rd.svg'
import ChevronRight from '../images/chevron-right.svg'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Solutions = ({ data }) => {

    const customers = [
        {
            link: "/customer-solutions#familyoffices",
            fluid: data.family.childImageSharp.fluid,
            title: "Family Offices",
            text: "Free up your time utilizing Sharpfins consolidation of wealth management data throughout multiple sources."
        },
        {
            link: "/customer-solutions#assetmanagers",
            fluid: data.asset.childImageSharp.fluid,
            title: "Independent Asset Managers",
            text: "Wealth management is possible with only one tool for customer onboarding, constant monitoring of KYC and AML, flexible portfolio management and branded customer reporting. Sharpfin is the proof."
        },
        {
            link: "/customer-solutions#advisors",
            fluid: data.pension.childImageSharp.fluid,
            title: "Financial- and Pension advisors",
            text: "Sharpfins advisory portal helps you to significantly cut time in your advisory processes, all while making the results electronically traceable and with a seamless integration of electronic signatures."
        },
    ]

    return (
        <div className="bg-sharpfin-gray pb-10 grid">
            <div className="custom-shape-divider-top-1616622048">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="#fff" d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
                </svg>
            </div>
            <h2 className="text-white text-4xl text-center font-bold">Our Value Proposition</h2>
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 p-5 justify-self-center mt-10">
                {customers.map(c => (
                    <Link to={c.link} className="bg-white transform w-96 duration-300  hover:-translate-y-2 rounded-lg">
                        <div className="h-64">
                            <Img fluid={c.fluid} className="mx-auto  h-64 rounded-t-lg" imgStyle={{ zIndex: `-1` }} />
                            <h4 className="font-bold text-2xl -mt-44  mx-5 text-white text-center">{c.title}</h4>
                        </div>
                        <p className="p-5">{c.text}</p>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center py-10 px-5">
                <Link to="/customer-solutions">
                    <button className="border-2 border-transparent hover:border-white bg-sharpfin-blue flex items-center hover:bg-sharpfin-gray px-5 py-2 text-lg text-white font-bold rounded">
                        Learn more <ChevronRight />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default function SolutionsWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
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
          `}
            render={data => <Solutions data={data} {...props} />}
        />
    )
}
