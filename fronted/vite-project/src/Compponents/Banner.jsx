import React from "react";
import banner from '../../public/books4.png'
const Banner = () => {
  return (
    <>
      <div className=" 
       max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full mt-12 order-2 md:order-1 md:mt-32 md:w-1/2 ">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold">
              Hello,welcomes here to learn something{" "}
              <span className="text-pink-600 text-4xl">new everyday!!!</span>
            </h1>
            <p className="text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              incidunt? Dolore fugiat magni adipisci nobis quibusdam, omnis
              eaque saepe.
            </p>

            <label className="input input-bordered dark:border-[1px] dark:border-white dark:bg-slate-900  dark:text-white flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow dark:bg-slate-900  dark:text-white" placeholder="Email" />
            </label>
          </div>
          <button className="btn my-3 btn-secondary">Secondary</button>
        </div>
       
        <div className="order-1 flex flex-row   h-1/2 mt-20 justify-center mx-2 w- full items-center md:w-1/2 ">
        <img  src={banner}   className=''alt="banner"/></div>
      </div>
    </>
  );
};

export default Banner;
