import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import vehicleVideo from "../../assets/videos/vehicleVideo.mp4";
import { fetchVehicles } from "../../redux/store/vehiclesSlice";

const VehicleDetails = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { appUser } = useSelector((state) => state.appUser);
  const { vehicles } = useSelector((state) => state.vehicles);
  const driver = localStorage.getItem("driver");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const vehicle = vehicles.filter(({ vehicleId }) => {
    return vehicleId.toString() === id;
  });

  let user = JSON.parse(localStorage.getItem("user"));

  const handleBooking = () => {
    if (!user || user.userType !== "tourist") {
      navigate("/auth/login");
    } else {
      navigate("/checking");
    }
  };


  console.log(vehicle[0]);

  useEffect(() => {
    return () => {
      dispatch(fetchVehicles());
    };
  }, [dispatch]);


  return (
    <div>
      <div className="relative h-screen w-full">
        <video
          className="h-full w-full object-cover"
          src={vehicleVideo}
          autoPlay={true}
          loop={true}
          muted={true}
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gray-900/30"></div>
        <div className="absolute top-0 flex h-full w-full flex-col justify-center p-4 text-center text-white">
          <div className="m-auto mt-48 w-9/12 overflow-hidden rounded-xl bg-blue-200 bg-opacity-25">
            {vehicle.length !== 0 && (
              <div className="items-start justify-center rounded-xl p-10 shadow-lg md:flex">
                <div className="lg:w-[38rem]">
                  <img
                    className="hidden rounded-lg object-cover lg:block h-[480px]"
                    alt="img of a vehicle"
                    src={vehicle[0].vehiclePhotoUrl}
                  />
                </div>

                <div className="mt-6 md:ml-6 md:mt-0 md:w-1/2 lg:ml-8 lg:w-[30rem] xl:w-2/5">
                  <div className="border-b border-gray-200 pb-6">
                    <h1
                      className="
							mt-2
							font-raleway
							text-5xl
							font-bold

						"
                    >
                      {vehicle[0].vehicleName}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-4">
                    <p className="text-base leading-4">Ratings</p>
                    <div className="flex items-center justify-center">
                      <p className="text-sm leading-none text-gray-100">
                        4.5/5 Reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-4">
                    <p className="text-base leading-4 ">Vehicle Type</p>
                    <div className="flex items-center justify-center">
                      <p className="text-sm leading-none">
                        {vehicle[0].vehicleType}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-4">
                    <p className="text-base leading-4 ">Vehicle Modal</p>
                    <div className="flex items-center justify-center">
                      <p className="text-sm leading-none">
                        {vehicle[0].vehicleModal}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-4">
                    <p className="text-base leading-4">Condition</p>
                    <div className="flex items-center justify-center">
                      <p className="text-sm leading-none">
                        {vehicle[0].vehicleCondition}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <p className="leading-40 text-base">Price For Km</p>
                    <div className="flex items-center justify-center">
                      <p className="text-sm leading-none">{vehicle[0].priceForKm}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleBooking}
                    className="
						flex w-full items-center justify-center
						bg-gray-800
						py-4
						text-base
						leading-none
						text-white
						hover:bg-gray-700
						focus:outline-none
						focus:ring-2
						focus:ring-gray-800
						focus:ring-offset-2
					"
                  >
                    <svg
                      className="mr-3"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66699 4.83333V4.84166"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.333 11.5V11.5083"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Book This Vehicle
                  </button>
                  <div>
                    <p className="mt-7 text-base leading-normal lg:leading-tight">
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*{showModal && (*/}
      {/*  <div className="shadow-lg">*/}
      {/*    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">*/}
      {/*      <div className="p-2 rounded w-75">*/}
      {/*        <div className="my-5">*/}
      {/*          <div className="row">*/}
      {/*            <div className="col-md-10 mx-auto col-12 card border-0 p-4">*/}
      {/*              <div>*/}
      {/*                <h1 className="text-3xl text-black align-middle my-2 text-center">Vehicle Booking</h1>*/}
      {/*              </div>*/}
      {/*              <div className="row">*/}
      {/*                <div className="col-md-4 col-12 my-auto">*/}
      {/*                  <img*/}
      {/*                    src={vehicle[0].vehiclePhotoUrl}*/}
      {/*                    alt="selected room" />*/}
      {/*                </div>*/}
      {/*                <div className="col-md-8 col-12">*/}
      {/*                  <table className="table">*/}
      {/*                    <thead className="thead-light">*/}
      {/*                    <tr>*/}
      {/*                      <th>Vehicle Modal</th>*/}
      {/*                      <td> {vehicle[0].vehicleModal} </td>*/}
      {/*                    </tr>*/}
      {/*                    <tr>*/}
      {/*                      <th>Vehicle Type</th>*/}
      {/*                      <td>{vehicle[0].vehicleType}</td>*/}
      {/*                    </tr>*/}
      {/*                    <tr>*/}
      {/*                      <th>Price Per Km</th>*/}
      {/*                      <td>{vehicle[0].priceForKm}</td>*/}
      {/*                    </tr>*/}
      {/*                    <tr>*/}
      {/*                      <th>Ratings</th>*/}
      {/*                      <td>4.2/5</td>*/}
      {/*                    </tr>*/}
      {/*                    </thead>*/}
      {/*                  </table>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              <div className="row my-3">*/}
      {/*                <div className="col-md-6 col-12">*/}
      {/*                  <div className="form-group">*/}
      {/*                    <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Date </label>*/}
      {/*                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}*/}
      {/*                                className="form-control" disabled/>*/}
      {/*                  </div>*/}

      {/*                </div>*/}
      {/*                <div className="col-md-6 col-12">*/}
      {/*                  <div className="form-group">*/}
      {/*                    <label htmlFor="Todate" className="font-weight-bolder mr-3">To Date </label>*/}
      {/*                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}*/}
      {/*                                className="form-control"  disabled/>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              <div className="row">*/}
      {/*                <div className="col-md-6 col-12">*/}
      {/*                  <h6 className="font-weight-bolder my-2">Number of days : 0</h6>*/}
      {/*                  <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>*/}
      {/*                </div>*/}
      {/*                <div className="col-md-6 col-12">*/}
      {/*                  <h6 className="font-weight-bold my-2">Price per day : <span*/}
      {/*                    className="badge badge-info">Rs 1000</span>*/}
      {/*                  </h6>*/}
      {/*                  <h6 className="font-weight-bold">Total Price to be paid : <span*/}
      {/*                    className="text-primary">Rs 1400</span></h6>*/}
      {/*                </div>*/}
      {/*              </div>*/}

      {/*              <div className="py-4 flex">*/}
      {/*                <div className="w-1/2"></div>*/}
      {/*                <div className="w-1/2">*/}
      {/*                  <button type="submit"*/}
      {/*                          onClick={() => setShowModal(false)}*/}
      {/*                          className="bg-yellow-500 text-white p-2 ml-6 rounded text-sm w-auto float-right ">*/}
      {/*                    Cancel*/}
      {/*                  </button>*/}
      {/*                  <Link to="/booking/main">*/}
      {/*                    <button  type="submit" className="bg-gray-500 text-white p-2 rounded text-sm w-auto float-right">*/}
      {/*                      Confirm Booking*/}
      {/*                    </button>*/}
      {/*                  </Link>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );


};

export default VehicleDetails;
