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
        <div className='flex flex-row justify-end w-full mr-8 md:hidden'>
          <IoClose onClick={()=>setShow(p=>!p)}  className='w-6 h-6 text-gray-400 transition-transform duration-200 ease-out cursor-pointer hover:scale-125 ' />
        </div>
        <div>
        <Link className='mt-5 links lg:mt-10 ' onClick={()=>{window.innerWidth < 500  && setShow(false)}}  href={'/'}><IoHomeOutline className='h-12' /> <p>About Me</p> </Link>
          <Link className='links' onClick={()=>{window.innerWidth < 500 && setShow(false)}} href={'#projects'}><GrProjects className='h-12'  /> <p>Projects</p> </Link>
          <Link className='links' onClick={()=>{window.innerWidth < 500 && setShow(false)}} href={'#skills'}><LiaToolsSolid className='h-12'  /> <p>Skills</p> </Link>
          <Link className='links' target='#' href={'https://drive.google.com/file/d/12GdmS4NP2VBMVeoRpKN7TkNX9aMPR4A8/view?usp=sharing'}> <GoProjectRoadmap className='h-12'  /> <p>Resume</p> </Link>        
          <h1 className='mt-5 mb-3 ml-5 text-xl font-semibold lg:mt-10'>Socials</h1>
          <Link className='links' target='#' href={'https://www.linkedin.com/in/yash-gupta-36b535243/'}> <FaLinkedin color="#4c64b3" className='h-10' /> <p>LinkedIn</p>  </Link>
          <Link className='links' target='#' href={'https://github.com/yashgupta2022'}> <FaGithub color="white" className='h-10'  /> <p>Github</p> </Link>
          <Link className='links' target='#' href={'https://leetcode.com/yashg2002/'}> <SiLeetcode  color="#f09f0f" className='h-10'  /> <p>Leetcode</p> </Link>
          <Link className='mb-6 links' target='#' href={'mailto:yash2002.gupta@gmail.com'}> <SiGmail  color=" #BB001B" className='h-10'  /> <p>Contact Me</p> </Link>
        </div>
    </div>
        
    
  )
}
