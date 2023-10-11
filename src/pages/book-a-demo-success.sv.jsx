import * as React from "react"
import DemoSuccess from '../components/page/demo-success'

const DemoSuccessPage = (props) => {
  const langKey = props.pageContext.langKey;
  return (<DemoSuccess langKey={langKey} />)
}

export default DemoSuccessPage
