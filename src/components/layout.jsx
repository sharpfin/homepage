import * as React from "react"
import Header from '../components/header'
import Contact from '../components/contact'
import Articles from '../components/articles'
import Footer from '../components/footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
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
