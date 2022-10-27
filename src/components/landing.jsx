import scrollTo from 'gatsby-plugin-smoothscroll';
import * as React from "react";
import translations from '../translations/translations';
import { LangContext } from './context';
import LayoutContainer from "./layout-container";
import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby'
import LangLink from './LangLink';

const Landing = ({ data }) => {
  const { langKey } = React.useContext(LangContext)
  const translation = translations(langKey)
  const t = translation.landing;

  return (
    <div className="relative">
      <div className="hidden sm:block">
        <Img alt="wave" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '-1', objectFit: 'scale-down' }} fluid={data?.file?.childImageSharp.fluid} className="w-full h-full" />
      </div>
      <div className="xl:py-56 md:py-56 sm:py-32 py-10 max-w-6xl mx-auto px-5 bg-sharpfin-gray sm:bg-transparent">
        <div className="grid gap-5">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            <span className="block">{t.title.top}<span className="">{t.title.highlight}</span>{t.title.top2}</span>
            <span className="block">{t.title.bottom}</span>
          </h1>
          <h3 className="lg:text-xl text-white sm:w-96 lg:w-full">{t.sub_title}</h3>
          <div className="justify-self-start flex space-x-5">
            <button className="rounded py-2 px-4 text-white hover:bg-sharpfin-blue bg-transparent border-white border hover:border-sharpfin-blue font-medium block" onClick={() => scrollTo('#solutions')}>
              {translation.general.learn_more}
            </button>
            <button className="rounded py-2 px-4 text-white hover:bg-sharpfin-blue hover:border-sharpfin-blue border-2 border-green-500 bg-green-500 font-medium block" onClick={() => scrollTo('#contact')}>
              {translation.general.request_demo}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function LandingWrapper(props) {
  return (
    <StaticQuery
      query={graphql`
          query {
              file(relativePath: { eq: "icons/wave-dark2.png" }) {
                childImageSharp {
                    fluid(quality: 70) {
                        ...GatsbyImageSharpFluid
                    }
                }
              }
          }
      `}
      render={data => <Landing data={data} {...props} />}
    />
  )
}