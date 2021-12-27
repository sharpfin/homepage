import * as React from "react"
import BrandIcon from '../images/icons/Brand.svg'
import CompliancyRiskIcon from '../images/icons/CompliancyRisk.svg'
import AdvisoryIcon from '../images/icons/remote.svg'
import RiskManagementIcon from '../images/icons/risk.svg'
import WealthAdministrationIcon from '../images/icons/WealthAdministration.svg'
import WealthManagementIcon from '../images/icons/wm.svg'
import { LangContext } from './context'
import LangLink from './LangLink'
import LayoutContainer from './layout-container'

const Solutions = () => {
    const iconClasses = "mb-5 h-24 bg-blue-50 p-4 rounded-3xl";
    const { t } = React.useContext(LangContext)
    const solutions = [
        {
            icon: <WealthManagementIcon className={iconClasses} />,
            title: t.short_solutions.wc.title,
            text: t.short_solutions.wc.text
        },
        {
            icon: <AdvisoryIcon className={iconClasses} />,
            title: t.short_solutions.adv.title,
            text: t.short_solutions.adv.text,
        },
        {
            icon: <RiskManagementIcon className={iconClasses} />,
            title: t.short_solutions.rm.title,
            text: t.short_solutions.rm.text,
        },
        {
            icon: <WealthAdministrationIcon className={iconClasses} />,
            title: t.short_solutions.wa.title,
            text: t.short_solutions.wa.text,
        },
        {
            icon: <BrandIcon className={iconClasses} />,
            title: t.short_solutions.brand.title,
            text: t.short_solutions.brand.text,
        },
        {
            icon: <CompliancyRiskIcon className={iconClasses} />,
            title: t.short_solutions.cr.title,
            text: t.short_solutions.cr.text,
        }
    ]


    return (
        <LayoutContainer
            title={t.short_solutions.title}
            titleColorClass={"text-sharpfin-gray"}
            bgColorClass={"bg-white"}
            id="solutions"
        >
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 -mx-5">
                {solutions.map(solution => (
                    <LangLink key={solution.title} to="solutions" className="bg-white p-5 rounded-xl transform duration-500 hover:bg-blue-50">
                        {solution.icon}
                        <h4 className="font-bold text-lg md:text-xl mb-5 ">{solution.title}</h4>
                        <p className="">{solution.text}</p>
                    </LangLink>
                ))}
            </div>
        </LayoutContainer>
    )
}

export default Solutions

