import { graphql, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import CustomerTypePage from '../CustomerTypePage';
import translations from '../../translations/translations'

const FinancialAdvisors = ({ data, langKey }) => {
    const t = translations(langKey)
    const customer =
    {
        title: t.customer_page.financial_advisors.title,
        fluid: data.pension.childImageSharp.fluid,
        content:
            <div className="grid gap-5">
                <p>{t.customer_page.financial_advisors.item_1}</p>
                <p>{t.customer_page.financial_advisors.item_2}</p>
                <p>{t.customer_page.financial_advisors.item_3}</p>
                <ul className="list-disc list-inside grid gap-2">
                    <li>{t.customer_page.financial_advisors.list_1}</li>
                    <li>{t.customer_page.financial_advisors.list_2}</li>
                    <li>{t.customer_page.financial_advisors.list_3}</li>
                    <li>{t.customer_page.financial_advisors.list_4}</li>
                </ul>
                <p>{t.customer_page.financial_advisors.end}</p>
            </div>,
        modules: ["adv", "port"]
    }

    return (
        <Context langKey={langKey} >
            <CustomerTypePage customer={customer} />
        </Context>
    )
}


export default function FinancialAdvisorsWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                pension: file(relativePath: { eq: "icons/pension_advice_small_blue.jpg" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
                }
            }
        `}
            render={data => <FinancialAdvisors data={data} {...props} />}
        />
    )
}