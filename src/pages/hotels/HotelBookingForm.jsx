import React from 'react'
import "../../styles/hotels/room.css";
import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";


const HotelBookingForm = () => {
  const { category } = useSelector((state) => state.category);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      // newImage["id"] = Math.random();
      // setImages((prevState) => [...prevState, newImage]);
    }
  };
  const  formik = useFormik({
    initialValues:{
      noOfRooms:0,
      roomCategory:"",
      noOfMembers:""


    },onSubmit:(values)=>{
      localStorage.setItem('noOfRooms',values.noOfRooms);
      localStorage.setItem('roomCategory',values.roomCategory);
      localStorage.setItem('noOfMembers',values.noOfMembers);
      const nnn = localStorage.getItem('noOfRooms');
      const nn = localStorage.getItem('roomCategory');
      const n = localStorage.getItem('noOfMembers');
      alert(nnn);
      alert(nn);
      alert(n);


    }
  })
  return(
      <div >
        <div className="roomFormContainer">
          <div className="overflow-hidden shadow sm:rounded-md" id="roomFormContent">
            <div className="bg-white px-4 py-5 sm:p-6">
              <p id="topic">Hotel Name</p>
              <p id="topic">Book a Room</p>
              <form onSubmit={formik.handleSubmit} >
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How many rooms
                    </label>
                    <div className="col-span-6 sm:col-span-3">
                      <input
                        type="number"
                        name="noOfRooms"
                        value={formik.values.noOfRooms}
                        onChange={formik.handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Room Category
                    </label>
                    <select

                      name="roomCategory"
                      value={formik.values.roomCategory}
                      onChange={formik.handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>Chose...</option>
                      {category.map((category) => (
                        <option value={category.categoryType}
                        >{category.categoryType}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                     How many Members
                    </label>
                    <input
                      type="number"
                      name="noOfMembers"
                      value={formik.values.noOfMembers}
                      onChange={formik.handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">

                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6" id="bookButton">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-20 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                   Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

  )

}

export default HotelBookingForm;