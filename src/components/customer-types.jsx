import * as React from "react"
import WealthManagementIcon from '../images/icons/wm2.svg'
import AdvisoryIcon from '../images/icons/advisory-color.svg'
import AssetManagerIcon from '../images/icons/asset-managers-color.svg'
import FamilyOfficeIcon from '../images/icons/family-office-color.svg'
import ReferenceDataIcon from '../images/icons/rd.svg'
import ChevronRight from '../images/chevron-right.svg'
import { Link } from 'gatsby'

const Solutions = () => {
    return (
        <div className="bg-sharpfin-gray pb-10 grid">
            <div className="custom-shape-divider-top-1616622048">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="#fff" d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
                </svg>
            </div>
            <h2 className="text-white text-4xl text-center font-bold">Value proposition</h2>
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 p-5  justify-self-center mt-10">

                <Link to="/solutions#wealthmanagement" className="bg-white p-5 transform rounded w-96 duration-500 hover:bg-yellow-200 ">
                    <FamilyOfficeIcon className="mx-auto mb-5 h-44" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Family Offices</h4>
                    <p>Imagine that a you had a cloud based solution that would consolidate all these data for you, empowering you to take control and free up time for you to make active investment decisions.</p>
                </Link>

                <Link to="/solutions#advisory" className="bg-white p-5 transform  rounded w-96 duration-500 hover:bg-green-200">
                    <AssetManagerIcon className="h-44 mx-auto mb-5" />

                    <h4 className="font-bold text-2xl mb-5 text-center">Independent Asset Managers</h4>
                    <p>Sharpfins SaaS solution serves Independent Asset Managers well with technology that supports new client acquisition, automates reporting and free time up to provide even better investment advice towards your clients.</p>
                </Link>

                <Link to="/solutions#riskmanagement" className="bg-white p-5 transform rounded w-96 duration-500 hover:bg-blue-200">
                    <AdvisoryIcon className="h-44 mx-auto mb-5" />
                    <h4 className="font-bold text-2xl mb-5 text-center">Financial- and Pension advisors</h4>
                    <p>Sharpfin helps pension and insurance companies such as Nordnet Pensionsförsäkring to improve efficiency in their client meetings with up to 30 minutes per meeting.</p>
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

