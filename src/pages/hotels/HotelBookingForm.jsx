import React from 'react'
import "../../styles/hotels/room.css"



const HotelBookingForm = () => {
  return(

      <div >
        <div className="roomFormContainer">
          <div className="overflow-hidden shadow sm:rounded-md" id="roomFormContent">
            <div className="bg-white px-4 py-5 sm:p-6">
              <p id="topic">Hotel Name</p>
              <p id="topic">Book a Room</p>
              <form >
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
                        name="roomNo"
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
                      id="roomAvailability"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option >yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Room Condition
                    </label>
                    <select
                      id="roomAvailability"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option >yes</option>
                      <option>No</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How Many members
                    </label>
                    <input
                      type="text"
                      name="price"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
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