import { graphql, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import CustomerTypePage from '../CustomerTypePage';
import translations from '../../translations/translations'

const FamilyOffices = ({ data, langKey }) => {
    const t = translations(langKey)
    const customer =
    {
        title: t.customer_page.family_offices.title,
        fluid: data.family.childImageSharp.fluid,
        content:
            <div className="grid gap-5">
                <p>{t.customer_page.family_offices.item_1}</p>
                <p>{t.customer_page.family_offices.item_2}</p>
            </div>,
        modules: ["wm", "rm", "rep"]
    }

    return (
        <Context langKey={langKey} >
            <CustomerTypePage customer={customer} />
        </Context>
    )
}


export default function FamilyOfficesWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                family: file(relativePath: { eq: "icons/family.jpg" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
            render={data => <FamilyOffices data={data} {...props} />}
        />
    )
}