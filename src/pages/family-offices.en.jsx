import * as React from "react"
import FamilyOffices from '../components/page/family-offices'

const FamilyOfficePage = (props) => {
  const langKey = props.pageContext.langKey;
  return (<FamilyOffices langKey={langKey} />)
}

export default FamilyOfficePage
