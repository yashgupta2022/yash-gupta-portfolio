import React from 'react'
import Project from './Project'

export default function Projects() {

  const projects = [
    {
      name: 'WhatsApp Clone',
      description: ' React, Node.js, Express, MongoDB, AWS S3, Socket.io, BootStrap' ,
      code:'https://github.com/yashgupta2022/chat_app',
      website : 'https://frabjous-mermaid-b10de5.netlify.app/' ,
      image: 'https://images.moneycontrol.com/static-mcnews/2019/03/WhatsApp-Beta-Update-770x433.jpg?impolicy=website&width=770&height=431',
    },
    {
      name: 'Instagram Clone' ,
      description: 'Next.js, Tailwind CSS, Firebase and Recoil Atom' ,
      code: 'https://github.com/yashgupta2022/insta-next',
      website : 'https://insta-next-eight.vercel.app/' ,
      image: 'https://info.mssmedia.com/hubfs/Instagram%20Advertising.jpg#keepProtocol',
    },
    {
      name: 'Family Travel Tracker',
      description: 'PostgresSQL, Node, EJS, Express' ,
      code: 'https://github.com/yashgupta2022/Travel-Tracker',
      website : 'https://travel-tracker-nqzp.onrender.com/',
      image: '/images/travel-tracker-image.jpg',
    },
    {
      name: '2048 Game',
      description:'Python, Tkinter' ,
      code:'https://github.com/yashgupta2022/2048-GAME/blob/main/2048.py',
      website :'https://replit.com/@yash2002gupta/2048-Game-Python' ,
      image: '/images/2048_game.jpg',
    },
    
  ]

  return (
    <div id='projects' >
      <p className='h-[60px]'></p>
     <h1 className='text-2xl font-bold mb-4'>Projects</h1>
     <Project projects={projects}/>
     
    </div>

  )
}
