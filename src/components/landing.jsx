import scrollTo from 'gatsby-plugin-smoothscroll';
import * as React from "react";
import translations from '../translations/translations';
import { LangContext } from './context';
import LayoutContainer from "./layout-container";

const Landing = () => {
  const { langKey } = React.useContext(LangContext)
  const translation = translations(langKey)
  const t = translation.landing;

  return (
    <LayoutContainer bgColorClass={"bg-sharpfin-gray"}>
      <div className="grid gap-5">
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white  libre">
          <span className="block ">{t.title.top}<span className="text-sharpfin-blue ">{t.title.highlight}</span>{t.title.top2}</span>
          <span className="block ">{t.title.bottom}</span>
        </h1>
        <h3 className="font-medium lg:text-xl text-gray-400">{t.sub_title}</h3>
        <div className="justify-self-start flex space-x-5">
          <button className="rounded py-2 px-4 text-white hover:bg-sharpfin-blue bg-transparent border-white border hover:border-sharpfin-blue font-medium block" onClick={() => scrollTo('#solutions')}>
            {translation.general.learn_more}
          </button>
          <button className="rounded py-2 px-4 text-white hover:bg-sharpfin-blue hover:border-sharpfin-blue border-2 border-green-500 bg-green-500 font-medium block" onClick={() => scrollTo('#contact')}>
            {translation.general.request_demo}
          </button>
        </div>
      </div>

    </LayoutContainer>

  )
}

export default Landing

