import * as React from "react"
import Header from '../components/header'
import Landing from '../components/landing'
import CustomerTypes from '../components/customer-types'
import CustomerTypes2 from '../components/customer-types-2'
import Solutions from '../components/solutions'
import Customers from '../components/customers'
import Articles from '../components/articles'
import Contact from '../components/contact'
import Footer from '../components/footer'


const IndexPage = () => {
  return (
    <div>
      <Header light={true} />
      <main>
        <Landing />
        {/* <CustomerTypes /> */}
        <CustomerTypes2 />
        <Customers />
        <Solutions />
        {/* <Banks /> */}
        <Articles />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default IndexPage
