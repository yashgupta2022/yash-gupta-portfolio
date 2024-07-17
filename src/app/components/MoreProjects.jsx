import Link from 'next/link'
import React from 'react'

export default function MoreProjects() {

    const projects = [
        {
            name: 'Instagram Clone' ,
            description: 'Created a dynamic platform with Next.js, React, Tailwind CSS, Firebase, and Recoil, offering features like user authentication, upload content and comment.' ,
            code: 'https://github.com/yashgupta2022/insta-next',
            website : 'https://insta-next-eight.vercel.app/' ,
            image: 'https://info.mssmedia.com/hubfs/Instagram%20Advertising.jpg#keepProtocol',
          },
        {
            name : 'To Do List',
            description : 'Built a robust task management application using Node.js, MongoDB, HTML, CSS, and EJS, allowing users to create, edit, and delete to-do items efficiently.' , //To
            code : 'https://github.com/yashgupta2022/To-Do-List/tree/master/ToDoList' ,
            website : 'https://to-do-list-vehe.onrender.com/' ,
            image : '/images/to-do-list.jpg' ,
        }, 
        {
            name : 'IMDB Clone',
            description : 'Developed a comprehensive movie database interface using Next.js and Tailwind CSS, enabling users to search and view information about top rated and recent films.' ,
            code : 'https://github.com/yashgupta2022/imdb-clone' ,
            website : 'https://imdb-clone-orcin.vercel.app/' ,
            image : '/images/imdb-clone.jpg' ,
        }, 
        {
            name : 'Google Clone',
            description : 'Created a functional search engine replica with Next.js and Tailwind CSS, providing users with the ability to perform web/image searches and view results with pagination.' ,
            code : 'https://github.com/yashgupta2022/google-next' ,
            website : 'https://google-next-kappa.vercel.app/' ,
            image : '/images/google-clone.jpg' ,
        }, 
        {
            name : 'Portfolio',
            description : 'Designed and developed a personal portfolio website using Next.js and Tailwind CSS, showcasing projects, skills, and professional experience.' ,
            code : 'https://github.com/yashgupta2022/yash-gupta-portfolio' ,
            website : 'https://yash-gupta-portfolio-sigma.vercel.app/' ,
            image : '/images/portfolio.jpg' ,
        }, 
    ]

  return (
    <div className='pt-[50px] p-2 mt-2'>
        <h1 className='mb-4 text-2xl font-bold'> More Projects   </h1>
        {projects.map((project,index)=>( 
            <div key={index} className='flex max-w-full my-4 transition-shadow duration-200 border rounded-lg shadow-md cursor-pointer group hover:shadow-slate-400 border-slate-400 ' >

            <Link href={project.website || project.code} target='#'  >
            <img src={project.image} alt="project" className='m-1 transition-opacity duration-300 border-2 rounded-lg group-hover:opacity-75' style={{width: '150px' , height: '100px'}}/> </Link> 
            
                <Link href={project.website || project.code} target='#' className='flex-1 p-2 pl-4'>
                  <h2 className='font-bold truncate text-md'>
                      {project.name} 
                  </h2>
                  <p className='mt-2 text-sm text-gray-500 line-clamp-2'>{project.description} </p>
                </Link>
                           
                  <div className='flex flex-col justify-between px-4 py-3 text-sm text-center '>
                      <Link className='hover:text-blue-600 hover:font-semibold' target='#' href={project.code}>Code</Link>
                      <Link className='p-1 hover:text-blue-600 hover:font-semibold' target='#' href={project.website}>Demo</Link>
                  </div> 
                
            </div>
        ))}
      
    </div>
  )
}
