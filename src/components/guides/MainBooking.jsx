import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayment } from "../../redux/store/paymentSlice";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MainBooking = () => {

  const { payment } = useSelector((state) => state.payment);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("payment", payment);
  const [advance, setAdvance] = useState(payment * 0.2);

  useEffect(() => {
    dispatch(fetchPayment());
  }, [dispatch]);

  function onclick() {
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear() - 2000;
    let hour = d.getHours();
    let hourCount = day * 24 + month * 24 * 30 + year * 24 * 30 * 12 + hour + 2;
    let endTime = hourCount.toString();
    console.log(endTime);
    let user = localStorage.getItem("user");
    let driver = localStorage.getItem("driver");
    let guide = localStorage.getItem("guide");
    let hotel = localStorage.getItem("hotel");
    let amount = localStorage.getItem("amount");
    let type = localStorage.getItem("type");
    let vehicle = localStorage.getItem("vehicle");
    let startDay = localStorage.getItem("startDate");
    let startMonth = localStorage.getItem("startMonth");
    let startYear = localStorage.getItem("startYear");
    let endDay = localStorage.getItem("endDate");
    let endMonth = localStorage.getItem("endMonth");
    let endYear = localStorage.getItem("endYear");
    let dayCount = localStorage.getItem("dayCount");
    localStorage.removeItem("driver");
    localStorage.removeItem("vehicle");
    localStorage.removeItem("hotel");
    localStorage.removeItem("guide");
    localStorage.removeItem("amount");
    localStorage.removeItem("type");
    localStorage.removeItem("startDate");
    localStorage.removeItem("startMonth");
    localStorage.removeItem("startYear");
    localStorage.removeItem("endDate");
    localStorage.removeItem("endMonth");
    localStorage.removeItem("endYear");
    localStorage.removeItem("dayCount");
    localStorage.removeItem("location");

    let user2 = user ? parseInt(user) : null;
    let driver2 = driver ? parseInt(driver) : null;
    let guide2 = guide ? parseInt(guide) : null;
    let hotel2 = hotel ? parseInt(hotel) : null;
    let amount2 = amount ? parseInt(amount) : null;
    let type2 = type ? type.toString : null;
    let vehicle2 = vehicle ? parseInt(vehicle) : null;
    let startDay2 = startDay ? parseInt(startDay) : null;
    let startMonth2 = startMonth ? parseInt(startMonth) : null;
    let startYear2 = startYear ? parseInt(startYear) : null;
    let endDay2 = endDay ? parseInt(endDay) : null;
    let endMonth2 = endMonth ? parseInt(endMonth) : null;
    let endYear2 = endYear ? parseInt(endYear) : null;
    let dayCount2 = dayCount ? parseInt(dayCount) : null;


    let checkIn = startDay2 * 24 + startMonth2 * 24 * 30 + startYear2 * 24 * 30 * 12;
    let checkOut = endDay2 * 24 + endMonth2 * 24 * 30 + endYear2 * 24 * 30 * 12;
    let driverState = "pending";
    let guideState = "pending";
    let hotelState = "pending";
    if (driver2 === null) {
      driverState = "notSelect";
    }
    if (guide2 === null) {
      guideState = "notSelect";
    }
    if (hotel2 === null) {
      hotelState = "notSelect";
    }
    touristGuideAppAPI.post("/booking/add", {
      user: 4,
      booking: {
        hotelId: hotel2,
        driverId: driver2,
        guideId: guide2,
        vehicleId: vehicle2,
        checkInDate: checkIn.toString(),
        checkOutDate: checkOut.toString(),
        fullPayment: payment,
        paidAmount: payment * 0.2,

        temporaryBookings: [
          {
            hotelEndTime: endTime,
            guideEndTime: endTime,
            driverEndTime: endTime,
            driverStatus: driverState,
            guideStatus: guideState,
            hotelStatus: hotelState,
            pendingHotel: hotel2,
            pendingDriver: driver2,
            pendingGuide: guide2
          }
        ]
      },
      roomCount: amount2,
      categoryType: type,
      dayCount: dayCount2
    })
      .then((res) => {
        console.log(res.data);
        Swal.fire(
          "Booking Process is Done?",
          "Please wait for Confirm your Booking. ?",
          "info"
        );
        navigate("/dashboard/tourists/bookings")
      })
      .catch((err) => {
        console.log(err);
        Swal.fire(
          "Booking Process Error?",
          "Please check your Booking. ?",
          "error"
        );
      });
  }

  function cancel() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Booking!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("driver");
        localStorage.removeItem("vehicle");
        localStorage.removeItem("hotel");
        localStorage.removeItem("guide");
        localStorage.removeItem("amount");
        localStorage.removeItem("type");
        localStorage.removeItem("startDate");
        localStorage.removeItem("startMonth");
        localStorage.removeItem("startYear");
        localStorage.removeItem("endDate");
        localStorage.removeItem("endMonth");
        localStorage.removeItem("endYear");
        localStorage.removeItem("dayCount");
        localStorage.removeItem("location");

        Swal.fire(
          "Deleted!",
          "Your Booking has been Canceled.",
          "success"
        );
        navigate("/");
      }
    });
  }

  return (
    <div>
      <div className="absolute top-0 h-20 w-full bg-black">
      </div>

      <nav aria-label="breadcrumb" className="bg-custom-light rounded px-4 pt-24 ">
        <ol className="breadcrumb mb-0 pb-4">
          <li className="breadcrumb-item">
            Booking
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Confirm
          </li>
        </ol>
      </nav>

      {showModal && (
        <div className="shadow-lg">
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="p-2 rounded w-50">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                  </h3>
                  <button onClick={() => setShowModal(false)} type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle="defaultModal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its
                    citizens, companies around the world are updating their terms of service agreements to comply.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                    meant to ensure a common set of data rights in the European Union. It requires organizations to
                    notify users as soon as possible of high-risk data breaches that could personally affect them.
                  </p>
                </div>
                {/* Modal footer */}
              </div>
            </div>
          </div>
        </div>
      )}


      <div className="pt-1 px-3">
        <>
          <div
            id="alert-additional-content-5"
            className="p-4 bg-gray-100 rounded-lg dark:bg-gray-700"
            role="alert"
          >
            <div className="flex items-center">
              <svg
                className="mr-2 w-5 h-5 text-gray-700 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Consider Following Guidelines When Booking
              </h3>
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-white mt-3 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
              >
                <svg
                  className="-ml-0.5 mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                View more
              </button>
            </div>
          </div>
        </>
      </div>


      <div>
        <div>
          {payment?.length !== 0 && (
            // <div>
            //   <div className="rounded-lg shadow-lg">
            //     <div className="rounded overflow-hidden">
            //       <img alt="Img" src="https://www.pentravel.co.za/thank-you" />
            //       <div className="px-6 py-4">
            //         <div className="font-bold text-xl mb-2">Thank You!</div>
            //         <div className="text-gray-700 text-base">
            //           <div className="border-double border-4 border-sky-500 ...">
            //             <p>Your Full Payment : {payment}</p>
            //           </div>
            //           <div className="border-double border-4 border-sky-500 ...">
            //             <p>Advance Payment : {payment * 0.2}</p>
            //           </div>
            //         </div>
            //         </div>
            //         <div>
            //             <div className="inline-flex">
            //           <div className="px-6 pt-4 pb-2">
            //             <div className="px-6 pt-4 pb-2">
            //             <button
            //               className="flex rounded-md bg-black py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
            //               onClick={onclick}
            //             >
            //               SUBMIT
            //             </button>
            //             <Link to="/locations">
            //               <button
            //                 className="flex rounded-md bg-black py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
            //                 onClick={cancel}
            //               >
            //                 CANCEL
            //               </button>
            //             </Link>
            //             </div>
            //           </div>
            //           </div>
            //         </div>
            //     </div>
            //   </div>
            // </div>

            <div className="h-screen w-screen">
              <div className="flex flex-col items-center flex-1 mt-4 justify-center px-4 sm:px-0">
                <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
                     style={{ height: "500px" }}>
                  <div className="flex flex-col w-full md:w-1/2 p-4">
                    <div className="flex flex-col flex-1 justify-center mb-8">
                      <h1 className="text-4xl text-center font-thin">Thank You For Booking</h1>
                      <div className="w-full mt-4">
                        <div className="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                          <span className="py-2">FUll Payment Amount</span>
                          <div className="flex flex-col mb-4">
                            <input id="email" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400"
                                   name="email" value={payment} disabled={true} />
                          </div>
                          <span className="py-2">Advanced Payment Amount</span>
                          <div className="flex flex-col mb-4">
                            <input id="password" type="text"
                                   className="flex-grow h-8 px-2 rounded border border-grey-400" name="password"
                                   value={payment * 0.2} disabled={true} />
                          </div>
                          <div className="flex flex-col mt-8">
                            <button type="button"
                                    className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                                    onClick={onclick}>
                              Confirm Booking
                            </button>
                          </div>
                          <div className="flex flex-col mt-2">
                            <button type="button"
                                    className="bg-red-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                                    onClick={cancel}>
                              Cancel Booking
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{
                    background: "url(\"https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80\")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                  }} />
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default MainBooking;
