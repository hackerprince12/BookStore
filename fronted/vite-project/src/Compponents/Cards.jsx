import React from "react";


function Cards({ item }) {

  console.log("Cards vala item",item);

  return (
    <>
      <div className=" mt-4 my-3 px-1">
        <div className="card w-80 m bg-base-100 dark:bg-slate-900 dark:border-white dark:border-[1px] dark:text-white shadow-xl hover:scale-95 duration-200">
          <figure className="">
            <img src={item.Book_Url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.Book_name}
              <div className="badge badge-secondary  hover:bg-green-800">
                {item.rate}
              </div>
            </h2>
            <p>{item.Book_title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">${item.Book_price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
