import React from 'react'
import Navbar from '../Compponents/Navbar'
import Footer from '../Compponents/Footer'
import Course from '../Compponents/Course'

const Courses = () => {


  return (
    <>
    
    <Navbar/>
    <div className='dark:bg-slate-900  min-h-screen'> 
    <Course/>
    </div>
   
    <Footer/>
    </>
  
  )
}

export default Courses