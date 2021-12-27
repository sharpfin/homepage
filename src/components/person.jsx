import * as React from "react"
import Img from "gatsby-image"

const Person = ({name, title, fluid}) => {
    return (
        <div className="flex items-center justify-self-center space-x-5 mb-5">
            <Img className="w-28 circle border rounded-full" fluid={fluid}/>
            <div>
                <p className="font-bold text-xl">{name}</p>
                <p className="text-gray-500">{title}</p>
            </div>
        </div>
    )
}

export default Person

