import { graphql, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import CustomerTypePage from '../CustomerTypePage';
import translations from '../../translations/translations'

const AssetManagers = ({ data, langKey }) => {
    const t = translations(langKey)
    const customer =
    {
        title: t.customer_page.asset_managers.title,
        fluid: data.asset.childImageSharp.fluid,
        content:
            <div className="grid gap-5">
                <p>{t.customer_page.asset_managers.item_1}</p>
                <p>{t.customer_page.asset_managers.item_2}</p>
                <p>{t.customer_page.asset_managers.item_3}</p>
            </div>,
        modules: ["rep", "adv", "wm", "wa", "rm", "port"]
    }

    return (
        <Context langKey={langKey} >
            <CustomerTypePage customer={customer} />
        </Context>)
}


export default function AssetManagersWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
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