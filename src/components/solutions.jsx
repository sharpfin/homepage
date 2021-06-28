import * as React from "react"
import ChevronRight from '../images/chevron-right.svg'
import Divider from '../images/flowy-divider.svg'
import WealthAdministrationIcon from '../images/icons/WealthAdministration.svg'
import BrandIcon from '../images/icons/Brand.svg'
import AdvisoryIcon from '../images/icons/remote.svg'
import RiskManagementIcon from '../images/icons/risk.svg'
import CompliancyRiskIcon from '../images/icons/CompliancyRisk.svg'
import WealthManagementIcon from '../images/icons/wm.svg'
import { LangContext } from './context'
import LangLink from './LangLink'

const Solutions = () => {
    const iconClasses="mx-auto mb-5 h-32";
    const { t } = React.useContext(LangContext)
    const solutions = [
        {
            icon: <WealthManagementIcon className={iconClasses} />,
            title: t.short_solutions.wc.title,
            text: t.short_solutions.wc.text
        },
        {
            icon:  <AdvisoryIcon className={iconClasses} />,
            title: t.short_solutions.adv.title,
            text: t.short_solutions.adv.text,
        },
        {
            icon:  <RiskManagementIcon className={iconClasses} />,
            title: t.short_solutions.rm.title,
            text: t.short_solutions.rm.text,
        },
        {
            icon:  <WealthAdministrationIcon className={iconClasses} />,
            title: t.short_solutions.wa.title,
            text: t.short_solutions.wa.text,
        },
        {
            icon:  <BrandIcon className={iconClasses} />,
            title: t.short_solutions.brand.title,
            text: t.short_solutions.brand.text,
        },
        {
            icon:  <CompliancyRiskIcon className={iconClasses} />,
            title: t.short_solutions.cr.title,
            text: t.short_solutions.cr.text,
        }
    ]


    return (
        <div className="pb-10">
            <Divider />

            <h2 className="text-4xl text-center -mt-20 pb-10 font-bold mx-5">{t.short_solutions.title}</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center md:p-10 pb-20 max-w-7xl mx-auto">
                {solutions.map(solution => (
                    <LangLink key={solution.title} to="solutions" className="mt-10 bg-white p-5 transform rounded max-w-sm duration-500 hover:bg-blue-50 ">
                        {solution.icon}
                        <h4 className="font-bold text-xl md:text-2xl mb-5 text-center">{solution.title}</h4>
                        <p className="text-center">{solution.text}</p>
                    </LangLink>
                ))}
            </div>

            <Divider />
            <div className="flex justify-center -mt-20 pb-10 px-5">
                <LangLink to="solutions">
                    <button className="bg-sharpfin-blue flex items-center hover:bg-sharpfin-gray px-5 py-2 text-lg text-white font-bold rounded">
                        {t.general.learn_more} <ChevronRight />
                    </button>
                </LangLink>
            </div>
        </div>
    )
}

export default Solutions

