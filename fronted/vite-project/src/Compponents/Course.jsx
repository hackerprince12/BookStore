import React, { useEffect, useState } from "react";

// import list from '../../public/list.json'
import axios from 'axios';
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {

  const [dataa, setdata] = useState('');

  const user = async ()=>{
    const datas= await axios.get("http://localhost:3001/api/get")
    .then((res)=>{
      // console.log(res.data);
       setdata(res.data);
    })
  }

  useEffect(() => {
    user();
  
  }, [])
  //  console.log("data course vala",dataa);
  return (
    <>
      <div className="max-w-screen-2xl dark:bg-slate-900 dark:text-white container mx-auto md:px-[10px] px-4 ">
        
        <div className="pt-24 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl ">
            We're delighted to have you
            <span className="text-pink-400 "> Here !</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ad ab
            a, at maxime velit. Minima voluptatum maiores tenetur neque quae,
            molestiae fugit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Rerum voluptatum corporis temporibus.
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-6 mt-4 py-2 rounded-md hover:bg-pink-600 duration-300">
            Back
          </button></Link>
        
        </div>
        <div className="grid mt-12 sm:grid-cols-2 justify-center grid-cols-1 md:grid-cols-3">
         {
           Array.isArray(dataa)&& dataa?.map((item)=>(
              
              <Cards key={item.id} item={item}/>
            ))
            
          }
           {/* {
            dataa.map((item)=>{
              return (
              <Cards key={item.id} item={item}/>)
                  })
            
          } */}
        </div>
      </div>
    </>
  );
};

export default Course;
