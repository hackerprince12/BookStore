import React from 'react'
import Home from './Home/Home'
import Logo from './Compponents/Logo';
import {Routes,Route} from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './Compponents/Signup';
import About from './Compponents/About';
import Contact from './Compponents/Contact';
import Cart from './Compponents/Cart';
import AddBooks from './AdminPage/AddBooks';

import Login1 from './Compponents/Login1';
const App = () => {
  return (
    
    <>
    {/* <Login1/> */}
    {/* <Home/>
    <Course/> */}
    <div className='dark:bg-slate-900 dark:text-white'> 
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/user' element={<Logo/>}/>
      <Route path='/login' element={<Login1/>}/>
      {/* <Route path='/cart' element={<Cart/>}/> */}
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='/additem' element={<AddBooks/>}/>

    </Routes>
    </div>
    </>
    
  )
}

export default App