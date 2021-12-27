import * as React from "react";
import FacebookIcon from '../images/facebook.svg';
import LinkedInIcon from '../images/linkedin.svg';
import LayoutContainer from "./layout-container";

const Footer = () => {
    return (
        <LayoutContainer bgColorClass="bg-sharpfin-gray">
            <div className="flex space-x-5 justify-center w-full ">
                <a aria-label="linkedin" href="https://www.linkedin.com/company/sharpfin-ab"><LinkedInIcon className="w-10 h-10" /></a>
                <a aria-label="facebook" href="https://www.facebook.com/sharpfinfs"><FacebookIcon className="w-10 h-10" /></a>
            </div>
        </LayoutContainer>
    )
}

export default Footer

