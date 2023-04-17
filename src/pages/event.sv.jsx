import * as React from "react"
import EventPage from '../components/page/event'

const Event = (props) => {
  const langKey = props.pageContext.langKey;
  return (<EventPage langKey={langKey} />)
}

export default Event
