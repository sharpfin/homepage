import * as React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';
import MenuIcon from '../images/menu.svg'

const Header = ({data}) => {
  return (
    <header>
      <div className="flex p-5 items-center justify-between md:justify-around bg-sharpfin-gray">
        <Link to="/">
          <Img fluid={data.file.childImageSharp.fluid} className="w-44" />
        </Link>
        <nav>
            <ul className="md:flex space-x-5 hidden md:visible font-bold items-center text-white">
                <li><Link to="/solutions" className="menu-item">Solutions</Link></li>
                <li><Link to="/customer-solutions" className="menu-item">Customer Solutions</Link></li>
                <li><Link to="/blog" className="menu-item">Blog</Link></li>
                <li><Link href="/" className="menu-item">Career</Link></li>
                <button className="rounded py-2 px-4 text-white bg-sharpfin-blue border-2 border-transparent hover:border-white hover:bg-sharpfin-gray font-bold block;" onClick={() => scrollTo('#contact')}>
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
                file(relativePath: { eq: "logo-white.webp" }) {
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

