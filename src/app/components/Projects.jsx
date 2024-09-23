import React from 'react'
import Project from './Project'

export default function Projects() {

  const projects = [
     {
      name: 'AI Sketchpad Calculator' ,
      description: 'Calculates handwritten equations using image to text conversion and solving through Google Gemini AI model' ,
      code:'https://github.com/yashgupta2022/AI-Sketchpad-Calculator',
      website : 'https://github.com/yashgupta2022/AI-Sketchpad-Calculator' ,
      image: 'https://private-user-images.githubusercontent.com/113247095/369866400-604066f7-d187-448d-8a3b-d5ad2f61d178.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjcwOTc1NTYsIm5iZiI6MTcyNzA5NzI1NiwicGF0aCI6Ii8xMTMyNDcwOTUvMzY5ODY2NDAwLTYwNDA2NmY3LWQxODctNDQ4ZC04YTNiLWQ1YWQyZjYxZDE3OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyM1QxMzE0MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMGVhZDIyNzFiNmUyMjI5OGM2OGNjN2M2OWFiNGIzMGRlOTg4MzhiZDNkNzgxMWU2NzBlM2ZmZmQ0OWU3M2YxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.BSkfZ5H-2KQF9Mk69BdcG6tYYA4IqOb5WrsPiJLW0Is',
    },
     {
      name: 'Space Invaders Game' ,
      description: ' Developed Space Invader game using Pygame where you shoot aliens in space.' ,
      code:'https://github.com/yashgupta2022/Space-Invaders-PyGame',
      website : 'https://replit.com/@yash2002gupta/Space-Invaders-PyGame' ,
      image: 'https://private-user-images.githubusercontent.com/113247095/369865288-7e7af499-e4d7-4de4-9e36-635ea1bd66c7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjcwOTc3MTYsIm5iZiI6MTcyNzA5NzQxNiwicGF0aCI6Ii8xMTMyNDcwOTUvMzY5ODY1Mjg4LTdlN2FmNDk5LWU0ZDctNGRlNC05ZTM2LTYzNWVhMWJkNjZjNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyM1QxMzE2NTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZjQ3YjdkNTg0MjUyOTFkOGVmYzQ1ZjM4YmJmNmEyN2M5Y2JlZTQxZmYwMjFlMDA3OWQ2NTY4OTUxNWM4OGI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7M8Lj3CyZrwZScTOtFfNH08G4So033zz3rlDecH0eJQ',
    },
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
