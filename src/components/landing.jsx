import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import FadedLogo from '../images/faded-logo.svg';
import translations from '../translations/translations'
import { LangContext } from './context'

const Landing = () => {
  const { langKey } = React.useContext(LangContext)
  const translation = translations(langKey)
  const t = translation.landing;

  return (
    <div>
      <div className="absolute md:top-32 top-56 w-full md:flex justify-center px-10 hidden" style={{ zIndex: '-1' }}>
        <FadedLogo className="max-w-6xl"  />
      </div>
      <div className="grid gap-5 md:py-72 py-32 mx-5 " >
        <h1 className="text-2xl sm:text-5xl md:text-6xl  font-bold text-sharpfin-gray text-center ">
          <span className="block">{t.title.top}<span className="italic text-sharpfin-blue">{t.title.highlight}</span>{t.title.top2}</span>
          <span className="block">{t.title.bottom}</span>
        </h1>
        <h3 className="text-center font-thin md:text-xl text-gray-500">{t.sub_title}</h3>
        <button className="rounded py-2 px-4 text-white hover:bg-sharpfin-blue bg-green-500 font-bold block justify-self-center" onClick={() => scrollTo('#contact')}>
          {translation.general.request_demo}
        </button>
      </div>
    </div>
  )
}

export default Landing

