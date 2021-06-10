import * as React from "react"
import { LangContext } from './context';


const Contact = ({top}) => {
    const { t } = React.useContext(LangContext)
    return (
        <div id="contact" className="pb-10 bg-white">
            {top && <div className="custom-shape-divider-bottom-1616916981">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>}
            <div className="custom-shape-divider-top-1616849429">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="bg-white md:bg-gray-50 max-w-xl mx-auto py-10 my-20 md:rounded-2xl md:shadow-lg px-5 md:px-20 md:border">
                <h1 className="text-center font-bold text-4xl mb-10">{t.general.contact}</h1>
                <form className="grid gap-5" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <label htmlFor="name" className="">{t.contact.name}*</label>
                        <input id="name" name="name" required className="block p-2 border border-gray-300 pl-4 rounded w-full"></input>
                    </div>
                    <div>
                        <label htmlFor="email" className="">{t.contact.email}*</label>
                        <input id="email" pattern="/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/" name="email" required className="block p-2 border border-gray-300 pl-4 rounded w-full"></input>
                    </div>
                    <div>
                        <label htmlFor="message" className="">{t.contact.message}*</label>
                        <textarea id="message" name="message" type="texarea" required className="block p-2 border border-gray-300 pl-4 rounded w-full h-44"></textarea>
                    </div>

                    <button type="submit" className="justify-self-end bg-sharpfin-blue text-white font-bold px-5 py-2 rounded hover:bg-sharpfin-gray">{t.contact.send}</button>
                </form>
            </div>


        </div>

    )
}

export default Contact

