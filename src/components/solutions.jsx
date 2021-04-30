import * as React from "react"
import WealthManagementIcon from '../images/icons/wm.svg'
import AdvisoryIcon from '../images/icons/remote.svg'
import RiskManagementIcon from '../images/icons/risk.svg'
import WealthAdministrationIcon from '../images/icons/wa2.svg'
import ReferenceDataIcon from '../images/icons/rd.svg'
import ChevronRight from '../images/chevron-right.svg'
import Divider from '../images/flowy-divider.svg'
import Portfolio from '../images/icons/portfolio.svg'
import Deliver from '../images/icons/deliver.svg'
import { Link } from 'gatsby'

const Solutions = () => {
    const iconClasses="mx-auto mb-5 h-32";
    const solutions = [
        {
            icon: <Portfolio className={iconClasses} />,
            title: "Aggregate portfolios",
            text: "Our portfolio manager aggregates your or you customers portfolios in a convenient way.",
            link: "/solutions#wealthmanagement"
        },
        {
            icon: <WealthManagementIcon className={iconClasses} />,
            title: "Trade where you like",
            text: "We have connections to proprietary trading systems. Which lets you execute your trades in the trading software you love.",
            link: "/solutions#wealthmanagement"
        },
        {
            icon:  <AdvisoryIcon className={iconClasses} />,
            title: "Totally remote customer onboarding",
            text: "Digitize all customer documentation in a simple and structured way. Then send them for digital signing seamlessly.",
            link: "/solutions#advisory"
        },
        {
            icon:  <RiskManagementIcon className={iconClasses} />,
            title: "Monitor you risks",
            text: "Real time calculation of the most common risk measures.",
            link: "/solutions#riskmanagement"
        },
        {
            icon:  <WealthAdministrationIcon className={iconClasses} />,
            title: "Get paid easily",
            text: "Utilise our flexible engine to calculate management fees both for funds and client portfolios.",
            link: "/solutions#wealthadministration"
        },
        {
            icon:  <Deliver className={iconClasses} />,
            title: "Deliver customer data",
            text: "Our customer portal makes it easy to deliver reports and other documents to your customers. Fully GPDR compliant.",
            link: "/solutions#referencedata"
        },
        {
            icon:  <ReferenceDataIcon className={iconClasses} />,
            title: "High data quality",
            text: "Sharpfin ensures your data quality with our reconciliation software.",
            link: "/solutions#referencedata"
        }
    ]


    return (
        <div className="pb-10">
            <Divider />

            <h2 className="text-4xl text-center -mt-20 pb-10 font-bold">What we can do for you</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center p-10 pb-20 max-w-7xl mx-auto">
                {solutions.map(solution => (
                    <Link to={solution.link} className="mt-10 bg-white p-5 transform rounded max-w-sm duration-500 hover:bg-blue-50 ">
                        {solution.icon}
                        <h4 className="font-bold text-2xl mb-5 text-center">{solution.title}</h4>
                        <p className="text-center">{solution.text}</p>
                    </Link>
                ))}
            </div>

            <Divider />
            <div className="flex justify-center -mt-20 pb-10 px-5">
                <Link to="/solutions">
                    <button className="bg-sharpfin-blue flex items-center hover:bg-sharpfin-gray px-5 py-2 text-lg text-white font-bold rounded">
                        Learn more <ChevronRight />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Solutions

