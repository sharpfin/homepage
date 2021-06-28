import Img from "gatsby-image"
import * as React from "react"
import NewsIcon from '../images/news.svg'
import LangLink from './LangLink'

const BlogCard = ({ title, fluid, intro, link, date }) => {

    const shortIntro = intro.slice(0, 200)

    return (
        <LangLink key={title} to={link} className="bg-white border shadow-lg rounded-xl max-w-sm transform cursor-pointer duration-500 hover:-translate-y-2 m-5" >
            {!fluid && <div className="h-48 w-44 mx-auto mb-5 flex justify-center items-center"><NewsIcon className="w-28 h-28 " /></div>}
            {fluid && <Img fluid={fluid} className="rounded-t-xl h-48 mx-auto mb-5" />}
            <div className="p-5 pt-0 grid">
                <h3 className="font-bold border-b pb-5 mb-5">{title}</h3>
                <p>{shortIntro}...</p>
                <p className="italic text-sm text-gray-400 mt-5 justify-self-end">{date}</p>
            </div>
        </LangLink>
    )
}

export default BlogCard