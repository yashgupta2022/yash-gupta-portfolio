'use client'
import React , {useEffect, useState }  from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

import Header from './Header'
import About from './About'
import Projects from './Projects'
import MoreProjects from './MoreProjects'
import Skills from './Skills'

import DarkModeSwitch from './DarkModeSwitch';
export default function Home() {
    const [show, setShow] = useState(true)
    
    const handleResize = ()=> {
        if (window.innerWidth < 500) { setShow(false) }
        else{ setShow(true) }
    }
    
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
    }, [])
    
    return (
        <div  className=''>
            <div className={`z-20 fixed  w-[100vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw] bg-gray-800  dark:bg-[#1c1b23] shadow-sm items-center ${show ? '' : 'hidden'}`}>
                <Header setShow={setShow} />
            </div>

            <div className={`pt-10  mr-10 max-w-full  ${show ? ' sm:ml-[30vw] md:ml-[25vw] lg:ml[20vw] pl-10 lg:pl-0' :'ml-10'} `}  >

                <div className='z-10 dark:bg-[#14131a] bg-white shadow-md fixed top-0 right-0 p-1 w-full'>
                    <div className=' flex justify-end  items-center space-x-6 p-2 pr-6' >
                        <DarkModeSwitch className='h-6 w-6 hover:scale-125 transition-transform ease-out duration-200 cursor-pointer ' />
                        <GiHamburgerMenu  onClick={()=>setShow(p=>!p)} className=' h-6 w-6 text-gray-800 dark:text-white hover:scale-125 transition-transform ease-out duration-200 cursor-pointer ' />
                    </div>
                </div>
                
                <About />
                <Projects />  
                <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 ' >
                <div id='skills' className='row-start-2 md:row-start-1 pt-[50px] '><Skills /></div>
                <MoreProjects  />
                <p className='min-h-[20vh]'></p>
                </div>
            </div> 
        </div>
    )
}
