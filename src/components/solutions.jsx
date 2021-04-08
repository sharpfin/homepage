import * as React from "react"
import WealthManagementIcon from '../images/icons/wm2.svg'
import AdvisoryIcon from '../images/icons/advisory.svg'
import RiskManagementIcon from '../images/icons/rm.svg'
import WealthAdministrationIcon from '../images/icons/wa.svg'
import ReferenceDataIcon from '../images/icons/rd.svg'
import ChevronRight from '../images/chevron-right.svg'
import { Link } from 'gatsby'

const Solutions = () => {
    return (
        <div className="bg-sharpfin-gray pb-10">
            <div className="custom-shape-divider-top-1616622048">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="#fff" d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
                </svg>
            </div>
            <h2 className="text-white text-4xl text-center font-bold">What we offer</h2>
            <div className="flex flex-wrap justify-center p-10 md:space-x-10 space-y-10 h-full container mx-auto">

                <Link to="/solutions#wealthmanagement" className="mt-10 bg-white p-5 transform rounded w-96 duration-500 hover:bg-green-200 ">
                    <WealthManagementIcon className="mx-auto mb-5 w-36 transform group-" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Wealth Manager</h4>
                    <p>Portfolio manager, order manager connected to proprietary trading systems and more.</p>
                </Link>

                <Link to="/solutions#advisory" className="bg-white p-5 transform  rounded w-96 duration-500 md:hover:-translate-y-2">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="mx-auto top-0 z-10 h-44">
                        <path fill="#93C5FD" d="M54.9,-20.8C61.8,3.4,51.6,30.3,34.4,41.4C17.1,52.5,-7.2,47.9,-29.6,33.4C-52,18.8,-72.5,-5.7,-67.3,-27.7C-62,-49.7,-31,-69.1,-3.5,-68C24,-66.9,48,-45.1,54.9,-20.8Z" transform="translate(100 100)" />
                    </svg>
                    <AdvisoryIcon className="w-24 mx-auto mb-5 z-20 top-0 -mt-36 " />

                    <h4 className="font-bold text-2xl mb-5 text-center pt-5">Advisory</h4>
                    <p>Digitize all customer documentation in a simple and structured way. Then send them for digital signing seamlessly.</p>
                </Link>

                <Link to="/solutions#riskmanagement" className="bg-white p-5 transform rounded w-96 duration-500 md:hover:-translate-y-2">
                    <RiskManagementIcon className="w-24 mb-5 mx-auto" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Risk Manager</h4>
                    <p>Real time calculation of the most common risk measures.</p>
                </Link>

                <Link to="/solutions#wealthadministration" className="bg-white p-5 transform rounded w-96 duration-500 md:hover:-translate-y-2">
                    <WealthAdministrationIcon className="w-24 mx-auto mb-5" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Wealth Administration</h4>
                    <p>Flexible engine to calculate management fees both for funds and client portfolios.</p>
                </Link>

                <Link to="/solutions#referencedata" className="bg-white p-5  rounded w-96 transform duration-500 md:hover:-translate-y-2">
                    <ReferenceDataIcon className="w-24 mx-auto mb-5" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Reference Data</h4>
                    <p>Ensures your data quality with high accuracy</p>
                </Link>
            </div>

            <div className="flex justify-center py-10 px-5">
                <Link to="/solutions">
                    <button className="border-2 border-transparent hover:border-white bg-sharpfin-blue flex items-center hover:bg-sharpfin-gray px-5 py-2 text-lg text-white font-bold rounded">
                        Learn more <ChevronRight />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Solutions

