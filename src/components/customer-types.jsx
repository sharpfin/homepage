import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from "react";
import { LangContext } from './context';
import LangLink from './LangLink';

const CustomerTypes = ({ data }) => {
    const { t } = React.useContext(LangContext)

    const customers = [
        {
            link: "family-offices",
            fluid: data.family.childImageSharp.fluid,
            title: t.customer_page.family_offices.title,
            text: t.customer_page.family_offices.short
        },
        {
            link: "asset-managers",
            fluid: data.asset.childImageSharp.fluid,
            title: t.customer_page.asset_managers.title,
            text: t.customer_page.asset_managers.short,
        },
        {
            link: "financial-advisors",
            fluid: data.pension.childImageSharp.fluid,
            title: t.customer_page.financial_advisors.title,
            text: t.customer_page.financial_advisors.short,
        },
    ]

    return (
        <div className="bg-sharpfin-gray py-44  grid">
            <h2 className="text-white text-4xl text-center font-bold mx-5">{t.customer_page.what}</h2>
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 p-5 justify-self-center mt-10">
                {customers.map(c => (
                    <LangLink key={c.title} to={c.link} className="bg-white transform max-w-sm duration-300  hover:-translate-y-2 rounded-lg">
                        <div className="h-64">
                            <Img fluid={c.fluid} className="mx-auto h-64 rounded-t-lg" imgStyle={{ zIndex: `-1` }} />
                            <h4 className="font-bold text-2xl -mt-44 mx-5 text-white text-center">{c.title}</h4>
                        </div>
                        <p className="p-5 text-center">{c.text}</p>
                    </LangLink>
                ))}
            </div>
        </div>
    )
}

export default function CustomerTypesWrapper(props) {
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
            render={data => <CustomerTypes data={data} {...props} />}
        />
    )
}

