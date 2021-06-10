import * as React from "react"
import SolutionsPage from '../components/page/solutions'

const Solutions = (props) => {
    const langKey = props.pageContext.langKey;
    return(
        <SolutionsPage langKey={langKey} />
    )
}

export default Solutions
