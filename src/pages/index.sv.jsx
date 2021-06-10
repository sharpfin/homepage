import * as React from "react"
import Index from '../components/page/index'

const IndexPage = (props) => {
  const langKey = props.pageContext.langKey;
  return (<Index langKey={langKey} />)
}

export default IndexPage
