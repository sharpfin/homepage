import * as React from "react"

const LayoutContainer = ({id, title, titleColorClass, bgColorClass, children, className}) => {
    return (
        <div id={id} className={`${bgColorClass} flex justify-center py-20`}>
            <div className="screen-width mx-5 w-full">
                {title && (<h2 className={`text-4xl  ${children && "mb-14"} font-bold ${titleColorClass}`}>{title}</h2>)}
                {children}
            </div>
        </div>
    )
}

export default LayoutContainer

