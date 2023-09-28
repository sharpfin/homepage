import * as React from "react"
import Demo from '../components/page/whitepaper'

const DemoPage = (props) => {
  const langKey = props.pageContext.langKey;
  return (<Demo langKey={langKey} />)
}

export default DemoPage
