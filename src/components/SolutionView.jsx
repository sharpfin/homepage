import React from "react";


const SolutionView = ({ icon, title, sub_title, text, className, left, smallIcon }) => {

    return (
        <div className={` screen-width mx-auto border-4 rounded-lg border-sharpfin-gray ${className}`}>
            <div className="grid rounded-lg bg-white grid-cols-1 lg:grid-cols-3  items-center justify-items-center">
                <div className={`w-36 h-36 p-5 ${smallIcon ? '' : 'hidden lg:block'} ${left ? 'md:order-2' : 'md:order-1'}`}>
                    {icon}
                </div>
                <div className={`col-span-2 bg-sharpfin-gray text-white p-8 md:p-14 ${left ? 'md:order-1' : 'md:order-2'}`}>
                    <h4 className="font-bold text-2xl mb-5">{title}</h4>
                    <p className="font-bold mb-5">{sub_title}</p>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default SolutionView

