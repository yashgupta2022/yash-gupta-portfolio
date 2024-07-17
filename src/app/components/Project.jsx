import Link from 'next/link'
import React from 'react'

export default function Project({projects}) {
  return (
    <div className='grid gap-5 text-sm sgrid-cols-1 md:grid-cols-2 '>
      {projects.map((project,index)=>(
        <div key={index} className='w-full transition-shadow duration-200 border rounded-lg shadow-md cursor-pointer group hover:shadow-slate-400 border-slate-400 ' >
          <Link href={project.website || project.code} target='#'  >
          <img src={project.image} alt="project"className='object-cover transition-opacity duration-300 rounded-t-lg sm:rounded-t-lg group-hover:opacity-75 h-[200px] lg:h-[300px] w-full'/>
            <div className='p-3'>
                <h2 className='text-lg font-bold truncate'>
                    {project.name} 
                </h2>
                <p className='pt-1 text-sm text-gray-500 line-clamp-2'>{project.description} </p>
              </div>
              </Link>            
                <div className='flex justify-between p-3 pt-0 '>
                    <Link className='hover:text-blue-600 hover:font-semibold' target='#' href={project.code}>Code</Link>
                    {project?.website ?<Link className='hover:text-blue-600 hover:font-semibold' target='#' href={project.website}>Demo</Link> :""}
                </div>   
          </div>
        ))}
    </div>
  )
}
