import * as React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';
import MenuIcon from '../images/menu.svg'

const Header = ({data}) => {
  return (
    <header>
      <div className="flex  p-5 items-center justify-between md:justify-around">
        <Link to="/">
          <Img fluid={data.file.childImageSharp.fluid} className="w-44" />
        </Link>
        <nav>
            <ul className="md:flex gap-5 hidden md:visible font-bold items-center text-sharpfin-gray">
                <li><Link to="/solutions" className="menu-item">Solutions</Link></li>
                <li><a href="/" className="menu-item">Blog</a></li>
                <li><a href="/" className="menu-item">Career</a></li>
                <button className="button-gray" onClick={() => scrollTo('#contact')}>
                    Contact Us
                </button>
            </ul>
            <div className="md:hidden">
              <MenuIcon className="h-8 w-8 cursor-pointer"/>
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
                file(relativePath: { eq: "sharpfin-logo.png" }) {
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

