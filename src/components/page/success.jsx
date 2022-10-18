import { graphql, Link, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import translations from '../../translations/translations'
import Layout from '../layout';
import LayoutContainer from '../layout-container'
import LangLink from '../LangLink';

const Success = ({ data, langKey }) => {
    const t = translations(langKey)

    const btnClass = "bg-sharpfin-gray text-white font-medium px-4 py-2 hover:bg-sharpfin-blue hover:text-white rounded"

    return (
        <Context langKey={langKey} >
            <Layout>
                <LayoutContainer title={t.success.thanks}>
                    <LangLink to="" className={btnClass}>
                        {t.success.go_back}
                    </LangLink>
                </LayoutContainer>
            </Layout>
        </Context>
    )
}


export default function SuccessWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                pension: file(relativePath: { eq: "icons/human.jpg" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
                }
            }
        `}
            render={data => <Success data={data} {...props} />}
        />
    )
}