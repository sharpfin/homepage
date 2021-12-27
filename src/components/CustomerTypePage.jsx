import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from "react";
import translations from '../translations/translations';
import { LangContext } from './context';
import Layout from './layout';
import LayoutContainer from './layout-container';
import { solutionData } from "./page/solutions";
import SolutionView from "./SolutionView";

const AssetManagers = ({ customer }) => {
    const [selectedSolution, setSelectedSolution] = useState(0)
    const { t, langKey } = React.useContext(LangContext)

    const solutions = solutionData(translations(langKey))
        .filter(s => customer.modules.includes(s.id));

    return (
        <Layout >
            <LayoutContainer title={customer.title}>
                <div className="grid md:grid-cols-2 gap-10 ">
                    <div className="grid gap-2 items-start order-2 md:order-none ">
                        {customer.content}
                    </div>
                    <Img className="order-1 md:order-none rounded" fluid={customer.fluid} />
                </div>

            </LayoutContainer>
            <LayoutContainer
                title={t.customer_page.modules}
                bgColorClass="bg-blue-50"
            >
                <div className={`flex mb-14 place-items-center`}>
                    {solutions.map((solution, index) => (
                        <div aria-hidden="true" onClick={() => setSelectedSolution(index)} className={`grid gap-2 py-2 px-5 font-medium justify-items-center  cursor-pointer ${index === selectedSolution ? "border-2  rounded-lg bg-blue-100 border-white" : ""}`}>
                            <div className={`mx-auto w-8 h-8 lg:h-22 lg:w-22`}>{solution.icon}</div>
                            <p className="text-sm lg:block hidden">{solution.title}</p>
                        </div>
                    ))}
                </div>

                <SolutionView
                    left={true}
                    title={solutions[selectedSolution].title}
                    icon={solutions[selectedSolution].icon}
                    sub_title={solutions[selectedSolution].sub_title}
                    text={solutions[selectedSolution].text}
                    className="max-w-6xl mx-auto" />

            </LayoutContainer>
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