import { graphql, StaticQuery } from 'gatsby';
import React from "react";


const SolutionView = ({ icon, title, sub_title, text, className, left }) => {



    return (
        <div className="max-w-6xl mx-auto" className={className}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center">
                <div className={`w-36 h-36 ${left ? 'md:order-2' : 'md:order-1'}`}>
                    {icon}
                </div>
                <div className={`col-span-2 bg-sharpfin-gray text-white p-10 ${left ? 'md:order-1' : 'md:order-2'}`}>
                    <h4 className="font-bold text-2xl mb-5">{title}</h4>
                    <p className="font-bold mb-5">{sub_title}</p>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default SolutionView

