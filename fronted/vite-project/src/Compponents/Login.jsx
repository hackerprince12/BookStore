import React from "react";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/courses" className="btn text-red-400 btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
              
             

            </form>
            <h3 className="font-bold text-lg">Login!</h3>
            <div className="mt-4 space-y-2">
              <span>Email :</span>
              <br />
              <input
                type="email"
                className="w-80  px-3 py-2 border rounded-md outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-4 space-y-2">
              <span>Password :</span>
              <br />
              <input
                type="text"
                className="w-80  px-3 py-2 border rounded-md outline-none"
                placeholder="Enter your Password"
              />
            </div>

            <div className="flex mt-4 justify-around">
              <button className="bg-pink-500 px-3 py-1 rounded-sm text-white hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not register{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  {" "}
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
