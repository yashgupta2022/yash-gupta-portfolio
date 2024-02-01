'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'  
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
export default function DarkModeSwitch() {
    const { theme, setTheme ,systemTheme} = useTheme()
    const currentTheme = theme==='system' ? systemTheme : theme ;
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    
  return (
    <div>
        {mounted && (currentTheme === 'dark' ?( <MdLightMode onClick={()=>setTheme('light')} className='text-xl hover:scale-125 transition-transform ease-out duration-200 cursor-pointer hover:text-amber-500 ' />) : (
        <MdDarkMode onClick={()=>setTheme('dark')} className='text-xl hover:scale-125 transition-transform ease-out duration-200 cursor-pointer hover:text-amber-500 text-gray-800' />)
        )}
    </div>
  )
}