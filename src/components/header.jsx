import { graphql, Link, StaticQuery } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React, { useEffect, useRef, useState } from "react";
import MenuIconBlack from '../images/menu-black.svg';
import MenuIconWhite from '../images/menu-white.svg';
import LogoBlack from '../images/sharpfin_logo_black.svg';
import LogoWhite from '../images/sharpfin-logo-white-2.svg';
import { LangContext } from './context';
import LangLink from './LangLink';

const Header = ({ data, light }) => {
  const { t, langKey } = React.useContext(LangContext)

  const inverseLangKey = langKey === "sv" ? "en" : "sv"

  const [showMenu, setShowMenu] = useState(false);
  const divRef = useRef(null)
  const buttonRef = useRef(null)
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        setShowMenu(!showMenu)
      } else if (divRef.current && !divRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef, buttonRef, showMenu]);

  return (
    <header className={`${light ? "bg-transparent" : "bg-sharpfin-gray"} font-medium flex justify-center `}>
      <div className={`flex items-center screen-width w-full mx-5 my-5 justify-between`}>
        <LangLink to="">
          {light ? <LogoBlack className="w-48" /> : <LogoWhite className="w-36 h-10" />}
        </LangLink>
        <nav>
          <ul className={`md:flex space-x-5 hidden  items-center ${light ? "text-black" : "text-white"}`}>
            <li className="menu-item"><LangLink to="solutions">{t.solutions.title}</LangLink></li>

            <div className="menu-dropdown cursor-pointer">
              <li className="menu-item">{t.header.customer}</li>
              <div className="menu-dropdown-content p-5 shadow-lg rounded text-black gap-2 bg-white">
                <li><LangLink to="asset-managers" className="menu-item">{t.customer_page.asset_managers.title}</LangLink></li>
                <li><LangLink to="family-offices" className="menu-item">{t.customer_page.family_offices.title}</LangLink></li>
                <li><LangLink to="financial-advisors" className="menu-item">{t.customer_page.financial_advisors.title}</LangLink></li>
              </div>
            </div>

            <li className="menu-item"><LangLink to="team">{t.team.title_short}</LangLink></li>

            <div className="menu-dropdown cursor-pointer">
              <li className="menu-item">{t.header.insights}</li>
              <div className="menu-dropdown-content p-5 shadow-lg rounded text-black gap-2 bg-white">
                <li><LangLink to="sharpfin-insider" className="menu-item">{"Sharpfin Insider"}</LangLink></li>
                <li><LangLink to="press-releases" className="menu-item">{t.press.title}</LangLink></li>
                <li><LangLink to="whitepaper" className="menu-item">{t.whitepaper.title}</LangLink></li>
              </div>
            </div>

            <li><button className="rounded py-1 px-4 text-white border hover:border-sharpfin-blue border-white hover:bg-sharpfin-blue bg-sharpfin-gray  font-medium block;" onClick={() => scrollTo('#contact')}>
              {t.general.contact}
            </button>
            </li>
            <li className="menu-item"><Link to={langKey === "sv" ? "/" : "/sv"}>{inverseLangKey}</Link></li>
          </ul>
          <div className="md:hidden">
            <button ref={buttonRef}>
              {light ? <MenuIconBlack className="h-8 w-8 cursor-pointer" /> : <MenuIconWhite className="h-8 w-8 cursor-pointer" />}
            </button>

            {showMenu &&
              <div ref={divRef} className="absolute z-30 bg-white p-5 rounded right-5 border">
                <ul className={`grid gap-2 items-center ${light ? "text-black" : "text-white"}`}>
                  <li><LangLink to="solutions" className="menu-item-sm">{t.solutions.title}</LangLink></li>
                  <li><LangLink to="asset-managers" className="menu-item-sm">{t.customer_page.asset_managers.title}</LangLink></li>
                  <li><LangLink to="family-offices" className="menu-item-sm">{t.customer_page.family_offices.title}</LangLink></li>
                  <li><LangLink to="financial-advisors" className="menu-item-sm">{t.customer_page.financial_advisors.title}</LangLink></li>
                  <li><LangLink to="sharpfin-insider" className="menu-item-sm">{t.sharpfin_insider.title}</LangLink></li>
                  <li><LangLink to="press-releases" className="menu-item-sm">{t.press.title}</LangLink></li>
                  <li><LangLink to="team" className="menu-item-sm">{t.team.title_short}</LangLink></li>
                  <li className="menu-item-sm"><Link to={langKey === "sv" ? "/" : "/sv"}>{inverseLangKey}</Link></li>
                  <button className="rounded mt-5 py-2 px-4 text-white bg-sharpfin-blue hover:bg-sharpfin-gray font-bold block;" onClick={() => scrollTo('#contact')}>
                    {t.general.contact}
                  </button>
                </ul>
              </div>
            }
          </div>
        </nav>
      </div>
    </header>
  )
}

export default function HeaderWrapper(props) {
  return (
    <StaticQuery
      query={graphql`
            query {
                white: file(relativePath: { eq: "sharpfin-logo-white.png" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                black: file(relativePath: { eq: "sharpfin-logo.png" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
            }
        `}
      render={data => <Header data={data} {...props} />}
    />
  )
}

