import React from 'react'
import Navbar from '../Compponents/Navbar'
import Banner from '../Compponents/Banner'
import FreeBook from '../Compponents/FreeBook'
import Footer from '../Compponents/Footer'

// import Login1 from '../Compponents/Login1'
const Home = () => {
  return (
    <>
    {/* <h1 className='mt-20 text-white'>abc</h1> */}
    {/* <Login1/> */}
    <Navbar/>
    <Banner/>
    <FreeBook/>
    <Footer/>
    </>
   
  )
}

export default Home