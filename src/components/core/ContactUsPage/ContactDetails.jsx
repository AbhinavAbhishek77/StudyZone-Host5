import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat with Us",
    description: "Got questions? Our team is here to help!",
    details: "123abhinavabhishek@gmail.com",
  },
  {
    icon: "BiWorld",
    heading: "Drop By",
    description: "We’d love to see you! Visit us at:",
    details:
      "1234 Elm Street Suite 567 Springfield, IL 62704 USA",
  },
  {
    icon: "IoCall",
    heading: "Give Us a Call",
    description: "Reach out Monday to Saturday, 9 AM - 7 PM",
    details: "+987 654 321",
  },
]

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-700 p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-richblack-5">
                {ele?.heading}
              </h1>
            </div>
            <p className="font-medium">{ele?.description}</p>
            <p className="font-semibold">{ele?.details}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ContactDetails
