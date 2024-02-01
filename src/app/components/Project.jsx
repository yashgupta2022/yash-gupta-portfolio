import Link from 'next/link'
import React from 'react'

export default function Project({projects}) {
  return (
    <div className='text-sm grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
      {projects.map((project,index)=>(
        <div key={index} className='group cursor-pointer m-2 hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 transition-shadow duration-200 max-w-[300px]' >
          <Link href={project.website || project.code} target='#'  >
          <img src={project.image} alt="project"className='sm:rounded-t-lg  group-hover:opacity-75 transition-opacity duration-300  rounded-t-lg ' style={{width: '300px' , height: '150px'}}/>
            <div className='p-2'>
                <h2 className='text-lg font-bold truncate'>
                    {project.name} 
                </h2>
                <p className='line-clamp-2 pt-1 h-[2.8rem] text-sm text-gray-500'>{project.description} </p>
              </div>
              </Link>            
                <div className='flex justify-between p-2  pt-0 '>
                    <Link className='hover:text-blue-600 hover:font-semibold' target='#' href={project.code}>Code</Link>
                    {project?.website ?<Link className='hover:text-blue-600 hover:font-semibold' target='#' href={project.website}>Website</Link> :""}
                </div>   
          </div>
        ))}
    </div>
  )
}
