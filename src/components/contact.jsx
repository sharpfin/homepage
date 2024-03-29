import { graphql, StaticQuery } from 'gatsby';
import * as React from "react";
import HomeIcon from '../images/icons/home.svg';
import { LangContext } from './context';
import LayoutContainer from "./layout-container";
import PersonContact from './PersonContact';

const Contact = ({ data }) => {
    const { t } = React.useContext(LangContext)

    return (
        <div>
            <LayoutContainer
                title={t.contact.know_more}
                titleColorClass="text-white"
                bgColorClass="bg-sharpfin-blue"
            />


            <LayoutContainer
                id="contact"
                title={t.general.contact}
                titleColorClass="text-sharpfin-gray"
                bgColorClass="bg-white"
            >
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-sharpfin-gray text-white p-5 rounded">
                        <form className="grid gap-10 md:p-5 lg:p-10" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/success">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label htmlFor="name" className="">{t.contact.name}*</label>
                                <input placeholder="Michael Burry" id="name" name="name" required className="block text-black p-2 border border-gray-300 pl-4 rounded w-full"></input>
                            </div>
                            <div>
                                <label htmlFor="email" className="">{t.contact.email}*</label>
                                <input placeholder="mail@example.com" id="email" pattern="^\S+@\S+$" name="email" required className="block text-black p-2 border border-gray-300 pl-4 rounded w-full"></input>
                            </div>
                            <div>
                                <label htmlFor="phone" className="">{t.contact.phone}</label>
                                <input placeholder="+ 46 10 585 82 77" id="phone" pattern="[+,-, ,0-9]*" name="phone" className="block text-black p-2 border border-gray-300 pl-4 rounded w-full"></input>
                            </div>
                            <div>
                                <label htmlFor="message" className="">{t.contact.message}*</label>
                                <textarea placeholder="Hello..." id="message" name="message" type="texarea" required className="block text-black p-2 border border-gray-300 pl-4 rounded w-full h-full"></textarea>
                            </div>
                            <button type="submit" className="justify-self-end bg-sharpfin-gray border border-white text-white font-medium px-5 py-2 rounded hover:border-sharpfin-blue hover:bg-sharpfin-blue">{t.contact.send}</button>
                        </form>
                    </div>
                    <div>
                        <PersonContact name="Sales" title="Stockholm" phone="+46 (0)10 585 82 77" email="sales@sharpfin.com" />
                        <PersonContact name="Support" title="Stockholm" phone="+46 (0)10 585 82 77" email="support@sharpfin.com" />
                        <div className="border-b pb-5 grid grid-cols-2">
                            <p className="font-bold">Address</p>
                            <div className="flex items-center">
                                <HomeIcon className="w-6 h-6 mr-2" />
                                <div>
                                    <p>Vasagatan 10, 4tr</p>
                                    <p>111 20 Stockholm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </LayoutContainer >
        </div>
    )
}


export default function ContactWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                subscribe: file(relativePath: { eq: "contact.jpg" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
            }
        `}
            render={data => <Contact data={data} {...props} />}
        />
    )
}


