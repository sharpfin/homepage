import * as React from "react"
import Header from '../components/header'
import Contact from '../components/contact'
import Articles from '../components/articles'
import Footer from '../components/footer'
import Title from '../components/title'

const Layout = ({ children, title }) => {
    return (
        <div>
            <Header />
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
