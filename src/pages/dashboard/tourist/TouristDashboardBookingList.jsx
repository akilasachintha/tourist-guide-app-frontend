import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import img1 from "./pics/hotel.jpg";
import img2 from "./pics/vehicle.jpg";
import img3 from "./pics/guide.jpg";
import img4 from "./pics/guiden.jpg"
import img5 from "./pics/booking.png"

function TouristDashboardBookingList() {
  const { bookings } = useSelector((state) => state.bookings);
  const bookingId = 1;
 return (
    <div>
      <div>
      <div class="rounded bg-white p-8 shadow">
  <div class="w-3/4 grid grid-cols-5">
    <div class="object-center"> 
      <img src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" class="rounded-none w-550 h-550 p-1" />
    </div>
    <div class="col-span-4 flex flex-col gap-4"> 
      <div class="text-gray-80 flex flex-row gap-5 items-center">
        <div class="text-2xl">
          Isuru Dimal
        </div>
         <button class="text-xs font-bold border border-2 border-gray-300 p-2 rounded">
          Profile
        </button>
      </div>
      <div class="text-gray-800 flex flex-row gap-10 items-center"> 
        <div> 
          <span class="font-semibold"> 4 </span> Bookings 
        </div>
        <div> 
          <span class="font-semibold"> 6 </span> Days
        </div>
        <div> 
          <span class="font-semibold"> 61000 </span> Price
        </div>
      </div>
      
    </div>
  </div>
</div>
      </div>
      <div>
      <div className="flex items-center space-x-1 font-semibold leading-8 text-gray-900">
      <Link to={"/hotels"}>
  <div class="mx-auto flex w-96 flex-col justify-start bg-white rounded-2xl shadow-xl shadow-slate-300/60">  
    <img src={img1} />
    <div class="p-4">
      <h1 class="text-2xl font-medium text-slate-600 pb-2">Hotel Booking</h1>
    </div>
  </div>
  </Link>
  <Link to={"/driver"}>
  <div class="mx-auto flex w-96 flex-col justify-start bg-white rounded-2xl shadow-xl shadow-slate-300/60">
    <img src={img2} />
    <div class="p-4">
      <h1 class="text-2xl font-medium text-slate-600 pb-2">Driver Booking</h1>
    </div>
  </div>
  </Link>
  <Link to={"/guide"}>
  <div class="mx-auto flex w-96 flex-col justify-start bg-white rounded-2xl shadow-xl shadow-slate-300/60">
    {/* <!-- img --> */}
    <img src={img4} />
    {/* <!-- text information --> */}
    <div class="p-4">
      <h1 class="text-2xl font-medium text-slate-600 pb-2">Guide Booking</h1>
    </div>
  </div>
    </Link>
  </div>
      </div>
      <div>
        <div className="">
          <div className="rounded bg-white p-8 shadow">
            <div>
              <h3 className="mt-4 text-xl font-bold">My Bookings</h3>
              {bookings.length != 0 &&
                bookings.map((booking) => (
                  <Link
                    to={`/dashboard/tourists/bookings/${booking.bookingId}`}
                    key={booking.bookingId}
                  >
                    <div className="mt-5 flex w-full flex-wrap items-center justify-between rounded border p-4">
                      <img src={img5} className="w-40 h-30" />
                      <div className="w-2/3">
                        <h3 className="text-lg font-medium">
                          Booking ID:{booking.bookingId}
                        </h3>
                        <p className="text-bg-black text-xs">
                          <h1>Booking start date : 2022/04/08</h1>
                          <h1>Booking Status {booking.bookingStatus}</h1>
                        </p>
                      </div>
                      <div>
                        <h4 className="text-3xl font-medium">
                          <sup className="text-lg text-purple-800"></sup> 
                        </h4>
                      </div>
                      <div>
                        <h4 className="text-3xl font-medium"></h4>
                      </div>
                      <div className="mt-4 flex w-full justify-between">
                        <label
                          className="block uppercase tracking-wide text-gray-700"
                          htmlFor="grid-first-name"
                        ></label>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TouristDashboardBookingList;
