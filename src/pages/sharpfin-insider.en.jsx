import * as React from "react"
import SharpfinInsider from '../components/page/sharpfin-insider'

const SharpfinInsiderPage = (props) => {
  const langKey = props.pageContext.langKey;
  return (<SharpfinInsider langKey={langKey} />)
}

export default SharpfinInsiderPage
