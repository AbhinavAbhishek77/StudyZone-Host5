import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage3 from "../assets/Images/about3.jpg"
// import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage1 from "../assets/Images/about4.jpg"
// import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage2 from "../assets/Images/about5.jpg"
import Footer from "../components/Common/Footer"

import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Leading the way in online education
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              StudyZone is committed to a brighter future with cutting-edge
              courses, emerging technologies, and a thriving learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700 bg-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section className=" bg-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="my-24 flex flex-col gap-10 lg:w-[50%]">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#d47777] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform emerged from a shared passion for
                transforming education. A team of educators, technologists, and
                lifelong learners saw the need for accessible, flexible, and
                high-quality learning in a digital world. As educators, we
                understood the limitations of traditional systems and envisioned
                a platform to break barriers, empowering individuals to reach
                their full potential.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]"></p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-10">
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-gradient-to-b from-[#a26b65] to-[#29f856] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Driven by this vision, we embarked on a journey to create an
                e-learning platform that transforms learning. Our expert team
                built a powerful, intuitive platform that blends cutting-edge
                technology with engaging content, fostering an interactive and
                dynamic learning experience.
              </p>
            </div>
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-gradient-to-b from-[#62615b] via-[#9ba8ab] to-[#10a84f] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                We’re dedicated to more than just online courses. Our goal is to
                create a lively community where learners connect, collaborate,
                and share knowledge through forums, live sessions, and
                networking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto  mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white  ">
        <LearningGrid />
        <div className="p-14 mx-auto bg-richblack-600 rounded-lg">
          <ContactFormSection />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
