import Img from "gatsby-image"
import * as React from "react"
import NewsIcon from '../images/news.svg'
import DateFormat from './date-format'
import LangLink from './LangLink'


const HighlightBlogCard = ({ title, fluid, intro, link, date }) => {
    return (
        <LangLink key={title} to={link} className="bg-white grid md:grid-cols-2 gap-5 items-start border-b pb-14" >
            <div classname="max-h-sm">
                {!fluid && <div className="h-48 w-44 mx-auto flex justify-center items-center"><NewsIcon className="w-28 h-28 " /></div>}
                {fluid && <Img fluid={fluid} className="" />}
            </div>
            <div className="grid gap-3">
                <DateFormat date={date} />
                <h3 className="font-bold text-4xl mb-3 font-serif">{title}</h3>
                <p className="">{intro}</p>
            </div>
        </LangLink>
    )
}

export default HighlightBlogCard