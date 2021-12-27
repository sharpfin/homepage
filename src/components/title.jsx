import * as React from "react";

const Title = ({ title }) => {
    return (
        <div className="flex justify-center">
            <div className="mx-5 py-14 screen-width w-full">
                <h1 className="text-sharpfin-gray font-serif text-3xl leading-10 md:text-4xl font-bold ">{title}</h1>
            </div>
        </div>
    )
}

export default Title

