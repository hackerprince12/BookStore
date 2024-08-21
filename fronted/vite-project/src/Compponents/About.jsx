import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[72px] sm:flex sm:flex-row items-center p-2">
        <div className=" flex flex-col gap-y-4 text-start justify-center  md:w-1/2 md:h-1/2">
          <h2 className="text-5xl px-4 py-2 font-bold sm:text-start text-center text-pink-400">
            More About Us
          </h2>
          <p className="flex m-2 coverflow-hidden px-4 mb-8 text-2xl  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            qui veniam odit, ipsam magni, culpa distinctio officia molestias
            temporibus quis dolorem in et maxime.
          </p>
        </div>
        <div className="flex md:h-1/2 md:w-1/2 bg-yellow-200">
          <img
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className=""
            alt="banner"
          />
        </div>
      </div>

      <div className="mt-[72px] sm:flex sm:flex-row items-center p-2">
      <div className="flex md:h-1/2 md:w-1/2 ">
          <img
            src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
            className=""
            alt="banner"
          />
        </div>
        <div className=" flex flex-col gap-y-4 text-start justify-center  md:w-1/2 md:h-1/2">
          <h2 className="text-5xl px-4 py-2 font-bold sm:text-start text-center text-pink-400">
            Our Goal
          </h2>
          <p className="flex m-2 coverflow-hidden px-4 mb-8 text-2xl  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            qui veniam odit, ipsam magni, culpa distinctio officia molestias
            temporibus quis dolorem in et maxime.
          </p>
        </div>
       
      </div>
     
       
      

      {/* List of about what do that system */}
      <p className="p-4 overflow-hidden text-pink-500 bg-slate-500 rounded-md m-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ut.
        Numquam animi libero vero, veniam, nobis quas eligendi vel aspernatur
        asperiores natus odio.
      </p>
      <p className="text-3xl font-bold items-center px-8">Features</p>
      <div className="flex  flex-col gap-4 p-8">
     
        <div    >
          
          <ul className="  justify-center grid sm:grid-cols-1 px-8 md:grid-cols-3 gap-4 list-disc ">
            <li className="text-2xl font-semibold list-disc">Water</li>
            <li className="text-2xl font-semibold list-disc">WiFi</li>
            <li className="text-2xl font-semibold list-disc">comfertable sits</li>
            <li className="text-2xl font-semibold list-disc">Air Conditioner</li>
          </ul>
        </div>

       

      </div>
      <Footer />
    </>
  );
};

export default About;
