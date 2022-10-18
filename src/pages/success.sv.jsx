import * as React from "react"
import SuccessPage from '../components/page/success'

const Success = (props) => {
    const langKey = props.pageContext.langKey;
    return(
        <SuccessPage langKey={langKey} />
    )
}

export default Success
