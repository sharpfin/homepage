import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Landing = () => {
  return (
    <div className="grid gap-10 py-44 mx-5">
      <h1 className="text-3xl md:text-6xl tracking-tight font-extrabold text-gray-900 text-center ">
        <span className="block">Better <span className="text-sharpfin-blue">technology</span> for</span>
        <span className="block">wealth managers</span>
      </h1>
      <h3 className="text-center md:text-2xl text-gray-500">Sharpfin speeds up and automates important administration processes in wealth management</h3>
      <button className="button-gray w-44 justify-self-center" onClick={() => scrollTo('#contact')}>
        Get in touch!
        </button>
    </div>
  )
}

export default Landing

