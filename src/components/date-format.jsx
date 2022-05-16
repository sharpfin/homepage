import * as React from "react"
import { LangContext } from './context'

export default function DateFormat({date, className}) {
    const { t } = React.useContext(LangContext)
    const[d, setD] = React.useState(new Date(date.replaceAll(" ", "-")))


    console.log(d)
    return(
        <p className={`text-gray-500 ${className}`}>{d.getDate() + ' ' + t.month(d.getMonth()) + ' ' + d.getFullYear()}</p>
    );
}