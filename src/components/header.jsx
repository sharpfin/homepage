import React, { useRef, useState, useEffect } from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';
import MenuIconBlack from '../images/menu-black.svg'
import MenuIconWhite from '../images/menu-white.svg'
import LogoBlack from '../images/sharpfin_logo_black.svg'
import LogoWhite from '../images/sharpfin_logo_white.svg'
import LangLink from './LangLink'
import { LangContext } from './context'

const Header = ({ data, light }) => {
  const { t, langKey } = React.useContext(LangContext)

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
    <header>
      <div className={`flex p-5 items-center justify-between md:justify-around ${light ? "bg-transparent" : "bg-sharpfin-gray"}`}>
        <LangLink to="">
          {light ? <LogoBlack className="w-48" /> : <LogoWhite className="w-48" />}
        </LangLink>
        <nav>
          <ul className={`md:flex space-x-5 hidden font-bold items-center ${light ? "text-black" : "text-white"}`}>
            <li className="menu-item"><LangLink to="solutions">{t.solutions.title}</LangLink></li>
            <div className="menu-dropdown cursor-pointer">
              <li className="menu-item">{t.header.customer}</li>
              <div className="menu-dropdown-content p-5 shadow-lg rounded text-black gap-2 bg-white">
                <li><LangLink to="asset-managers" className="menu-item">{t.customer_page.asset_managers.title}</LangLink></li>
                <li><LangLink to="family-offices" className="menu-item">{t.customer_page.family_offices.title}</LangLink></li>
                <li><LangLink to="financial-advisors" className="menu-item">{t.customer_page.financial_advisors.title}</LangLink></li>
              </div>
            </div>
            <li className="menu-item"><LangLink to="sharpfin-insider">{t.sharpfin_insider.title}</LangLink></li>
            <li><button className="rounded py-2 px-4 text-white bg-sharpfin-blue hover:bg-sharpfin-gray font-bold block;" onClick={() => scrollTo('#contact')}>
              {t.general.contact}
            </button>
            </li>
            <li className="menu-item"><Link to={langKey === "sv" ? "/" : "/sv"}>{langKey}</Link></li>
          </ul>
          <div className="md:hidden">
            <button ref={buttonRef}>
              {light ? <MenuIconBlack className="h-8 w-8 cursor-pointer" /> : <MenuIconWhite className="h-8 w-8 cursor-pointer" />}
            </button>
            {showMenu &&
              <div ref={divRef} className="absolute  bg-white p-5 rounded right-5 border">
                <ul className={`grid gap-2 items-center ${light ? "text-black" : "text-white"}`}>
                  <li><LangLink to="solutions" className="menu-item-sm">{t.solutions.title}</LangLink></li>
                  <li><LangLink to="asset-managers" className="menu-item-sm">{t.customer_page.asset_managers.title}</LangLink></li>
                  <li><LangLink to="family-offices" className="menu-item-sm">{t.customer_page.family_offices.title}</LangLink></li>
                  <li><LangLink to="financial-advisors" className="menu-item-sm">{t.customer_page.financial_advisors.title}</LangLink></li>
                  <li><LangLink to="sharpfin-insider" className="menu-item-sm">{t.sharpfin_insider.title}</LangLink></li>
                  <li className="menu-item-sm"><Link to={langKey === "sv" ? "/" : "/sv"}>{langKey}</Link></li>
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

