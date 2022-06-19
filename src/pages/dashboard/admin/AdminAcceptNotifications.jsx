import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import touristGuideAppAPI from "../../../apis/touristGuideAppAPI";
import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import {
  fetchAdminApprovalDrivers,
  fetchAdminApprovalGuides,
  fetchAdminApprovalHotelOwners,
  fetchAdminApprovalHotelRooms,
  fetchAdminApprovalHotels,
  fetchAdminApprovalVehicles
} from "../../../redux/store/adminApprovalSlice";
import { fetchAppUser } from "../../../redux/store/appUserSlice";

const AdminAcceptNotifications = () => {
  const { drivers, vehicles, guides, hotelOwners, hotels, hotelRooms } = useSelector((state) => state.adminApproval);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAdminApprovalDrivers());
    dispatch(fetchAdminApprovalVehicles());
    dispatch(fetchAdminApprovalGuides());
    dispatch(fetchAdminApprovalHotelOwners());
    dispatch(fetchAdminApprovalHotels());
    dispatch(fetchAdminApprovalHotelRooms());
    dispatch(fetchAppUser());
  }, [dispatch]);


  const handleAccept = (e) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Accept",
      denyButtonText: `Reject`
    }).then((result) => {
      if (result.isConfirmed) {
        if (e.target.title === "driver") {
          touristGuideAppAPI.put(`approve/driver/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalDrivers());
              dispatch(fetchAppUser());
              Swal.fire("Saved!", "", "success");
            }).catch((err) => {
            console.log(err);
            Swal.fire("Error!", "", "error");
          });
        } else if (e.target.title === "vehicle") {
          touristGuideAppAPI.put(`approve/vehicle/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalVehicles());
              dispatch(fetchAppUser());
              Swal.fire("Saved!", "", "success");
            }).catch((err) => {
            console.log(err);
            Swal.fire("Error!", "", "error");
          });
        } else if (e.target.title === "guide") {
          touristGuideAppAPI.put(`approve/guide/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalGuides());
              dispatch(fetchAppUser());
              Swal.fire("Saved!", "", "success");
            }).catch((err) => {
            console.log(err);
            Swal.fire("Error!", "", "error");
          });
        } else if (e.target.title === "hotelOwner") {
          touristGuideAppAPI.put(`approve/hotelowner/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalHotelOwners());
              dispatch(fetchAppUser());
              Swal.fire("Saved!", "", "success");
            }).catch((err) => {
            console.log(err);
            Swal.fire("Error!", "", "error");
          });
        } else if (e.target.title === "hotel") {
          touristGuideAppAPI.put(`approve/hotel/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalHotels());
              dispatch(fetchAppUser());
              Swal.fire("Saved!", "", "success");
            }).catch((err) => {
            console.log(err);
            Swal.fire("Error!", "", "error");
          });
        } else if (e.target.title === "hotelroom") {
          touristGuideAppAPI.put(`approve/room/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalHotelRooms());
              dispatch(fetchAppUser());
              Swal.fire("Saved!", "", "success");
            }).catch((err) => {
            console.log(err);
            Swal.fire("Error!", "", "error");
          });
        }
      }
    });
  };

  const handleReject = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject it!"
    }).then((result) => {
      if (result.isConfirmed) {
        if (e.target.title === "driver") {
          touristGuideAppApi
            .delete(`reject/driver/${e.target.value}`)
            .then((res) => {
              dispatch(fetchAdminApprovalDrivers());
              Swal.fire(
                "Rejected!",
                "Request has been rejected.",
                "success"
              );
            })
            .catch((err) => {
              console.log("Err", err);
              Swal.fire("Error!", "", "error");
            });
        } else if (e.target.title === "vehicle") {
          touristGuideAppApi
            .delete(`reject/vehicle/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalVehicles());
              Swal.fire(
                "Rejected!",
                "Request has been rejected.",
                "success"
              );
            })
            .catch((err) => {
              console.log("Err", err);
              Swal.fire("Error!", "", "error");
            });
        } else if (e.target.title === "guide") {
          touristGuideAppApi
            .delete(`reject/guide/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalGuides());
              Swal.fire(
                "Rejected!",
                "Request has been rejected.",
                "success"
              );
            })
            .catch((err) => {
              console.log("Err", err);
              Swal.fire("Error!", "", "error");
            });
        } else if (e.target.title === "hotelOwner") {
          touristGuideAppApi
            .delete(`reject/hotelowner/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalHotelOwners());
              Swal.fire(
                "Rejected!",
                "Request has been rejected.",
                "success"
              );
            })
            .catch((err) => {
              console.log("Err", err);
              Swal.fire("Error!", "", "error");
            });
        }else if (e.target.title === "hotel") {
          touristGuideAppApi
            .delete(`reject/hotel/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalHotels());
              Swal.fire(
                "Rejected!",
                "Request has been rejected.",
                "success"
              );
            })
            .catch((err) => {
              console.log("Err", err);
              Swal.fire("Error!", "", "error");
            });
        } else if (e.target.title === "hotelRoom") {
          touristGuideAppApi
            .delete(`reject/room/${e.target.value}`)
            .then((res) => {
              console.log(res.data);
              dispatch(fetchAdminApprovalHotelRooms());
              Swal.fire(
                "Rejected!",
                "Request has been rejected.",
                "success"
              );
            })
            .catch((err) => {
              console.log("Err", err);
              Swal.fire("Error!", "", "error");
            });
        }
      }
    });
  };

  return (
    <div>
      <div>
        <div className="py-4 md:py-7">
          <div className="flex items-center justify-between">
            <p
              className="text-base font-bold leading-normal text-gray-800 focus:outline-none sm:text-lg md:text-xl lg:text-2xl">
              Notifications
            </p>
            <div
              className="flex cursor-pointer items-center rounded bg-gray-200 py-3 px-4 text-sm font-medium leading-none text-gray-600 hover:bg-gray-300">
              <p>Sort By:</p>
              <select className="ml-1 bg-transparent focus:text-indigo-600 focus:outline-none">
                <option className="text-sm text-indigo-800">Latest</option>
                <option className="text-sm text-indigo-800">Oldest</option>
                <option className="text-sm text-indigo-800">Latest</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          {drivers.length !== 0 && <div>
            {
              drivers.map((driver) => (
                <div id="alert-1" className="p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
                     key={driver.userId}
                     role="alert">
                  <div className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-medium text-green-700 dark:text-green-800">{driver.name} - Driver</h3>
                  </div>
                  <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">

                  </div>
                  <div className="flex">
                    <button type="button"
                            onClick={handleAccept}
                            value={driver.userId}
                            title="driver"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900">
                      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      Accept
                    </button>
                    <button type="button"
                            title="driver"
                            onClick={handleReject}
                            value={driver.userId}
                            className="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white"
                            data-dismiss-target="#alert-1" aria-label="Close">
                      Reject
                    </button>
                  </div>
                </div>
              ))
            }
          </div>}

          {
            vehicles.length !== 0 && (
              vehicles.map((vehicle) => (
                <div id="alert-2" className="p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200"
                     key={vehicle.vehicleId}
                     role="alert">
                  <div className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">{vehicle.vehicleName} -
                      Vehicle</h3>
                  </div>
                  <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">

                  </div>
                  <div className="flex">
                    <button type="button"
                            onClick={handleAccept}
                            title="vehicle"
                            value={vehicle.vehicleId}
                            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900">
                      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      Accept
                    </button>
                    <button type="button"
                            title="vehicle"
                            onClick={handleReject}
                            value={vehicle.vehicleId}
                            className="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-black focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-black"
                            data-dismiss-target="#alert-2" aria-label="Close">
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )
          }

          {
            guides.length !== 0 && (
              guides.map((guide) => (
                <div id="alert-3" className="p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
                     key={guide.userId}
                     role="alert">
                  <div className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-medium text-red-700 dark:text-red-800">{guide.name} - Guide</h3>
                  </div>
                  <div className="mt-2 mb-4 text-sm text-red-700 dark:text-red-800">

                  </div>
                  <div className="flex">
                    <button type="button"
                            onClick={handleAccept}
                            title="guide"
                            value={guide.userId}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900">
                      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      Accept
                    </button>
                    <button type="button"
                            title="guide"
                            onClick={handleReject}
                            value={guide.userId}
                            className="text-red-700 bg-transparent border border-red-700 hover:bg-red-800 hover:text-black focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white"
                            data-dismiss-target="#alert-3" aria-label="Close">
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )
          }

          {
            hotelOwners.length !== 0 && (
              hotelOwners.map((hotelOwner) => (
                <div id="alert-3" className="p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200"
                     key={hotelOwner.userId}
                     role="alert">
                  <div className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">{hotelOwner.name} - Hotel
                      Owner</h3>
                  </div>
                  <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">

                  </div>
                  <div className="flex">
                    <button type="button"
                            onClick={handleAccept}
                            title="hotelOwner"
                            value={hotelOwner.userId}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900">
                      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      Accept
                    </button>
                    <button type="button"
                            title="hotelOwner"
                            onClick={handleReject}
                            value={hotelOwner.userId}
                            className="text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-800 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
                            data-dismiss-target="#alert-3" aria-label="Close">
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )
          }

          {
            hotels.length !== 0 && (
              hotels.map((hotel) => (
                <div id="alert-3" className="p-4 mb-4 bg-purple-100 rounded-lg dark:bg-purple-200"
                     key={hotel.hotelId}
                     role="alert">
                  <div className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-purple-700 dark:text-purple-800" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-medium text-purple-700 dark:text-purple-800">{hotel.name} - Hotel</h3>
                  </div>
                  <div className="mt-2 mb-4 text-sm text-purple-700 dark:text-purple-800">

                  </div>
                  <div className="flex">
                    <button type="button"
                            onClick={handleAccept}
                            title="hotel"
                            value={hotel.hotelId}
                            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-purple-800 dark:hover:bg-purple-900">
                      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      Accept
                    </button>
                    <button type="button"
                            title="hotel"
                            onClick={handleReject}
                            value={hotel.hotelId}
                            className="text-purple-700 bg-transparent border border-purple-700 hover:bg-purple-800 hover:text-black focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-purple-800 dark:text-purple-800 dark:hover:text-white"
                            data-dismiss-target="#alert-3" aria-label="Close">
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )
          }

          {
            hotelRooms.length !== 0 && (
              hotelRooms.map((room) => (
                <div id="alert-3" className="p-4 mb-4 bg-purple-100 rounded-lg dark:bg-pink-200"
                     key={room.roomId}
                     role="alert">
                  <div className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-pink-700 dark:text-pink-800" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      ></path>
                    </svg>
                    <h3 className="text-lg font-medium text-pink-700 dark:text-pink-800">{room.roomNo} - Hotel</h3>
                  </div>
                  <div className="mt-2 mb-4 text-sm text-pink-700 dark:text-pink-800">

                  </div>
                  <div className="flex">
                    <button type="button"
                            onClick={handleAccept}
                            title="hotelRoom"
                            value={room.roomId}
                            className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-pink-800 dark:hover:bg-pink-900">
                      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      Accept
                    </button>
                    <button type="button"
                            title="hotelRoom"
                            onClick={handleReject}
                            value={room.roomId}
                            className="text-pink-700 bg-transparent border border-pink-700 hover:bg-pink-800 hover:text-black focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-pink-800 dark:text-pink-800 dark:hover:text-white"
                            data-dismiss-target="#alert-3" aria-label="Close">
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )
          }
        </div>

      </div>
    </div>
  );
};

export default AdminAcceptNotifications;
