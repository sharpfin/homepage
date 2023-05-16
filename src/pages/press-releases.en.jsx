import * as React from "react"
import PressReleases from '../components/page/press-releases'

const PressReleasesPage = (props) => {
  const langKey = props.pageContext.langKey;
  return (<PressReleases langKey={langKey} />)
}

export default PressReleasesPage;
