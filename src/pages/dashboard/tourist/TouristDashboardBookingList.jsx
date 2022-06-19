import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TouristDashboardBookingList() {
  const { bookings } = useSelector((state) => state.bookings);
  return (
    <div>
      <div>
        <div>
          <div className="rounded bg-white p-8 shadow">
            <div className="w-3/4 grid grid-cols-5">
              <div className="object-center">
                <img src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                     className="rounded-none w-550 h-550 p-1" />
              </div>
              <div className="col-span-4 flex flex-col gap-4">
                <div className="text-gray-80 flex flex-row gap-5 items-center">
                  <div className="text-2xl">
                    Isuru Dimal
                  </div>
                  <button className="text-xs font-bold border border-2 border-gray-300 p-2 rounded">
                    Profile
                  </button>
                </div>
                <div className="text-gray-800 flex flex-row gap-10 items-center">
                  <div>
                    <span className="font-semibold"> 4 </span> Bookings
                  </div>
                  <div>
                    <span className="font-semibold"> 6 </span> Days
                  </div>
                  <div>
                    <span className="font-semibold"> 61000 </span> Price
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-1 font-semibold leading-8 text-gray-900">
            <link to="{&quot;/hotels&quot;}" />
            <div
              className="mx-auto flex w-96 flex-col justify-start bg-white rounded-2xl shadow-xl shadow-slate-300/60">
              <img src="{img1}" />
              <div className="p-4">
                <h1 className="text-2xl font-medium text-slate-600 pb-2">Hotel Booking</h1>
              </div>
            </div>
            <link to="{&quot;/driver&quot;}" />
            <div
              className="mx-auto flex w-96 flex-col justify-start bg-white rounded-2xl shadow-xl shadow-slate-300/60">
              <img src="{img2}" alt="/" />
              <div className="p-4">
                <h1 className="text-2xl font-medium text-slate-600 pb-2">Driver Booking</h1>
              </div>
            </div>
            <link to="/" />
            <div
              className="mx-auto flex w-96 flex-col justify-start bg-white rounded-2xl shadow-xl shadow-slate-300/60">
              <img src="{img4}" alt="" />
              <div className="p-4">
                <h1 className="text-2xl font-medium text-slate-600 pb-2">Guide Booking</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className>
            <div className="rounded bg-white p-8 shadow">
              <div>
                <h3 className="mt-4 text-xl font-bold">My Bookings</h3>
                {"{"}bookings.length != 0 &amp;&amp;
                bookings.map((booking) =&gt; (
                <Link to="/dashboard/tourists/bookings/${booking.bookingId}" key="{booking.bookingId}" />
                <div className="mt-5 flex w-full flex-wrap items-center justify-between rounded border p-4">
                  <img src="{img5}" className="w-40 h-30" />
                  <div className="w-2/3">
                    <h3 className="text-lg font-medium">
                      Booking ID:{"{"}booking.bookingId{"}"}
                    </h3>
                    <p className="text-bg-black text-xs">
                    </p><h1>Booking start date : 2022/04/08</h1>
                    <h1>Booking Status {"{"}booking.bookingStatus{"}"}</h1>
                    <p />
                  </div>
                  <div>
                    <h4 className="text-3xl font-medium">
                      <sup className="text-lg text-purple-800" />
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-3xl font-medium" />
                  </div>
                  <div className="mt-4 flex w-full justify-between">
                    <label className="block uppercase tracking-wide text-gray-700" htmlFor="grid-first-name" />
                  </div>
                </div>
                )){"}"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristDashboardBookingList;
