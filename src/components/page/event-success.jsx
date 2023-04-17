import { graphql, StaticQuery } from 'gatsby';
import React from "react";
import Fondo from '../../images/fondo.svg';
import FondoHero from '../../images/fondo_hero.svg';
import Sharpfin from '../../images/sharpfin-logo-white-2.svg';
import translations from '../../translations/translations';
import Context from '../context';


const Success = ({ data, langKey }) => {
    const t = translations(langKey)

    return (
        <Context langKey={langKey}>
            <div className="bg-fondo py-20 roboto">

                <div className="px-5 mx-auto max-w-3xl text-white  h-screen">
                    <div className="grid gap-10 sm:grid-cols-2 justify-items-center mb-20 ">
                        <Sharpfin className="w-64 h-20" />
                        <Fondo className="w-52 h-20" />
                    </div>
                    <h1 className="text-5xl font-medium">Tack för din anmälan!</h1>
                    <h3 className="text-xl font-light mt-5">Vi ser fram emot att se dig på Vasagatan 10, Fredag den 12 maj kl 07:30 - 09:00.</h3>
                    <FondoHero className="mx-auto mt-40 w-80 md:w-full" />
                </div>
            </div>

        </Context >
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