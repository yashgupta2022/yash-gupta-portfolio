import React from 'react'
import Project from './Project'

export default function Projects() {

  const projects = [
    {
      name: 'Real Time Chat Application' ,
      description: ' Developed a real-time chat application using MERN stack and Socket.io, enabling instant messaging, group chats, audio, video and location sharing.' ,
      code:'https://github.com/yashgupta2022/chat_app',
      website : 'https://frabjous-mermaid-b10de5.netlify.app/' ,
      image: 'https://images.moneycontrol.com/static-mcnews/2019/03/WhatsApp-Beta-Update-770x433.jpg?impolicy=website&width=770&height=431',
    },
    {
      name: 'Instagram Clone' ,
      description: 'Created a dynamic platform with Next.js, React, Tailwind CSS, Firebase, and Recoil, offering features like user authentication, upload content and comment.' ,
      code: 'https://github.com/yashgupta2022/insta-next',
      website : 'https://insta-next-eight.vercel.app/' ,
      image: 'https://info.mssmedia.com/hubfs/Instagram%20Advertising.jpg#keepProtocol',
    },
    {
      name: 'Family Travel Tracker',
      description: 'Family World Travel tracking app using PostgresSQL, Node, EJS, Express to keep track of visited places' ,
      code: 'https://github.com/yashgupta2022/Travel-Tracker',
      website : 'https://travel-tracker-nqzp.onrender.com/',
      image: '/images/travel-tracker-image.jpg',
    },
    {
      name: '2048 Game',
      description:'Implemented a classic 2048 game using Python and Tkinter, demonstrating proficiency in game logic, user interface design, and core programming concepts.' ,
      code:'https://github.com/yashgupta2022/2048-GAME/blob/main/2048.py',
      website :'https://replit.com/@yash2002gupta/2048-Game-Python' ,
      image: '/images/2048_game.jpg',
    },
    
  ]

  return (
    <div id='projects' >
      <p className='h-[60px]'></p>
     <h1 className='mb-4 text-2xl font-bold'>Projects</h1>
     <Project projects={projects}/>
     
    </div>

  )
}
