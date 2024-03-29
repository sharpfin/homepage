import * as React from "react"
import Header from '../header'
import Landing from '../landing'
import CustomerTypes from '../customer-types'
import Solutions from '../solutions'
import Quotes from '../quotes'
import Articles from '../articles'
import Contact from '../contact'
import Footer from '../footer'
import Trusted from '../trusted'
import Seo from '../seo-thing'
import Context from '../context'
import translations from '../../translations/translations'
import Subscribe from '../subscribe'
import Video from "../video"

const IndexPage = ({ langKey }) => {
    const t = translations(langKey)
    return (
        <Context langKey={langKey} >
            <div>
                <Seo title={t.seo.home} />
                <Header light={false} langKey={langKey} />
                <main>
                    <Landing />
                    <Trusted />
                    <CustomerTypes />
                    <Quotes />
                    <Solutions />
                    <Video />
                    <Articles langKey={langKey} />
                    <Subscribe />
                    <Contact />
                    <Footer />
                </main>
            </div>
        </Context>
    )
}

export default IndexPage
