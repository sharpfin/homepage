import * as React from "react"


const Contact = ({top}) => {
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
                <h1 className="text-center font-bold text-4xl mb-10">Contact us</h1>
                <form className="grid gap-5" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <div>
                        <label htmlFor="name" className="">Name</label>
                        <input id="name" className="block p-2 border border-gray-300 pl-4 rounded w-full"></input>
                    </div>
                    <div>
                        <label htmlFor="email" className="">Email</label>
                        <input id="email" className="block p-2 border border-gray-300 pl-4 rounded w-full"></input>
                    </div>
                    <div>
                        <label htmlFor="phone" className="">Phone</label>
                        <input id="phone" className="block p-2 border border-gray-300 pl-4 rounded w-full"></input>
                    </div>
                    <div>
                        <label htmlFor="message" className="">Message</label>
                        <textarea id="message" type="texarea" className="block p-2 border border-gray-300 pl-4 rounded w-full h-32"></textarea>
                    </div>

                    <button type="submit" className="justify-self-end bg-sharpfin-blue text-white font-bold px-5 py-2 rounded hover:bg-sharpfin-gray">Send</button>
                </form>
            </div>


        </div>

    )
}

export default Contact

