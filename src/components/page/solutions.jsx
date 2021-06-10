import * as React from "react"
import AdvisoryIcon from '../../images/icons/remote.svg'
import WealthManagementIcon from '../../images/icons/wm.svg'
import translations from '../../translations/translations'
import Context from '../context'
import Layout from "../layout"
import SolutionView from "../SolutionView"
import RiskIcon from "../../images/icons/risk.svg"
import WealthAdministratorIcon from '../../images/icons/WealthAdministration.svg'
import PortalIcon from '../../images/icons/Brand.svg'
import ReportingIcon from '../../images/icons/reporting.svg'

export const solutionData = (t) => {
    return [
        {
            title: t.solutions.wm.title,
            id: "wm",
            sub_title: t.solutions.wm.sub_title,
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>{t.solutions.wm.item_1}</li>
                    <li>{t.solutions.wm.item_2}</li>
                    <li>{t.solutions.wm.item_3}</li>
                </ul>,
            icon: <WealthManagementIcon />
        },
        {
            title: t.solutions.adv.title,
            id: "adv",
            sub_title: t.solutions.adv.sub_title,
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>{t.solutions.adv.item_1}</li>
                    <li>{t.solutions.adv.item_2}</li>
                    <li>{t.solutions.adv.item_3}</li>
                </ul>,
            icon: <AdvisoryIcon />
        },
        {
            title: t.solutions.rm.title,
            id: "rm",
            sub_title: t.solutions.rm.sub_title,
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>{t.solutions.rm.item_1}</li>
                    <li>{t.solutions.rm.item_2}</li>
                    <li>{t.solutions.rm.item_3}</li>
                </ul>,
            icon: <RiskIcon />
        },
        {
            title: t.solutions.wa.title,
            id: "wa",
            sub_title: t.solutions.wa.sub_title,
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>{t.solutions.wa.item_1}</li>
                    <li>{t.solutions.wa.item_2}</li>
                    <li>{t.solutions.wa.item_3}</li>
                </ul>,
            icon: <WealthAdministratorIcon />
        },
        {
            title: t.solutions.rep.title,
            id: "rep",
            sub_title: t.solutions.rep.sub_title,
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>{t.solutions.rep.item_1}</li>
                    <li>{t.solutions.rep.item_2}</li>
                    <li>{t.solutions.rep.item_3}</li>
                </ul>,
            icon: <ReportingIcon />
        },
        {
            title: t.solutions.port.title,
            id: "port",
            sub_title: t.solutions.port.sub_title,
            text:
                <ul className="list-disc list-inside grid gap-2">
                    <li>{t.solutions.port.item_1}</li>
                    <li>{t.solutions.port.item_2}</li>
                    <li>{t.solutions.port.item_3}</li>
                </ul>,
            icon: <PortalIcon />
        },
    ]
}

const SolutionsPage = ({ langKey }) => {
    const t = translations(langKey)
    const data = solutionData(t)
    return (
        <Context langKey={langKey} >
            <Layout title={t.solutions.title}>
                <div className="mx-auto my-20">
                    {data.map((solution, index) => (
                        <div>
                            <SolutionView
                                title={solution.title}
                                sub_title={solution.sub_title}
                                icon={solution.icon}
                                text={solution.text}
                                left={index % 2 === 0}
                                className="my-44 max-w-5xl mx-auto" />
                        </div>
                    ))}
                </div>
            </Layout>
        </Context>
    )
}

export default SolutionsPage
