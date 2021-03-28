import * as React from "react"
import Header from '../components/header'
import Landing from '../components/landing'
import Solutions from '../components/solutions'
import Customers from '../components/customers'
import Articles from '../components/articles'
import Contact from '../components/contact'
import Footer from '../components/footer'
import WealthManagementIcon from '../images/wealth-management.svg'
import AdvisoryIcon from '../images/advisory.svg'
import RiskManagementIcon from '../images/risk-management.svg'
import WealthAdministrationIcon from '../images/wealth-administration.svg'
import ReferenceDataIcon from '../images/reference-data.svg'
import ChevronRight from '../images/chevron-right.svg'

const SolutionsPage = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="max-w-3xl mx-auto">
                    <div className="border-b mt-10 pb-5">
                        <h1 className="text-4xl font-bold text-center">Solutions</h1>
                    </div>
                    <div id="wealthmanagement" className="border-b py-20 mx-5 flex-col md:flex-row flex md:space-x-10 justify-center md:justify-around items-center">
                        <div className="grid gap-5 mt-5 md:mt-0">
                            <h3 className="text-3xl font-bold">Wealth Management</h3>
                            <p className="font-bold">Sharpfin Wealth Manager features our easy-to-use order and portfolio manager</p>
                            <ul className="list-disc list-inside grid gap-2">
                                <li>Portfolio management views of your clients' holdings and possibility to aggregate many portfolios into consolidated views</li>
                                <li>Order manager connected to proprietary trading systems (e.g. Infront Finance) or arbitrary via FIX</li>
                                <li>Shareholders register for fund managers</li>
                            </ul>
                        </div>
                        <WealthManagementIcon className="w-44 h-44 flex-shrink-0 order-first md:order-none" />
                    </div>
                    <div id="advisory" className="border-b py-20 mx-5 flex-col md:flex-row flex md:space-x-10 justify-center md:justify-around items-center">
                        <AdvisoryIcon className="w-44 h-44 flex-shrink-0" />
                        <div className="grid gap-5 mt-5 md:mt-0">
                            <h3 className="text-3xl font-bold">Advisory</h3>
                            <p className="font-bold">Utilise Sharpfin Advisory to:</p>
                            <ul className="list-disc list-inside grid gap-2">
                                <li>Make your advisory process fully MiFID II or IDD compliant and digital</li>
                                <li>Enable your clients to login and see their holdings and performance using our customer portal</li>
                                <li>Structure your client acquisition and KYC/AML processes</li>
                            </ul>
                        </div>
                    </div>
                    <div id="riskmanagement" className="border-b py-20 mx-5 flex-col md:flex-row flex md:space-x-10 justify-center md:justify-around items-center">
                        <div className="grid gap-5 mt-5 md:mt-0">
                            <h3 className="text-3xl font-bold">Risk Management</h3>
                            <p className="font-bold">With Sharpfin Risk Manager you can control your investment restrictions by using</p>
                            <ul className="list-disc list-inside grid gap-2">
                                <li>Our flexible language to create investment restrictions for basically any data kept in the system</li>
                                <li>Real time risk monitoring of your clients' holdings, using our flexible compliance rules engine</li>
                                <li>Real time calculation of the most common risk measures such as VaR and any risk reports according to your FSA's requirements</li>
                            </ul>
                        </div>
                        <RiskManagementIcon className="w-44 h-44 flex-shrink-0 order-first md:order-none" />
                    </div>
                    <div id="wealthadministration" className="border-b py-20 mx-5 flex-col md:flex-row md:space-x-10 justify-center md:justify-around items-center">
                        <div className="grid gap-5 mt-5 md:mt-0">
                            <h3 className="text-3xl font-bold">Wealth Administration</h3>
                            <p className="font-bold">Sharpfin Wealth Administrator cuts cost and increases quality in your administration by utilising user friendly functionality for:</p>
                            <ul className="list-disc list-inside grid gap-2">
                                <li>Fund accounting and NAV-calculations</li>
                                <li>Self learning algorithm to map your securities transactions to your book keeping</li>
                                <li>Flexible engine to calculate management fees both for funds and client portfolios</li>
                            </ul>
                        </div>
                        <WealthAdministrationIcon className="w-44 h-44 flex-shrink-0 order-first md:order-none" />
                    </div>
                    <div id="referencedata" className="py-20 px-5 flex-col md:flex-row flex gap-10 justify-center md:justify-around items-center">
                        <ReferenceDataIcon className="w-44 h-44 flex-shrink-0 order-first md:order-none" />
                        <div className="grid gap-5 mt-5 md:mt-0">
                            <h3 className="text-3xl font-bold">Reference Data</h3>
                            <p className="font-bold">This module is the very heart of the Sharpfin application, the keystone for its other modules. The Sharpfin Reference Data module features:</p>
                            <ul className="list-disc list-inside grid gap-2">
                                <li>An instrument register with MiFID II-compliant data, i.e. Target Market and Cost & Charges</li>
                                <li>A flexible way of structure your clients' holdings to be able to aggregate holdings on any level</li>
                                <li>Market data manager featuring instrument prices, FX-rates as well as trading specific data</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1616916981">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
                <Contact />
                <Footer />
            </main>
        </div>
    )
}

export default SolutionsPage
