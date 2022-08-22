import * as React from "react"
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Title from '../components/title'
import Seo from './seo-thing'

const Layout = ({ children, title = "", className}) => {
    return (
        <div>
            <Header />
            <Seo title={title} />
            <main>
                {title && <Title title={title} />}
                <div className={className}>
                    {children}
                </div>
                <Contact top={true} />
                <Footer />
            </main>
        </div>
    )
}

export default Layout
