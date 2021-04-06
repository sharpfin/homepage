import * as React from "react"
import { graphql, StaticQuery } from 'gatsby'
import QuoteIcon from '../images/quote.svg'
import ChevronRight from '../images/chevron-right-black.svg'
import ChevronLeft from '../images/chevron-left.svg'
import DotCircle from '../images/dot-circle.svg'
import Dot from '../images/dot.svg'
import Person from '../components/person'

const Customers = ({ data }) => {
  const [selectedCustomerIndex, setSelectedCustomerIndex] = React.useState(0)
  const customers = [
    {
      name: "Patrik Soko",
      title: "CEO Consensus Asset Management",
      word: "With Sharpfin we have found a vendor with a brilliant understanding for our needs. Their solution significantly increases quality in our customer reporting and saves a lot of time for our wealth management and administration personnel.",
      fluid: data.soko.childImageSharp.fluid
    },
    {
      name: "Wolfgang Lechner",
      title: "Regional Manager, Privat Consult",
      word: "I love the user friendliness of Sharpfin Wealth Management Suite. With their flexible compliance rules engine we now have a better view over the risks in our investments, and with a full history of changes.",
      fluid: data.lechner.childImageSharp.fluid
    }
  ]
  const customer = customers[selectedCustomerIndex];

  const left = () => {
    let val = selectedCustomerIndex - 1;
    if (val >= 0) {
      setSelectedCustomerIndex(val)
    } else {
      setSelectedCustomerIndex(customers.length - 1)
    }
  }

  const right = () => {
    console.log("hej")
    let val = selectedCustomerIndex + 1;
    if (val < customers.length) {
      setSelectedCustomerIndex(val)
    } else {
      setSelectedCustomerIndex(0)
    }
  }

  return (
    <div id="customers" className="pb-44">
      <div className="custom-shape-divider-top-1616746745">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <h2 className="text-4xl text-center mt-10 mb-20 font-bold">What our customers say</h2>

      <div className="grid justify-center gap-10 mx-5">

        <div className="flex bg-gray-100 rounded-2xl p-5 md:p-10 ">

          <div className="bg-gray-100 grid gap-5 rounded-sm  max-w-3xl">
            <QuoteIcon className="w-12 justify-self-center" />
            <p className="text-center text-lg">{customer.word}</p>
            <Person title={customer.title} name={customer.name} fluid={customer.fluid} />
            <div className="flex space-x-2 justify-self-center items-center">
              <button className="flex-none focus:outline-none" onClick={left}>
                <ChevronLeft fill="gray" className="w-8 h-8 text-gray-200" />
              </button>
              {[...Array(customers.length).keys()].map(index => (
                <div key={index}>
                  {index === selectedCustomerIndex && <Dot className="w-3" />}
                  {index !== selectedCustomerIndex && <DotCircle className="w-3" />}
                </div>
              ))}
              <button className="flex-none focus:outline-none" onClick={right}>
                <ChevronRight fill="gray" className="w-8 h-8 text-gray-400" />
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}


export default function CustomersWrapper(props) {
  return (
    <StaticQuery
      query={graphql`
            query {
                soko: file(relativePath: { eq: "Soko.webp" }) {
                    childImageSharp {
                        fluid(quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                lechner: file(relativePath: { eq: "Lechner.webp" }) {
                  childImageSharp {
                      fluid(quality: 70) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
            }
        `}
      render={data => <Customers data={data} {...props} />}
    />
  )
}