'use client'
import React, { useState } from 'react'

export default function About() {
  const [expand, setExpand] = useState(false)
  return (
    <div id='about' className=''>
      <div className="flex rounded-xl mt-4  bg-[url('/images/cover.jpeg')]  bg-cover">
            <div className="flex items-center justify-between w-full px-10 py-5 rounded-xl md:px-20 backdrop-blur-md ">
            <div>
            <h1 className="text-2xl font-bold text-white">YASH GUPTA</h1> 
            <p className='pt-2 pl-1 text-base text-gray-200'>Web Developer | B.Tech (CSE) | MAIT{"'"}25</p>
            </div>
            <img src='/images/ProfilePhoto.jpg' alt='profile_photo'  className='rounded-[100%] border-2 p-[2px] m-4 h-[98px] w-[90px]' />
            
          </div>
      </div>
      <div className='flex flex-col items-start' >
          <div className={`text-lg pt-10 mx-auto space-y-2 text-justify w-[80%]`}>
          <p> I{"'"}m <b>Yash Gupta</b>, a final-year student at <b>Maharaja Agrasen Institute of Technology, Delhi</b>, pursuing <b>Computer Science and Engineering.</b>  </p>
              <p>I am a <b>Web Developer</b> specializing in the <b>MERN stack and NextJS</b> framework. 
            My areas of interests are Web Development, Coding and Artificial Intelligence.
            </p>
                   <p> I am eager to leverage my skills and experiences to build a professional career in software development,
        constantly learning and growing along the way. I thrive in collaborative environments and am excited to contribute
        to innovative projects and technologies.</p>
              </div>
          </div>      
    </div>
  )
}



