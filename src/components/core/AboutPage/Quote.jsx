import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
       We're transforming learning with a platform that blends technology, expertise, and community for an <HighlightText text={"unmatched educational experience. "} />{" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            
        </span>
  
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            {" "}
            
        </span> 
    </div>
  )
}

export default Quote