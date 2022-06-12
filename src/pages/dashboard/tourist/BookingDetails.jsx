import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookings } from "../../../redux/store/bookingsSlice";
import img2 from "./pics/vehicle.jpg";

function BookingDetails() {
  const { id } = useParams();
  const { bookings } = useSelector((state) => state.bookings);
  const { hotels } = useSelector((state) => state.hotels);
  const [showHotel, setShowHotel] = useState(false);
  const [showDriver, setShowDriver] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const dispatch = useDispatch();
  const { myHotelId, setMyHotelId } = useState(4);
  const { myHotel, setMyHotel } = useState([]);

  const booking = bookings.filter(({ bookingId }) => {
    return bookingId.toString() === id;
  });


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
                {booking.length !== 0 && (
                  <div className="grid text-sm md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Booking ID</div>
                      <div className="px-4 py-2">{booking[0].bookingId}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Booking Status
                      </div>
                      <div className="px-4 py-2">{booking[0].hotelId}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Check In Date
                      </div>
                      <div className="px-4 py-2">{booking[0].checkInDate}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Check Out Date
                      </div>
                      <div className="px-4 py-2">{booking[0].checkOutDate}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Paid Amount</div>
                      <div className="px-4 py-2">{booking[0].paidAmount}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Paid Date</div>
                      <div className="px-4 py-2">{booking[0].date}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Paid Time</div>
                      <div className="px-4 py-2">{booking[0].time}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Advance Payment{" "}
                      </div>
                      <div className="px-4 py-2">
                        {booking[0].advancedPayment}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      {showHotel &
                      (
                        <div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Advance Payment{" "}
                            </div>
                            <div className="px-4 py-2">
                              {booking[0].advancedPayment}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <button className="rounded-full bg-black py-1 px-3 font-bold text-white hover:bg-black">
                      Update
                    </button>
                    <button className="rounded-full bg-black py-1 px-3 font-bold text-white hover:bg-black">
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
