import { graphql, Link, StaticQuery } from 'gatsby';
import React from "react";
import Context from '../context';
import translations from '../../translations/translations'
import Sharpfin from '../../images/sharpfin-logo-white-2.svg';
import Fondo from '../../images/fondo.svg';
import FondoHero from '../../images/fondo_hero.svg';
import { ClockIcon } from '@heroicons/react/24/outline'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'


const Form = ({ t }) => {
    const inputClass = "block text-white bg-fondo p-2 border border-gray-500 border-2 border-white pl-4 rounded w-full placeholder:text-gray-500 roboto"
    return (
        <form className="grid gap-5  mt-20 text-lg" method="post" netlify-honeypot="bot-field" data-netlify="true" name="event" action="/event-success">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="event" />
            <div>
                <label htmlFor="name" className="">Namn</label>
                <input placeholder="Michael Burry" id="name" name="name" required className={inputClass}></input>
            </div>
            <div>
                <label htmlFor="email" className="">{t.contact.email}</label>
                <input placeholder="mail@example.com" id="email" pattern="^\S+@\S+$" name="email" required className={inputClass}></input>
            </div>
            <button type="submit" className="justify-self-end text-base bg-fondo border border-gray-500  text-white font-medium px-5 py-2 rounded hover:border-sharpfin-blue hover:bg-sharpfin-blue">Anmäl mig!</button>
        </form>
    )
}

const Success = ({ data, langKey }) => {
    const t = translations(langKey)

    const agenda = [
        {
            time: "07.30 - 08:00",
            title: "Frukostmingel",
            comment: "Kaffe, fralla och juice"
        },
        {
            time: "08.00 - 08.05",
            title: "Introduktion",
            comment: "Peter Bäck, Sharpfin"
        },
        {
            time: "08:05 - 08.20",
            title: "Provisionsförbud efter MiFID II?",
            comment: "Rebecca Koskinen, Fondo"
        },
        {
            time: "08.20 - 08.35",
            title: "Vad innebär egentligen DORA?",
            comment: "David Dymmel, EY"
        },
        {
            time: "08.35 - 08.50",
            title: "Spaningar på hållbarhetsområdet",
            comment: "Siri Söderström, EY"
        },
        {
            time: "08.50 - 09.00",
            title: "Summering och avslut",
            comment: "Markus Alin, Sharpfin"
        },
    ]

    const btnClass = "bg-sharpfin-gray text-white font-medium px-4 py-2 hover:bg-sharpfin-blue hover:text-white rounded"

    return (
        <Context langKey={langKey}>
            <Seo title={"Anmälan frukostseminarium"} />
            <div className="bg-fondo py-20 roboto">

                <div className="px-5 mx-auto max-w-3xl text-white  ">
                    <div className="grid gap-10 sm:grid-cols-2 justify-items-center mb-20 ">
                        <Sharpfin className="w-64 h-20" />
                        <Fondo className="w-52 h-20" />
                    </div>
                    <h1 className="text-5xl font-medium">Anmälan frukostseminarium</h1>
                    <h3 className="text-2xl font-light mt-5">Fondo och Sharpfin bjuder på frukost och ger dig senaste nytt om regelverk kopplat till hållbarhet, DORA och MiFID II med hjälp av experter från EY.</h3>


                    <Form t={t} />


                    <p className="mt-20 text-2xl mb-5">Detaljer</p>

                    <div className="font-mono text-lg   grid gap-3 ">
                        <div className="flex items-center space-x-5">
                            <CalendarIcon className=" text-gray-500 w-6 h-6" />
                            <p className="">Fredag 12 maj</p>
                        </div>
                        <div className="flex items-center  space-x-5">
                            <ClockIcon className="text-gray-500  w-6 h-6" />
                            <p className=" ">07:30 - 09:00</p>
                        </div>
                        <div className="flex items-center  space-x-5">
                            <MapPinIcon className="text-gray-500  w-6 h-6" />
                            <p className="">Sharpfin, Vasagatan 10</p>
                        </div>

                    </div>



                    <p className="mt-20 text-2xl mb-5">Agenda</p>

                    {agenda.map((a) => (
                        <div className="flex flex-col md:flex-row mb-5 md:mb-2">
                            <span className="font-mono mr-8">{a.time}</span>
                            <span className="font-mono mr-3">{a.title}</span>
                            <span className="font-mono text-gray-500">{a.comment}</span>
                        </div>
                    ))}


                    <p className="text-2xl font-medium mt-20">Vi ser fram emot att ses!</p>
                    <p className="text-xl font-light mt-2">Sharpfin & Fondo</p>

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