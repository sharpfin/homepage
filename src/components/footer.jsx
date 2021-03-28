import * as React from "react"
import LinkedInIcon from '../images/linkedin.svg'
import FacebookIcon from '../images/facebook.svg'


const Footer = () => {
    return (
        <div className="p-20 grid gap-10 bg-sharpfin-gray">
            <div className="flex gap-5 justify-self-center ">
                <a href="https://www.linkedin.com/company/sharpfin-ab"><LinkedInIcon className="w-10 h-10" /></a>
                <a href="https://www.facebook.com/sharpfinfs"><FacebookIcon className="w-10 h-10" /></a>
            </div>
            <div className="flex text-white justify-around w-full flex-wrap gap-10 text-center items-center">
                <div>
                    <h6 className="font-bold">Sales</h6>
                    <p>+46 (0)10 585 82 77</p>
                    <p>sales@sharpfin.com</p>
                </div>
                <div>
                    <h6 className="font-bold">Address</h6>
                    <p>c/o Katalysen & Partners AB</p>
                    <p>c/o WeWork</p>
                    <p>Malmskillnadsgatan 32</p>
                    <p>111 51 Stockholm, Sweden</p>
                </div>
                <div>
                    <h6 className="font-bold">Support</h6>
                    <p>+46 (0)10 585 82 77</p>
                    <p>support@sharpfin.com</p>
                </div>

            </div>
        </div>
    )
}

export default Footer

