import * as React from "react"
import Header from '../components/header'
import Landing from '../components/landing'
import Solutions from '../components/solutions'
import Banks from '../components/banks'
import Customers from '../components/customers'
import Articles from '../components/articles'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
       <Header />
      <main>
        <Landing />
        <Solutions />
        <Customers />
        <Banks />
        <Articles />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default IndexPage
