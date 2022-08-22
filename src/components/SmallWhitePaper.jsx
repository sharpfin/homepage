import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from "react";
import Layout from './layout';
import LayoutContainer from './layout-container';
import BackgroundSvg from "./../images/background_whitepaper3.svg"


const SmallWhitePaper = ({ data }) => {
    return (

        <div className="relative">
            <BackgroundSvg className="absolute top-0 left-0 h-full w-full z-10" />
            <LayoutContainer title="You should read our whitepaper!" titleColorClass={"text-sharpfin-gray"} className="">
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center ">
                    <div className="px-10 md:px-0 place-self-center md:place-self-auto z-20  ">
                        <Img className="shadow rounded w-72 " fluid={data.wp.childImageSharp.fluid} />
                    </div>
                    <div className="lg:col-span-2 flex flex-col space-y-5 z-20">
                        <h3 className="text-sharpfin-gray text-2xl font-bold">Sharpfin Insider</h3>
                        <p className="text-sharpfin-gray text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolores quis optio voluptatibus cupiditate repellendus, ab officia nihil totam accusantium tempore rem cum labore officiis distinctio explicabo laboriosam voluptates minima!
                        </p>
                        <Link to="/whitepaper" className="place-self-end">
                            <button className="bg-transparent  text-sharpfin-gray border-2 hover:text-white hover:bg-sharpfin-blue hover:border-sharpfin-blue px-4 border-sharpfin-gray py-2 rounded ">Take me there</button>
                        </Link>
                    </div>
                </div>
            </LayoutContainer>
        </div>

    )
}

export default function WhitepaperWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                wp: file(relativePath: { eq: "whitepaper.jpeg" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
                }
            }
        `}
            render={data => <SmallWhitePaper data={data} {...props} />}
        />
    )
}

