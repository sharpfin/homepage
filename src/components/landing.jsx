import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import CircleHole from '../images/circle-hole.svg'
import CircleTr from '../images/circle-tr.svg'
import FadedLogo from '../images/faded-logo.svg';

const Landing = () => {
  return (
    <div>

      {/* <CircleHole className="absolute bottom-96 left-10 w-32 h-32" style={{ zIndex: '-1' }} />
      <CircleHole className="absolute bottom-56 left-10 w-32 h-32" style={{ zIndex: '-1' }} />
      <CircleHole className="absolute bottom-16 left-10 w-32 h-32" style={{ zIndex: '-1' }} />
      <CircleHole className="absolute bottom-0  right-32 w-56 h-56" style={{ zIndex: '-1' }} />

      <CircleHole className="absolute bottom-56 right-0 w-56 h-56" style={{ zIndex: '-1' }} /> */}
      {/* <FadedLogo className="absolute top-44 right-0 w-full mx-auto h-72  sm:invisible" style={{ zIndex: '-1' }} /> */}
      <div className="absolute md:top-32 top-56 w-full flex justify-center px-10" style={{ zIndex: '-1' }}>
        <FadedLogo className="max-w-6xl"  />
      </div>
      <div className="grid gap-5 py-72 mx-5 " >


        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-sharpfin-gray text-center ">
          <span className="block"> <span className="text-sharpfin-blue">Reliable</span> technology for</span>
          <span className="block">wealth managers</span>
        </h1>
        <h3 className="text-center md:text-xl text-gray-500">Speed up and automate your administration processes</h3>
        <button className="button-gray justify-self-center" onClick={() => scrollTo('#contact')}>
          Request a demo today
        </button>
      </div>
    </div>
  )
}

export default Landing

