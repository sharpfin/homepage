import * as React from "react"
import Mail from "../images/icons/mail.svg"
import Phone from "../images/icons/phone.svg"

const PersonContact = ({ name, title, email, phone }) => {
    return (
        <div className="md:grid md:grid-cols-2 border-b pb-5 items-center mb-5">
            <div>
                <div className="font-bold mb-0">{name}</div>
                <div className="text-gray-500 mb-2 md:mb-0">{title}</div>
            </div>
            <div>
                {email && <div className="flex items-center mb-2">
                    <Mail className="w-6 h-6 mr-2" />
                    <span>{email}</span>
                </div>}
                {phone && <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-2" />
                    <span>{phone}</span>
                </div>}
            </div>
        </div>

    )
}

export default PersonContact

