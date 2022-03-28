import * as React from "react"
import Team from '../components/page/team'

const TeamPage = (props) => {
  const langKey = props.pageContext.langKey;
  return (<Team langKey={langKey} />)
}

export default TeamPage
