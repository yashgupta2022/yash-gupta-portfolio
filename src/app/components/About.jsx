'use client'
import React, { useState } from 'react'

export default function About() {
  const [expand, setExpand] = useState(false)
  return (
    <div id='about' className=''>
      <div className="flex rounded-xl mt-4  bg-[url('/images/cover.jpeg')]  bg-cover">
            <div className="flex items-center justify-between rounded-xl px-10 md:px-20 py-5 backdrop-blur-md w-full ">
            <div>
            <h1 className="font-bold text-xl text-white">YASH GUPTA</h1> 
            <p className='text-sm pl-1 pt-2 text-gray-200'>Web Developer | B.Tech (CSE) | MAIT{"'"}25</p>
            </div>
            <img src='/images/ProfilePhoto.jpg' alt='profile_photo'  className='rounded-[100%] border-2 p-[2px] m-4 h-[98px] w-[95px]' />
            
          </div>
      </div>
      <div className='flex flex-col items-start' >
          <div className={`text-md font-serif pt-10 mx-auto ${expand ? '':'line-clamp-6 md:line-clamp-4'} space-y-2 text-justify w-[80%]`}>
            <p > Hello there, </p>
            <p> I{"'"}m Yash Gupta, a third-year student at Maharaja Agrasen Institute of Technology, pursuing Computer Science and Engineering.  </p>
            <p>   I{"'"}ve been developing websites, specializing in the MERN Fullstack and related frameworks.  </p>
              <p> My skills cover programming languages such as Python, C++, Java, HTML, CSS, JavaScript and frontend frameworks like React, Next.js, Tailwind CSS. On the backend, I{"'"}m comfortable with Node.js, Express, with databases like Firebase, MongoDB, Postgres, and AWS S3. </p>
            <p >And yes, I code in my free time - it{"'"}s not just a skill, it{"'"}s a hobby.</p>
            <p> I am a passionate learner who{"'"}s always up for learning and eager to explore new tech, I{"'"}m all about crafting digital experiences and finding tech solutions for real-world problems.</p>
            <button className='text-xs hover:text-gray-300 text-gray-400 underline' hidden={!expand} onClick={()=>{setExpand(p=>!p)}}>Show Less</button>
          </div>
          <button  className='text-xs  pl-[10%] hover:text-gray-300 text-gray-400 underline' hidden={expand} onClick={()=>{setExpand(p=>!p)}}>ReadMore</button> 
          </div>      
    </div>
  )
}



