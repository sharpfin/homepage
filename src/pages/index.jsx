import * as React from "react"
import Header from '../components/header'
import Landing from '../components/landing'
import CustomerTypes2 from '../components/customer-types-2'
import Solutions from '../components/solutions'
import Customers from '../components/customers'
import Articles from '../components/articles'
import Contact from '../components/contact'
import Footer from '../components/footer'
import SEO from '../components/SEO'

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <Header light={true} />
      <main>
        <Landing />
        <CustomerTypes2 />
        <Customers />
        <Solutions />
        <Articles />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default IndexPage
