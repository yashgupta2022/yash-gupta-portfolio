import React from 'react'
import Project from './Project'

export default function Projects() {

  const projects = [
     {
      name: 'AI Sketchpad Calculator' ,
      description: 'Calculates handwritten equations using image to text conversion and solving through Google Gemini AI model' ,
      code:'https://github.com/yashgupta2022/AI-Sketchpad-Calculator',
      website : 'https://github.com/yashgupta2022/AI-Sketchpad-Calculator' ,
      image: '/images/ai-calc.png' },
     {
      name: 'Space Invaders Game' ,
      description: ' Developed Space Invader game using Pygame where you shoot aliens in space.' ,
      code:'https://github.com/yashgupta2022/Space-Invaders-PyGame',
      website : 'https://replit.com/@yash2002gupta/Space-Invaders-PyGame' ,
      image: '/images/space-invader.png'    },
    {
      name: 'Real Time Chat Application' ,
      description: ' Developed a real-time chat application using MERN stack and Socket.io, enabling instant messaging, group chats, audio, video and location sharing.' ,
      code:'https://github.com/yashgupta2022/chat_app',
      website : 'https://frabjous-mermaid-b10de5.netlify.app/' ,
      image: 'https://images.moneycontrol.com/static-mcnews/2019/03/WhatsApp-Beta-Update-770x433.jpg?impolicy=website&width=770&height=431',
    },
    {
      name: 'Blog Site' ,
      description: 'Created a dynamic platform with Next.js, React, Tailwind CSS, Firebase, and Recoil, offering features like user authentication, upload media and comment.' ,
      code: 'https://github.com/yashgupta2022/blog-site',
      website : 'https://blog-site-three-mu.vercel.app/' ,
      image: '/images/blogsite.png',
    },
    {
      name: 'Family Travel Tracker',
      description: 'Family World Travel tracking app using PostgresSQL, Node, EJS, Express to keep track of visited places' ,
      code: 'https://github.com/yashgupta2022/Travel-Tracker',
      website : 'https://travel-tracker-nqzp.onrender.com/',
      image: '/images/travel-tracker-image.jpg',
    },
    {
      name: 'Airbnb Clone',
      description: 'Built a functional Airbnb clone using React, replicating core functionalities including property listings, search filters, and booking.' ,
      code: 'https://github.com/yashgupta2022/Airbnb-Clone',
      website:'https://www.youtube.com/watch?v=l5SQ_1BjOZ4&t=570s',
      image:'/images/airbnb.png',
  },
    {
      name: '2048 Game',
      description:'Implemented a classic 2048 game using Python and Tkinter, demonstrating proficiency in game logic, user interface design, and core programming concepts.' ,
      code:'https://github.com/yashgupta2022/2048-GAME/blob/main/2048.py',
      website :'https://replit.com/@yash2002gupta/2048-Game-Python' ,
      image: '/images/2048_game.jpg',
    },
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
    <div id='projects' >
      <p className='h-[60px]'></p>
     <h1 className='mb-4 text-2xl font-bold'>Projects</h1>
     <Project projects={projects}/>
     
    </div>

  )
}
