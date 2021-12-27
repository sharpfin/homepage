import { graphql, StaticQuery } from 'gatsby'
import * as React from "react"
import { LangContext } from './context'
import LayoutContainer from './layout-container'
import Person from './person'

const Quotes = ({ data }) => {
  const { t } = React.useContext(LangContext)

  const customers = [
    {
      name: "Patrik Soko",
      title: t.quotes.soko.title,
      word: t.quotes.soko.quote,
      fluid: data.soko.childImageSharp.fluid
    },
    {
      name: "Wolfgang Lechner",
      title: t.quotes.wolf.title,
      word: t.quotes.wolf.quote,
      fluid: data.lechner.childImageSharp.fluid
    }
  ]

  return (
    <div id="customers" >
      <LayoutContainer
        title={t.quotes.title}
        titleColorClass={"text-sharpfin-gray"}
        bgColorClass={"bg-blue-50"}
      >
        <div className="grid lg:grid-cols-2 gap-5">
          {customers.map((customer) => (
            <div className="bg-white rounded-xl p-5 border">
              <Person title={customer.title} name={customer.name} fluid={customer.fluid} />
              <p className="line">{customer.word}</p>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </div>
  )
}


export default function QuotesWrapper(props) {
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
      render={data => <Quotes data={data} {...props} />}
    />
  )
}