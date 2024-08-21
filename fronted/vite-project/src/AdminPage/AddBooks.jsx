import React, { useEffect, useState } from "react";
import Logo from "../Compponents/Logo";
import { ItemSchema } from "../yupSchema/ItemSchema";
import { useFormik } from "formik";
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBooks = () => {
 const [data, setdata] = useState('');  


//  const notify = () => toast("This is a toast notification !");
  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      Book_name: "",
      Book_title: "",
      Book_price: "",
      Book_Url: "",
      rate: ""
    },
     validationSchema: ItemSchema,
    onSubmit:  (values,action) => {
      console.log(values);
      try {
        const users=  axios.post("http://localhost:3001/api/create",values)
      } catch (error) {
        console.log("post data error:",error);
      }
      toast.success("Add item successfull")
      action.resetForm();
      
    },
  });
  // console.log(errors);
  return (
    <>
    <ToastContainer />
      <div>
        <div className="navbar bg-base-100 ">
          <div className="flex-1">
            <a className=" text-xl font-bold px-1 py-2 cursor-pointer">
              BooksStore
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <Logo />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-center mt-8  items-center">
        <div>
          <h1 className="text-2xl font-bold bg-blue-500 text-white my-2 rounded-sm px-3 py-1">
            Add Items
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="gap-2 flex flex-col">
          <label className="input input-bordered flex  items-center gap-2">
            Book-name
            <input
              type="text"
              value={values.Book_name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Book_name"
              className="grow"
              placeholder="name"
            />
         
          </label>
          {errors.Book_name && touched.Book_name ? (
                  <p className="text-red-500 text-sm">{errors.Book_name}</p>
                ) : null}
          <label className="input input-bordered flex  items-center gap-2">
            Book-title
            <input
              type="text"
              value={values.Book_title}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Book_title"
              className="grow"
              placeholder="title"
            />
             
          </label>
          {errors.Book_title && touched.Book_title ? (
                  <p className="text-red-500 text-sm">{errors.Book_title}</p>
                ) : null}
          <label className="input input-bordered flex items-center gap-2">
            Price
            <input
              type="number"
              value={values.Book_price}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Book_price"
              className="grow"
              placeholder="$20"
            />
             
          </label>
          {errors.Book_price && touched.Book_price ? (
                  <p className="text-red-500 text-sm">{errors.Book_price}</p>
                ) : null}

          <label className="input input-bordered flex items-center gap-2">
            Image-url
            <input
              name="Book_Url"
              value={values.Book_Url}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className="grow"
              placeholder="Search"
            />
          </label>
        <label  className="input input-bordered flex items-center gap-2" > Book-type
        <input
              name="rate"
              value={values.rate}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
               className="grow"
              placeholder="Search"
            />
           
        </label>
        {errors.rate && touched.rate ? (
                  <p className="text-red-500 text-sm">{errors.rate}</p>
                ) : null}

          <button
            type="submit"
            className="btn btn-block text-white bg-green-600 hover:bg-green-700 "
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBooks;
