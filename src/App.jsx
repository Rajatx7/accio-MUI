import React from 'react'
import { Button, Typography } from '@mui/material'
import Header from './components/Header'
import './App.css'
import CourseCard from './components/CourseCard'

const courseList = [
  {
    image : 'https://blog.nextideatech.com/wp-content/uploads/2022/12/1_FVtCyRdJ6KOr4YswTtwMeA.jpeg',
    heading: 'Mern Stack Course',
    decsription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio, eligendi reprehenderit dolorem quas tempora? Deleniti repellat excepturi, esse laudantium minus voluptatibus amet porro quas, nemo magni, atque vitae ipsum."
  },
  {
    image : 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0-1024x580.jpg',
    heading: 'Data Science Course',
    decsription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio, eligendi reprehenderit dolorem quas tempora? Deleniti repellat excepturi, esse laudantium minus voluptatibus amet porro quas, nemo magni, atque vitae ipsum."
  },
  {
    image : 'https://miro.medium.com/v2/resize:fit:500/1*pu_q-NQV_EnIHBgHdZsrXQ.jpeg',
    heading: 'Java Programming Course',
    decsription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio, eligendi reprehenderit dolorem quas tempora? Deleniti repellat excepturi, esse laudantium minus voluptatibus amet porro quas, nemo magni, atque vitae ipsum."
  }
]

const App = () => {
  return (
    <div>
      <Header/>  
      <div style={{marginTop:'30px'}}>
      <Typography variant='h3' align='center'>
        Welcome to Acciojob
      </Typography>
      <Typography variant='body2' align='center'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis quidem ipsam, deleniti aperiam debitis id est recusandae distinctio consequatur doloribus. Molestias neque deleniti ipsam ipsa autem distinctio minima enim?
      </Typography>
      </div>

      <div style={{display:'flex', gap:'16px', flexWrap:'wrap', justifyContent:'center', marginTop:'20px', paddingBottom:'100px'}}>
        {courseList.map((course,index)=> <CourseCard key={index} image={course.image} description={course.decsription} heading={course.heading}/>)}
      </div>

      <Typography align='center'>
        Made with love by Rajat 
      </Typography>
      
    </div>
  )
}

export default App
