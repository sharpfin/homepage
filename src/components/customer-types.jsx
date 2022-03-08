import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from "react";
import { LangContext } from './context';
import LangLink from './LangLink';
import LayoutContainer from './layout-container';

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
        <LayoutContainer
            title={t.customer_page.what}
            titleColorClass="text-sharpfin-gray"
            bgColorClass="bg-white"
        >
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 justify-self-center ">
                {customers.map(c => (
                    <LangLink key={c.title} to={c.link} className="bg-white transform duration-300 border  hover:-translate-y-2 rounded">
                        <div className="h-64">
                            <Img fluid={c.fluid} className="mx-auto h-64 rounded-t" imgStyle={{ zIndex: `-1` }} />
                        </div>
                        <div className="p-5 text-sharpfin-gray">
                            <h4 className="font-bold text-2xl mb-2">{c.title}</h4>
                            <p className="">{c.text}</p>
                        </div>
                    </LangLink>
                ))}
            </div>

        </LayoutContainer>
    )
}

export default function CustomerTypesWrapper(props) {
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
                  pension: file(relativePath: { eq: "icons/human.jpg" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                  }
                  asset: file(relativePath: { eq: "icons/woman.jpg" }) {
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

