import * as React from "react"
import WhitePaper from "../components/page/whitepaper";

const Whitepaper = (props) => {
    const langKey = props.pageContext.langKey;
    return(
        <WhitePaper langKey={langKey} />
    )
}

export default Whitepaper
