import * as React from "react"
import AssetManagers from '../components/page/asset-managers'

const AssetManagersPage = (props) => {
  const langKey = props.pageContext.langKey;
  return (<AssetManagers langKey={langKey} />)
}

export default AssetManagersPage
