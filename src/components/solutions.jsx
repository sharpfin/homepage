import * as React from "react"
import WealthManagementIcon from '../images/wealth-management.svg'
import AdvisoryIcon from '../images/advisory.svg'
import RiskManagementIcon from '../images/risk-management.svg'
import WealthAdministrationIcon from '../images/wealth-administration.svg'
import ReferenceDataIcon from '../images/reference-data.svg'
import ChevronRight from '../images/chevron-right.svg'
import { Link } from 'gatsby'

const Solutions = () => {
    return (
        <div className="bg-sharpfin-gray pb-10 ">
            <div className="custom-shape-divider-top-1616622048">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="#fff" d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
                </svg>
            </div>
            <h2 className="text-white text-4xl text-center font-bold">What we offer</h2>
            <div className="flex flex-wrap justify-center p-10 gap-10 container">

                <Link to="/solutions#wealthmanagement" className="bg-white p-5 transform rounded w-96 duration-500 md:hover:-translate-y-2">
                    <WealthManagementIcon className="w-32 mx-auto mb-5" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Wealth Manager</h4>
                    <p>Portfolio manager, order manager connected to proprietary trading systems and more.</p>
                </Link>

                <Link to="/solutions#advisory" className="bg-white p-5 transform rounded w-96 duration-500 md:hover:-translate-y-2">
                    <AdvisoryIcon className="w-32 mx-auto mb-5" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Advisory</h4>
                    <p>Digitize all customer documentation in a simple and structured way. Then send them for digital signing seamlessly.</p>
                </Link>

                <Link to="/solutions#riskmanagement" className="bg-white p-5 transform rounded w-96 duration-500 md:hover:-translate-y-2">
                    <RiskManagementIcon className="w-32 mb-5 mx-auto" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Risk Manager</h4>
                    <p>Real time calculation of the most common risk measures.</p>
                </Link>

                <Link to="/solutions#wealthadministration" className="bg-white p-5 transform rounded w-96 duration-500 md:hover:-translate-y-2">
                    <WealthAdministrationIcon className="w-32 mx-auto mb-5" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Wealth Administration</h4>
                    <p>Flexible engine to calculate management fees both for funds and client portfolios.</p>
                </Link>

                <Link to="/solutions#referencedata" className="bg-white p-5  rounded w-96 transform duration-500 md:hover:-translate-y-2">
                    <ReferenceDataIcon className="w-32 mx-auto mb-5" />
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

