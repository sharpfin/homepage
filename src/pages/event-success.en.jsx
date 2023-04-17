import * as React from "react"
import EventSuccessPage from '../components/page/event-success'

const EventSuccess = (props) => {
  const langKey = props.pageContext.langKey;
  return (<EventSuccessPage langKey={langKey} />)
}

export default EventSuccess
