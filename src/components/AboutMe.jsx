import React from 'react'
import sam from "../images/sam.jpg"
function AboutMe() {
  return (
    <div className='bg-slate-100'>
    <div className='text-black border-lime-300 font-extrabold align text-center bg-sky-500 hover:bg-sky-700'>AboutMe</div>
    <img src={sam} alt="AboutME" className='rounded-full w-40 h-40 border-4 border-gray-500 shadow-lg mx-auto'/>
      <div className="bg-gray-100  flex items-center justify-center mb-px">
        <p>Hello there! 👋 I'm Samson Ayalew, a passionate third-year software 
            engineering student based in Addis Ababa, Ethiopia.</p>
      </div>
    </div>
    
  )
}

export default AboutMe;