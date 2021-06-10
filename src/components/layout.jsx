import * as React from "react"
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Title from '../components/title'
import Seo from './Seo'

const Layout = ({ children, title }) => {
    return (
        <div>
            <Header />
            <Seo title={title} />
            <main>
                {title && <Title title={title} />}
                <div>
                    {children}
                </div>
                <Contact top={true} />
                <Footer />
            </main>
        </div>
    )
}

export default Layout
