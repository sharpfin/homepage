import * as React from "react"
import { LangContext } from './context'

export function dateConvert(date, t) {
    return date
        .replace('Jan', t.month(1))
        .replace('Feb', t.month(2))
        .replace('Mar', t.month(3))
        .replace('Apr', t.month(4))
        .replace('May', t.month(5))
        .replace('Jun', t.month(6))
        .replace('Jul', t.month(7))
        .replace('Aug', t.month(8))
        .replace('Sep', t.month(9))
        .replace('Oct', t.month(10))
        .replace('Nov', t.month(11))
        .replace('Dec', t.month(12))
}


export default function DateFormat({date, className}) {
    const { t } = React.useContext(LangContext)
    console.log(date)
    const [d, setD] = React.useState(new Date(date?.replaceAll(" ", "-")))


    console.log(d)
    return(
        <p className={`text-gray-500 ${className}`}>{dateConvert(date, t)}</p>
    );
}