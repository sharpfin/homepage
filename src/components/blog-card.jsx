import * as React from "react"
import NewsIcon from '../images/news.svg'
import Img from "gatsby-image"
import { Link } from 'gatsby'

const BlogCard = ({ title, fluid, intro, link }) => {
    return (
        <Link key={title} to={link} className="mt-5 flex-shrink-0 bg-white border shadow-lg rounded-xl sm:w-96 transform cursor-pointer duration-500 hover:-translate-y-2" >
            {!fluid && <div className="h-44 w-44 mx-auto mb-5 flex justify-center items-center"><NewsIcon className="w-28 h-28 " /></div>}
            {fluid && <Img fluid={fluid} className="rounded-t-xl h-44 mx-auto mb-5" />}
            <div className="p-10 pt-0">
                <h3 className="font-bold border-b pb-5 mb-5">{title}</h3>
                <p>{intro}</p>
            </div>
        </Link>
    )
}

export default BlogCard