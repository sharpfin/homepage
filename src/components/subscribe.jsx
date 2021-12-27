import * as React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { LangContext } from './context'
import LayoutContainer from './layout-container'

const Subscribe = ({ data }) => {
    const { t } = React.useContext(LangContext)
    return (
        <LayoutContainer
            title={t.sharpfin_insider.miss}
            titleColorClass="text-white"
            bgColorClass="bg-sharpfin-gray"
        >
            <div className="bg-sharpfin-gray rounded w-full ">
                <div className="grid gap-14 md:grid-cols-2 items-center">
                    <p className="text-lg text-gray-400">{t.sharpfin_insider.why_subscribe}</p>
                    <div className="">
                        <form className="grid gap-3 grid-cols-1" method="post" netlify-honeypot="bot-field" data-netlify="true" name="newsletter">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="newsletter" />
                            <input pattern="^\S+@\S+$" id="email2" name="email" placeholder="Email" className="rounded md:rounded-l py-2 pl-4 border w-full " />
                            <button type="submit" className="rounded md:rounded-r font-medium text-white bg-sharpfin-gray  py-2 hover:bg-sharpfin-blue w-full hover:border-sharpfin-blue border border-white ">{t.sharpfin_insider.subscribe_btn}</button>
                        </form>
                    </div>
                </div>

            </div>
        </LayoutContainer>
    )
}

export default function SubscribeWrapper(props) {
    return (
        <StaticQuery
            query={graphql`
            query {
                subscribe: file(relativePath: { eq: "subscribe.jpg" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
            }
        `}
            render={data => <Subscribe data={data} {...props} />}
        />
    )
}
