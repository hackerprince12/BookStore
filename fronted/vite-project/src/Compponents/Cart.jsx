import React from "react";
import Navbar from "./Navbar";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="flex  flex-col sm:flex-row ">
        <div className="overflow-x-auto mt-16">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    {/* <input type="search" className="checkbox" /> */}
                  </label>
                </th>
                <th>Name</th>
                <th>Details</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar flex-col">
                      <div className="mask mask-squircle h-22 w-22">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Book1</div>
                      <div className="text-sm opacity-60 text-green-600">
                        Free
                      </div>
                    </div>
                  </div>
                </td>
                <td className=" ">
                  <h className="font-bold px-1"> Computer Application</h>
                  <br />
                  <div className="flex">
                    {/* <span className="badge badge-ghost badge-sm"> */}

                    <div></div>
                  </div>
                  {/* </span> */}
                </td>
                <td>
                  <div className="flex justify-start font-bold px-2  gap-2">
                    <button className="font-bold px-2   ">
                    <CiSquareMinus   className="text-2xl font-bold"/>
                    </button>
                    <h1>{0}</h1>
                    <button className="font-bold px-2   ">
                    <  CiSquarePlus className="text-2xl font-bold" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col mt-20 px-4 py-2">
          <div className="flex items-center  flex-col h-[40vh]  mt-4">
            <h>Books price : ${0}</h>
            <h>Total Distcount : ${0}</h>
            <h>Shopping Charge : ${0}</h>
          </div>
          <div>
            <h1 className="font-bold p-1">Total price : ${0}</h1>
          </div>
          <div>
            <button className="btn btn-block bg-blue-600 text-white hover:bg-blue-500">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
