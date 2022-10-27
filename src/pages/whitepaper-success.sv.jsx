import * as React from "react"
import WhitepaperSuccessPage from '../components/page/whitepaper-success'

const WhitepaperSuccess = (props) => {
  const langKey = props.pageContext.langKey;
  return (<WhitepaperSuccessPage langKey={langKey} />)
}

export default WhitepaperSuccess
