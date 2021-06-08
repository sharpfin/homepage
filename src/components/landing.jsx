import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import FadedLogo from '../images/faded-logo.svg';

const Landing = () => {
  return (
    <div>
      <div className="absolute md:top-32 top-56 w-full flex justify-center px-10" style={{ zIndex: '-1' }}>
        <FadedLogo className="max-w-6xl"  />
      </div>
      <div className="grid gap-5 py-72 mx-5 " >


        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold text-sharpfin-gray text-center ">
          <span className="block"> <span className="  italic text-sharpfin-blue">Better</span> technology for</span>
          <span className="block">wealth managers</span>
        </h1>
        <h3 className="text-center font-thin md:text-xl text-gray-500">Digitize, accelerate and automate your administration processes</h3>
        <button className="rounded py-2 px-4 text-white hover:bg-sharpfin-blue bg-green-500 font-bold block justify-self-center" onClick={() => scrollTo('#contact')}>
          Request a demo today
        </button>
      </div>
    </div>
  )
}

export default Landing

