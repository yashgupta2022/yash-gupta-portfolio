import Link from 'next/link'
import React from 'react'

export default function MoreProjects() {

    const projects = [
        {
            name : 'To Do List',
            description : 'Node.js, MongoDB, HTML, CSS, EJS' ,
            code : 'https://github.com/yashgupta2022/To-Do-List/tree/master/ToDoList' ,
            website : 'https://to-do-list-vehe.onrender.com/' ,
            image : '/images/to-do-list.jpg' ,
        }, 
        {
            name : 'IMDB Clone',
            description : 'Next.JS, Tailwind CSS' ,
            code : 'https://github.com/yashgupta2022/imdb-clone' ,
            website : 'https://imdb-clone-orcin.vercel.app/' ,
            image : '/images/imdb-clone.jpg' ,
        }, 
        {
            name : 'Google Clone',
            description : 'Next.js, Tailwind CSS' ,
            code : 'https://github.com/yashgupta2022/google-next' ,
            website : 'https://google-next-kappa.vercel.app/' ,
            image : '/images/google-clone.jpg' ,
        }, 
        {
            name : 'Portfolio',
            description : 'Next.js, Tailwind CSS' ,
            code : '' ,
            website : '' ,
            image : '/images/portfolio.jpg' ,
        }, 
    ]

  return (
    <div className='pt-[50px] p-2 mt-2'>
        <h1 className='text-2xl font-bold mb-4'> More Projects   </h1>
        {projects.map((project,index)=>( 
            <div key={index} className='group cursor-pointer hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 transition-shadow duration-200 max-w-full flex my-4  ' >

            <Link href={project.website || project.code} target='#'  >
            <img src={project.image} alt="project" className=' border-2 rounded-lg  group-hover:opacity-75 transition-opacity duration-300 m-1' style={{width: '150px' , height: '100px'}}/> </Link> 
            
                <Link href={project.website || project.code} target='#' className='flex-1 pl-4 p-2'>
                  <h2 className='text-md font-bold truncate'>
                      {project.name} 
                  </h2>
                  <p className='line-clamp-2 text-sm mt-2 text-gray-500'>{project.description} </p>
                </Link>
                           
                  <div className='flex flex-col justify-between py-3 px-4 text-sm text-center '>
                      <Link className='hover:text-blue-600 hover:font-semibold' target='#' href={project.code}>Code</Link>
                      <Link className='hover:text-blue-600 p-1 hover:font-semibold' target='#' href={project.website}>Website</Link>
                  </div> 
                
            </div>
        ))}
      
    </div>
  )
}
