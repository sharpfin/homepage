import * as React from "react"
import FinancialAdvisors from '../components/page/financial-advisors'

const FinancialAdvisorsPage = (props) => {
  const langKey = props.pageContext.langKey;
  return (<FinancialAdvisors langKey={langKey} />)
}

export default FinancialAdvisorsPage
