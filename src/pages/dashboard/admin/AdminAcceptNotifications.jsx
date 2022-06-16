import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../../../redux/store/vehiclesSlice";
import touristGuideAppAPI from "../../../apis/touristGuideAppAPI";
import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import { fetchVehiclesById } from "../../../redux/store/vehiclesByIdSlice";
import { toast } from "react-toastify";

const AdminAcceptNotifications = () => {
  const { vehicles } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();

  const vehiclesFilterByPending = vehicles.filter(({ vehicleStatus }) => {
    return vehicleStatus === "pending";
  });

  const handleAccept = (e) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Accept",
      denyButtonText: `Reject`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        touristGuideAppAPI.put(`vehicles/${e.target.value}`, {
          "vehicleStatus": "accept"
        })
          .then((res) => {
            dispatch(fetchVehicles());
            dispatch(fetchVehiclesById());
            console.log(res.data);
          });

      } else if (result.isDenied) {
        touristGuideAppApi
          .delete(`/vehicles/${e.target.value}`)
          .then((res) => {
            console.log(res.data);
            dispatch(fetchVehicles());
          })
          .catch((err) => {
            console.log("Err", err);
            toast.error("Deletion Error");
          });
        Swal.fire("Changes are not saved", "", "info");
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
        touristGuideAppApi
          .delete(`/vehicles/${e.target.value}`)
          .then((res) => {
            console.log(res.data);
            dispatch(fetchVehicles());
          })
          .catch((err) => {
            console.log("Err", err);
            toast.error("Deletion Error");
          });
        Swal.fire(
          "Rejected!",
          "Request has been rejected.",
          "success"
        );
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
          {vehiclesFilterByPending.length !== 0 ? <div>
            {
              vehiclesFilterByPending.map((vehicle) => (
                <div id="alert-additional-content-3" className="p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
                     role="alert">
                  <div className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <h3 className="text-lg font-medium text-green-700 dark:text-green-800">This is a success alert</h3>
                  </div>
                  <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                    More info about this info success goes here. This example text is going to run a bit longer so that
                    you can see how spacing within an alert works with this kind of content.
                  </div>
                  <div className="flex">
                    <button type="button"
                            onClick={handleAccept}
                            value={vehicle.vehicleId}
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900">
                      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path fill-rule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clip-rule="evenodd"></path>
                      </svg>
                      Accept
                    </button>
                    <button type="button"
                            onClick={handleReject}
                            value={vehicle.vehicleId}
                            className="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white"
                            data-dismiss-target="#alert-additional-content-3" aria-label="Close">
                      Reject
                    </button>
                  </div>
                </div>
              ))
            }
          </div> : <div>
            No Notifications...
          </div>}
        </div>


        {/*<div id="alert-additional-content-2" className="p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">*/}
        {/*  <div className="flex items-center">*/}
        {/*    <svg className="mr-2 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20"*/}
        {/*         xmlns="http://www.w3.org/2000/svg">*/}
        {/*      <path fillRule="evenodd"*/}
        {/*            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"*/}
        {/*            clipRule="evenodd" />*/}
        {/*    </svg>*/}
        {/*    <h3 className="text-lg font-medium text-red-700 dark:text-red-800">This is a danger alert</h3>*/}
        {/*  </div>*/}
        {/*  <div className="mt-2 mb-4 text-sm text-red-700 dark:text-red-800">*/}
        {/*    More info about this info danger goes here. This example text is going to run a bit longer so that you can*/}
        {/*    see how spacing within an alert works with this kind of content.*/}
        {/*  </div>*/}
        {/*  <div className="flex">*/}
        {/*    <button type="button"*/}
        {/*            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900">*/}
        {/*      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"*/}
        {/*           xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />*/}
        {/*        <path fillRule="evenodd"*/}
        {/*              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"*/}
        {/*              clipRule="evenodd" />*/}
        {/*      </svg>*/}
        {/*      View more*/}
        {/*    </button>*/}
        {/*    <button type="button"*/}
        {/*            className="text-red-700 bg-transparent border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white"*/}
        {/*            data-dismiss-target="#alert-additional-content-2" aria-label="Close">*/}
        {/*      Dismiss*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div id="alert-additional-content-3" className="p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"*/}
        {/*     role="alert">*/}
        {/*  <div className="flex items-center">*/}
        {/*    <svg className="mr-2 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20"*/}
        {/*         xmlns="http://www.w3.org/2000/svg">*/}
        {/*      <path fillRule="evenodd"*/}
        {/*            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"*/}
        {/*            clipRule="evenodd" />*/}
        {/*    </svg>*/}
        {/*    <h3 className="text-lg font-medium text-green-700 dark:text-green-800">This is a success alert</h3>*/}
        {/*  </div>*/}
        {/*  <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">*/}
        {/*    More info about this info success goes here. This example text is going to run a bit longer so that you can*/}
        {/*    see how spacing within an alert works with this kind of content.*/}
        {/*  </div>*/}
        {/*  <div className="flex">*/}
        {/*    <button type="button"*/}
        {/*            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900">*/}
        {/*      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"*/}
        {/*           xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />*/}
        {/*        <path fillRule="evenodd"*/}
        {/*              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"*/}
        {/*              clipRule="evenodd" />*/}
        {/*      </svg>*/}
        {/*      View more*/}
        {/*    </button>*/}
        {/*    <button type="button"*/}
        {/*            className="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white"*/}
        {/*            data-dismiss-target="#alert-additional-content-3" aria-label="Close">*/}
        {/*      Dismiss*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div id="alert-additional-content-4" className="p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200"*/}
        {/*     role="alert">*/}
        {/*  <div className="flex items-center">*/}
        {/*    <svg className="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20"*/}
        {/*         xmlns="http://www.w3.org/2000/svg">*/}
        {/*      <path fillRule="evenodd"*/}
        {/*            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"*/}
        {/*            clipRule="evenodd" />*/}
        {/*    </svg>*/}
        {/*    <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">This is a warning alert</h3>*/}
        {/*  </div>*/}
        {/*  <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">*/}
        {/*    More info about this info warning goes here. This example text is going to run a bit longer so that you can*/}
        {/*    see how spacing within an alert works with this kind of content.*/}
        {/*  </div>*/}
        {/*  <div className="flex">*/}
        {/*    <button type="button"*/}
        {/*            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900">*/}
        {/*      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"*/}
        {/*           xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />*/}
        {/*        <path fillRule="evenodd"*/}
        {/*              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"*/}
        {/*              clipRule="evenodd" />*/}
        {/*      </svg>*/}
        {/*      View more*/}
        {/*    </button>*/}
        {/*    <button type="button"*/}
        {/*            className="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white"*/}
        {/*            data-dismiss-target="#alert-additional-content-4" aria-label="Close">*/}
        {/*      Dismiss*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div id="alert-additional-content-5" className="p-4 bg-gray-100 rounded-lg dark:bg-gray-700" role="alert">*/}
        {/*  <div className="flex items-center">*/}
        {/*    <svg className="mr-2 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20"*/}
        {/*         xmlns="http://www.w3.org/2000/svg">*/}
        {/*      <path fillRule="evenodd"*/}
        {/*            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"*/}
        {/*            clipRule="evenodd" />*/}
        {/*    </svg>*/}
        {/*    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">This is a dark alert</h3>*/}
        {/*  </div>*/}
        {/*  <div className="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">*/}
        {/*    More info about this info dark goes here. This example text is going to run a bit longer so that you can see*/}
        {/*    how spacing within an alert works with this kind of content.*/}
        {/*  </div>*/}
        {/*  <div className="flex">*/}
        {/*    <button type="button"*/}
        {/*            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600">*/}
        {/*      <svg className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"*/}
        {/*           xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />*/}
        {/*        <path fillRule="evenodd"*/}
        {/*              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"*/}
        {/*              clipRule="evenodd" />*/}
        {/*      </svg>*/}
        {/*      View more*/}
        {/*    </button>*/}
        {/*    <button type="button"*/}
        {/*            className="text-gray-700 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 focus:ring-gray-600 dark:text-gray-300 dark:hover:text-white"*/}
        {/*            data-dismiss-target="#alert-additional-content-5" aria-label="Close">*/}
        {/*      Dismiss*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default AdminAcceptNotifications;
