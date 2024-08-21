import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { MdOutlineMessage } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6"
import { IoIosCall } from "react-icons/io";
import { IoStopwatchOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { useFormik } from 'formik';
import { ContactSchema } from "../yupSchema/ContactSchema";

const Contact = () => {
  
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: {
      name:"",
      email: '',
      message: '',
    },
    validationSchema:ContactSchema,
    onSubmit: values => {
     
      // console.log(values);
    },
  });
// console.log(errors);


  return (
    <>
      {/* <Navbar /> */}
      <div className="flex  h-[100vh] bg-white md:bg-pink-400 justify-center items-center">
        <div className="flex flex-col md:flex-row  md:bg-white lg:bg-white lg:card-side xl:h-[80vh] h-[80vh] w-[85vw] p-2 justify-center items-center">
          <div className="card   p-0 m-4 shadow-gray-400 rounded-none shadow-md">
            <div className="card-body">
              <h1 className="text-black text-3xl font-extrabold">Contact Us</h1>
              <p className="text-gray-700">
                Free to contact us any time.We will get back to soon as we can!
              </p>
              <form onSubmit={handleSubmit}>
              <div className="flex flex-col  gap-y-2 ">
                
                <label className="text-gray-600">Name: </label>
                <input
                  className="px-2 py-1  bg-white text-black border-[1px] text-[16px]"
                  type="text"
                  placeholder="Enter your name"
                 
                  name='name'
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  autoComplete='off'
                />
                {errors.name&& touched.name?<p className='text-red-500 text-sm'>{errors.name}</p>:null}
                <label className="text-gray-600">Email: </label>
                <input
                 name='email'
                 onChange={handleChange}
                 value={values.email}
                 onBlur={handleBlur}
                 autoComplete='off'
                  className="px-2 py-1  bg-white text-black border-[1px] text-[16px]"
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email?<p className='text-red-500 text-sm'>{errors.email}</p>:null}
                <label className="text-gray-600">Message: </label>
                {/* <input
                  className="text-[16px] border-[1px]  bg-white text-black px-2 h-[100px]  py-1"
                  type="text"
                  placeholder="Enter your msg..."
                /> */}
                <textarea
                name='message'
                type="text"                onChange={handleChange}
                value={values.message}
                onBlur={handleBlur}
                autoComplete='off'
                  placeholder="Enter your msg.."
                  className="text-[16px] border-[1px] 
                 bg-white text-black px-2 h-[80px]  py-1"
                ></textarea>
                {errors.message&& touched.message?<p className='text-red-500 text-sm'>{errors.message}</p>:null}
              
              </div>

              <div className="card-actions flex justify-end">
                <button type='submit'  className="py-2 px-4 bg-blue-600 text-white mt-1 hover:bg-blue-500" >SEND</button>
              </div>
              </form>
            </div>
          </div>
          <div className="flex  justify-center items-center   ">
            <div className=" flex justify-start items-center px-12 sm:h-[50vh] sm:w-[60vw]  p-20 md:lg-[50vh] md:w-[30vw] lg:h-[60vh] lg:w-[30vw] bg-black">
              <div className="">
              
             
                <h1 className="text-xl text-white font-extrabold ">Info</h1>
                <div className="flex flex-row">
                  <FaRegMessage className="text-2xl mt-2 m-1 text-white" />
                 <h1 className="text-xl text-white py-2">abc@gmail.com</h1>
                 </div>
                 <div className="flex flex-row">
                  <IoIosCall className="text-2xl mt-2 m-1 text-white" />
                 <h1 className="text-xl text-white py-2">+1234567809</h1>
                 </div>
                 <div className="flex flex-row">
                  <IoStopwatchOutline className="text-2xl mt-2 m-1 text-white" />
                 <h1 className="text-xl text-white py-2">09-800-700-10</h1>
                 </div>
                 <div className="flex flex-row">
                  <FaBuilding className="text-2xl mt-2 m-1 text-white" />
                 <h1 className="text-xl text-white py-2">NH-34 Varanasi</h1>
                 </div>
                
               
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
