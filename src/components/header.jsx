import React, { useRef, useState, useEffect } from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';
import MenuIconBlack from '../images/menu-black.svg'
import MenuIconWhite from '../images/menu-white.svg'
import LogoBlack from '../images/sharpfin_logo_black.svg'

const Header = ({ data, light }) => {
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
        <Link to="/">
          {light ? <LogoBlack className="w-44"/> : <Img fluid={light ? data.black.childImageSharp.fluid : data.white.childImageSharp.fluid} className="w-44" />}
        </Link>
        <nav>
          <ul className={`md:flex space-x-5 hidden font-bold items-center ${light ? "text-black" : "text-white"}`}>
            <li><Link to="/solutions" className="menu-item">Solutions</Link></li>
            <li><Link to="/customer-solutions" className="menu-item">Customer Solutions</Link></li>
            <li><Link to="/blog" className="menu-item">Blog</Link></li>
            <li><Link href="/" className="menu-item">Career</Link></li>
            <button className="rounded py-2 px-4 text-white bg-sharpfin-blue hover:bg-sharpfin-gray font-bold block;" onClick={() => scrollTo('#contact')}>
              Contact Us
            </button>
          </ul>
          <div className="md:hidden">
            <button ref={buttonRef}>
              {light ? <MenuIconBlack className="h-8 w-8 cursor-pointer" /> : <MenuIconWhite className="h-8 w-8 cursor-pointer" /> }
            </button>
            {showMenu &&
              <div ref={divRef} className="absolute  bg-white p-5 rounded right-5 border">
                <ul className={`grid gap-2 items-center ${light ? "text-black" : "text-white"}`}>
                  <li><Link to="/solutions" className="menu-item-sm">Solutions</Link></li>
                  <li><Link to="/customer-solutions" className="menu-item-sm">Customer Solutions</Link></li>
                  <li><Link to="/blog" className="menu-item-sm">Blog</Link></li>
                  <li><Link href="/" className="menu-item-sm">Career</Link></li>
                  <button className="rounded mt-5 py-2 px-4 text-white bg-sharpfin-blue hover:bg-sharpfin-gray font-bold block;" onClick={() => scrollTo('#contact')}>
                    Contact Us
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

