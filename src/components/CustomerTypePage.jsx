import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React, { useState } from "react";
import translations from '../translations/translations';
import { LangContext } from './context';
import Layout from './layout';
import { solutionData } from "./page/solutions";
import SolutionView from "./SolutionView";

const AssetManagers = ({ customer, }) => {
    const [selectedSolution, setSelectedSolution] = useState(0)
    const { t, langKey } = React.useContext(LangContext)

    const solutions = solutionData(translations(langKey))
        .filter(s => customer.modules.includes(s.id));

    return (

        <Layout title={customer.title}>
            <div className="max-w-6xl mb-20 py-16 mx-auto px-5 lg:px-0 grid justify-center gap-44">

                <div className="grid xl:grid-cols-2 gap-10 max-w-xl xl:max-w-none ">
                    <div className="grid gap-2 items-center order-2 xl:order-none">
                        {customer.content}
                    </div>
                    <Img className="order-1 xl:order-none rounded" fluid={customer.fluid} />
                </div>

            </div>
            <div className="mb-20">
                <h2 className="text-4xl text-center font-bold mx-5 mb-10">{t.customer_page.modules}</h2>
                <div className="flex  justify-center md:space-x-5 space-x-2 place-content-center  mb-10">
                    {solutions.map((solution, index) => (
                        <div onClick={() => setSelectedSolution(index)} className={`grid gap-2 justify-items-center p-2 cursor-pointer ${index === selectedSolution ? "border-b-4 border-sharpfin-blue" : ""}`}>
                            <div className={`mx-auto md:p-2 w-8 h-8 md:w-28 md:h-28 `}  >{solution.icon}</div>
                            <p className="text-sm lg:block hidden">{solution.title}</p>
                        </div>
                    ))}
                </div>

                <SolutionView
                    title={solutions[selectedSolution].title}
                    icon={solutions[selectedSolution].icon}
                    sub_title={solutions[selectedSolution].sub_title}
                    text={solutions[selectedSolution].text}
                    className="max-w-6xl mx-auto" />
            </div>
            <div className="grid justify-center">
                <button onClick={() => scrollTo('#contact')} className="mt-5 justify-self-center bg-sharpfin-blue flex items-center hover:bg-sharpfin-gray px-5 py-2 text-white font-bold rounded">
                    {t.general.request_demo}
                </button>
            </div>
        </Layout>
    )
}


export default function AssetManagersWrapper(props) {
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
            render={data => <AssetManagers data={data} {...props} />}
        />
    )
}