import Img from "gatsby-image"
import * as React from "react"
import NewsIcon from '../images/news.svg'
import LangLink from './LangLink'
import DateFormat from './date-format'


const BlogCard = ({ title, fluid, intro, link, date }) => {
    return (
        <LangLink key={title} to={link} className="bg-white  cursor-pointer " >
            {!fluid && <div className="h-48 w-full mx-auto flex border justify-center items-center"><NewsIcon className="w-28 h-28 " /></div>}
            {fluid && <Img fluid={fluid} className="h-48 mx-auto" />}
            <div className="grid gap-2 mt-2">
                <DateFormat className="text-sm" date={date} />
                <p className="font-medium">{title}</p>
            </div>
        </LangLink>
    )
}

export default BlogCard