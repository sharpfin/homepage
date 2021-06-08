import * as React from "react"
import WealthManagementIcon from '../images/icons/wm.svg'
import AdvisoryIcon from '../images/icons/remote.svg'
import RiskManagementIcon from '../images/icons/risk.svg'
import WealthAdministrationIcon from '../images/icons/Brand1.svg'
import ReferenceDataIcon from '../images/icons/Risk2.svg'
import ChevronRight from '../images/chevron-right.svg'
import Divider from '../images/flowy-divider.svg'
import Portfolio from '../images/icons/portfolio.svg'
import Deliver from '../images/icons/Brand2.svg'
import { Link } from 'gatsby'

const Solutions = () => {
    const iconClasses="mx-auto mb-5 h-32";
    const solutions = [
        // {
        //     icon: <Portfolio className={iconClasses} />,
        //     title: "Aggregate portfolios",
        //     text: "Our portfolio manager aggregates your or you customers portfolios in a convenient way.",
        //     link: "/solutions#wealthmanagement"
        // },
        {
            icon: <WealthManagementIcon className={iconClasses} />,
            title: "Wealth consolidation",
            text: "Sharpfin enables consolidation of both allocation and performance for your clients with holdings scattered across banks or with multiple depots in one bank.",
            link: "/solutions#wealthmanagement"
        },
        {
            icon:  <AdvisoryIcon className={iconClasses} />,
            title: "Remote client onboarding",
            text: "Digitize all your customer documentation in a simple and structured way. Utilize our seamless integration with Scrive to sign remotely.",
            link: "/solutions#advisory"
        },
        {
            icon:  <RiskManagementIcon className={iconClasses} />,
            title: "Monitor you risks",
            text: "We make sure that your clients holdings are in line with the agreed risk level at all times. Sharpfin offers constant real-time monitoring of your clients allocation and risks.",
            link: "/solutions#riskmanagement"
        },
        {
            icon:  <WealthAdministrationIcon className={iconClasses} />,
            title: "Save administration time",
            text: "Calculating your management fees can be a time consuming task especially if you offer performance fees or management fees based on daily asset under management. Using Sharpfin, this task is done within less than 5 seconds.",
            link: "/solutions#wealthadministration"
        },
        {
            icon:  <Deliver className={iconClasses} />,
            title: "Strengthen your brand",
            text: "By using our reporting or customer portal module you can move closer to your clients with branded, secure login to the system or tailor made client reporting.",
            link: "/solutions#referencedata"
        },
        {
            icon:  <ReferenceDataIcon className={iconClasses} />,
            title: "Limit compliancy risk",
            text: "Together with our partners we offer to monitor all your clients for PEP and money laundring on daily basis. You can easily manage this process through the Sharpfin user interface.",
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

