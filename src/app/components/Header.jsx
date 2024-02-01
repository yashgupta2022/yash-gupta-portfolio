import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { LiaToolsSolid } from "react-icons/lia";

export default function Header({setShow}) {
  return (
     
      <div className='text-md lg:text-lg mt-3 dark:text-orange-300 text-gray-300 overflow-y-auto  h-[100vh]  flex flex-col items-center  '>
        <div className='md:hidden flex flex-row w-full justify-end mr-8'>
          <IoClose onClick={()=>setShow(p=>!p)}  className='h-6 w-6 text-gray-400 hover:scale-125 transition-transform ease-out duration-200 cursor-pointer ' />
        </div>
        <div>
        <Link className='links mt-5 lg:mt-10 ' onClick={()=>{window.innerWidth < 500  && setShow(false)}}  href={'/'}><IoHomeOutline className='h-12' /> <p>About Me</p> </Link>
          <Link className='links' onClick={()=>{window.innerWidth < 500 && setShow(false)}} href={'#projects'}><GrProjects className='h-12'  /> <p>Projects</p> </Link>
          <Link className='links' onClick={()=>{window.innerWidth < 500 && setShow(false)}} href={'#skills'}><LiaToolsSolid className='h-12'  /> <p>Skills</p> </Link>
          <Link className='links' target='#' href={'https://drive.google.com/file/d/1r9O0hXAF6agdM9mOwt2fQORRfjifMN3a/view?usp=sharing'}> <GoProjectRoadmap className='h-12'  /> <p>Resume</p> </Link>        
          <h1 className='text-xl mt-5 lg:mt-10 ml-5 font-semibold mb-3'>Socials</h1>
          <Link className='links' target='#' href={'https://www.linkedin.com/in/yash-gupta-36b535243/'}> <FaLinkedin color="#4c64b3" className='h-10' /> <p>LinkedIn</p>  </Link>
          <Link className='links' target='#' href={'https://github.com/yashgupta2022'}> <FaGithub color="white" className='h-10'  /> <p>Github</p> </Link>
          <Link className='links' target='#' href={'https://leetcode.com/yashg2002/'}> <SiLeetcode  color="#f09f0f" className='h-10'  /> <p>Leetcode</p> </Link>
          <Link className='links mb-6' target='#' href={'mailto:yash2002.gupta@gmail.com'}> <SiGmail  color=" #BB001B" className='h-10'  /> <p>Contact Me</p> </Link>
        </div>
    </div>
        
    
  )
}
