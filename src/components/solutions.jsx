import * as React from "react"
import WealthManagementIcon from '../images/icons/wm.svg'
import AdvisoryIcon from '../images/icons/advisory.svg'
import RiskManagementIcon from '../images/icons/rm.svg'
import WealthAdministrationIcon from '../images/icons/wa.svg'
import ReferenceDataIcon from '../images/icons/rd.svg'
import ChevronRight from '../images/chevron-right.svg'
import Divider from '../images/flowy-divider.svg'
import { Link } from 'gatsby'

const Solutions = () => {
    const solutions = [
        {
            icon: <WealthManagementIcon className="mx-auto mb-5 h-32" />,
            title: "Wealth Manager",
            text: "Portfolio manager, order manager connected to proprietary trading systems and more.",
            link: "/solutions#wealthmanagement"
        },
        {
            icon:  <AdvisoryIcon className="h-32 mx-auto mb-5 z-20 " />,
            title: "Advisory",
            text: "Digitize all customer documentation in a simple and structured way. Then send them for digital signing seamlessly.",
            link: "/solutions#advisory"
        },
        {
            icon:  <RiskManagementIcon className="h-32 mx-auto mb-5 z-20 " />,
            title: "Risk Manager",
            text: "Real time calculation of the most common risk measures.",
            link: "/solutions#riskmanagement"
        },
        {
            icon:  <WealthAdministrationIcon className="h-32 mx-auto mb-5 z-20 " />,
            title: "Get paid easily",
            text: "Utilise our flexible engine to calculate management fees both for funds and client portfolios.",
            link: "/solutions#wealthadministration"
        },
        {
            icon:  <ReferenceDataIcon className="h-32 mx-auto mb-5 z-20 " />,
            title: "Reference Data",
            text: "Ensures your data quality with high accuracy.",
            link: "/solutions#referencedata"
        }
    ]


    return (
        <div className="pb-10">
            <Divider />

            <h2 className="text-4xl text-center -mt-20 pb-10 font-bold">What we can do for you</h2>
            <div className="flex flex-wrap justify-center p-10 md:space-x-10 space-y-10 h-full container mx-auto">
                {solutions.map(solution => (
                    <Link to={solution.link} className="mt-10 bg-white p-5 transform rounded w-96 duration-500 hover:bg-blue-50 ">
                        {solution.icon}
                        <h4 className="font-bold text-2xl mb-5 text-center">{solution.title}</h4>
                        <p className="text-center">{solution.text}</p>
                    </Link>
                ))}
            </div>

            <Divider />
            <div className="flex justify-center -mt-20 pb-10 px-5">
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

