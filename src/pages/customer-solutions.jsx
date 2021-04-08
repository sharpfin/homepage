import * as React from "react"
import BlogCard from '../components/blog-card'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Title from "../components/title"
import Img from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll';

const CustomerSolutions = ({ data }) => {

    const customers = [
        {
            link: "/",
            id: "familyoffices",
            fluid: data.family.childImageSharp.fluid,
            title: "Family Offices",
            content:
                <div className="grid gap-5">
                    <p>Do you think it’s possible to deliver top class wealth management holding on to tedious manual processes for data scattered over multiple sources?</p>
                    <p>Imagine that a you had a cloud based solution that would consolidate all these data for you, empowering you to take control and free up time for you to make active investment decisions. Book a meeting and find out already today how Sharpfin Technologies puts a new standard for Family Office Wealth Management.</p>
                </div>
        },
        {
            link: "/",
            id: "assetmanagers",
            fluid: data.asset.childImageSharp.fluid,
            title: "Independent Asset Managers",
            text: "Sharpfins SaaS solution serves Independent Asset Managers well with technology that supports new client acquisition, automates reporting and free time up to provide even better investment advice towards your clients.",
            content:
                <div className="grid gap-5">
                    <p>Does your firm have an optimal balance of human and system capital to meet the increased pressure from regulations while providing the best service towards your clients?</p>
                    <p>Sharpfins SaaS solution serves Independent Asset Managers with technology that supports new client acquisition, automates reporting and free time up to provide even better investment advice for your clients.</p>
                    <p>Don't stand the risk of losing business entirely or being stuck in a non-profit waste land. Contact Sharpfin for a consultation, how our cloud-based technology can serve your continued growth for the future.</p>
                </div>
        },
        {
            link: "/",
            id: "advisors",
            fluid: data.pension.childImageSharp.fluid,
            title: "Financial- and Pension advisors",
            text: "Sharpfin helps pension and insurance companies such as Nordnet Pensionsförsäkring to improve efficiency in their client meetings with up to 30 minutes per meeting.",
            content:
                <div className="grid gap-5">
                    <p>Do you ever have the feeling that regulatory paperwork takes up too much time of your meetings and that you hardly have any time left to focus on you clients’ financialneeds for the future?</p>
                    <p>Sharpfin helps pension and insurance companies to improve efficiency in their client meetings with up to 75% per meeting compared to previous solutions.</p>
                    <div>
                        <p>Our offering includes:</p>
                        <ul className="list-disc list-inside grid gap-2 my-2">
                            <li>a completely digital advisory process</li>
                            <li>full electronic traceability</li>
                            <li>a complete set of documentation automatically generated and branded in yourcorporate identity, and</li>
                            <li>integration with electronic signatures via Scrive enabling you to serve your clients remote</li>
                        </ul>
                        <p>Book a meeting to find out how we can help your organization.</p>
                    </div>
                </div>
        },
    ]

    return (
        <Layout title="Customer Solutions">
            <div className="max-w-6xl my-16 py-16 mx-auto px-5 lg:px-0 grid justify-center gap-44">
                {customers.map(c => (
                    <div id={c.id} className="grid xl:grid-cols-2 gap-10 max-w-xl xl:max-w-none ">
                        <div className="grid gap-2 items-center order-2 xl:order-none">
                            <h3 className="font-bold text-2xl md:text-3xl">{c.title}</h3>
                            {c.content}
                            <button onClick={() => scrollTo('#contact')} className="mt-5 justify-self-center bg-sharpfin-blue flex items-center hover:bg-sharpfin-gray px-5 py-2 text-white font-bold rounded">
                                Request a demo
                            </button>

                        </div>
                        <Img className="order-1 xl:order-none rounded" fluid={c.fluid} />
                    </div>
                ))}
            </div>

        </Layout>
    )
}
export default CustomerSolutions


export const pageQuery = graphql`
              query {
                  family: file(relativePath: { eq: "icons/family_office_small_blue.jpg" }) {
                      childImageSharp {
                          fluid(quality: 70) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  pension: file(relativePath: { eq: "icons/pension_advice_small_blue.jpg" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                  }
                  asset: file(relativePath: { eq: "icons/wealth_management_small_blue.jpg" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
              }
          `

