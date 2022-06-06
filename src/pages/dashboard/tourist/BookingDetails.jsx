import React, { useState } from "react";
import { useParams } from "react-router-dom";
import img2 from "./pics/vehicle.jpg";

function BookingDetails() {
  const { id } = useParams();
  return (
    <div>
      <div className="container mx-auto my-5 p-5">
        <div className="no-wrap md:-mx-2 md:flex ">
          <div className="w-full md:mx-2 md:w-3/12">
            <div className="border-t-4 border-green-400 bg-white p-3">
              <div className="image overflow-hidden">
                <img
                  className="mx-auto h-30 w-40"
                  src={img2}
                  alt=""
                />
              </div>
              <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                Toyota Corolla
              </h1>
              <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">
                Car
              </p>
            </div>
            <div className="my-4" />
          </div>
          <div className="mx-2 h-64 w-full md:w-9/12">
            <div className="rounded-sm bg-white p-3 shadow-sm">
              <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid text-sm md:grid-cols-2">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Full Name</div>
                    <div className="px-4 py-2">Pulini Tilanka</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">+94 705334841</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        jane@example.com
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Country</div>
                    <div className="px-4 py-2">Australia</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Passport No</div>
                    <div className="px-4 py-2">123456789</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">NIC</div>
                    <div className="px-4 py-2">986291431V</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Check in Date</div>
                    <div className="px-4 py-2">26/02/2022</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Check out Date
                    </div>
                    <div className="px-4 py-2">28/02/2022</div>
                  </div>
                  <button class="rounded-full bg-black py-1 px-3 font-bold text-white hover:bg-black">
                    Update
                  </button>
                  <button class="rounded-full bg-black py-1 px-3 font-bold text-white hover:bg-black">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
