import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehiclesById } from "../../../redux/store/vehiclesByIdSlice";
import Swal from "sweetalert2";
import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import { toast } from "react-toastify";
import EditVehiclesModal from "./EditVehiclesModal";

const PER_PAGE = 4;

const DriverDashboardVehicleList = () => {
  const { vehiclesById } = useSelector((state) => state.vehiclesById);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [myVehicle, setMyVehicle] = useState({});

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(vehiclesById.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("Selected Page", selectedPage);
    setCurrentPage(selectedPage);
  };

  const handleEdit = (e) => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    return () => {
      dispatch(fetchVehiclesById());
    };
  }, [dispatch]);

  function deleteVehicle(vehicleId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        touristGuideAppApi
          .delete(`/vehicles/${vehicleId}`)
          .then((res) => {
            dispatch(fetchVehiclesById());
          })
          .catch((err) => {
            console.log("Err", err);
            toast.error("Deletion Error");
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  return (
    <div>
      <div className="w-full">
        <div className="py-4 md:py-7">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold leading-normal text-gray-800 focus:outline-none sm:text-lg md:text-xl lg:text-2xl">
              Vehicles
            </p>
            <div className="flex cursor-pointer items-center rounded bg-gray-200 py-3 px-4 text-sm font-medium leading-none text-gray-600 hover:bg-gray-300">
              <p>Sort By:</p>
              <select className="ml-1 bg-transparent focus:text-indigo-600 focus:outline-none">
                <option className="text-sm text-indigo-800">Latest</option>
                <option className="text-sm text-indigo-800">Oldest</option>
                <option className="text-sm text-indigo-800">Latest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 px-4 md:py-7 md:px-8 xl:px-10">
          <div className="items-center justify-between sm:flex">
            <div className="flex items-center">
              <div className="rounded-full focus:bg-indigo-50 focus:outline-none  focus:ring-2 focus:ring-indigo-800">
                <div className="rounded-full bg-indigo-100 py-2 px-8 text-indigo-700">
                  <p>All</p>
                </div>
              </div>
            </div>
            <Link
              to="/dashboard/drivers/addVehicles"
              className="hover:bg-black-600 mt-4 inline-flex items-start justify-start rounded bg-black px-6 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:mt-0"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Vehicle
              </p>
            </Link>
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
              {
                vehiclesById
                  .slice(offset, offset + PER_PAGE)
                  .map((vehicle) => ((
                      <tr className="h-16 rounded border border-gray-100 focus:outline-none" key={vehicle.vehicleId}>
                        <td>
                          <div className="ml-5">
                            <div
                              className="relative flex flex-shrink-0 items-center justify-center rounded-sm bg-gray-200">
                              <img
                                className="h-10 w-10 rounded"
                                src={vehicle.vehiclePhotoUrl}
                                alt="Default avatar"
                              />
                              <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                                <svg
                                  className="icon icon-tabler icon-tabler-check"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M5 12l5 5l10 -10" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center pl-5">
                            <p className="mr-2 text-base font-medium leading-none text-gray-700">
                              {vehicle.vehicleName}
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                                stroke="#3B82F6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                                stroke="#3B82F6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </td>
                        <td className="mx-2">
                          {
                            vehicle.adminStatus === "pending" && (
                              <div
                                className="rounded bg-red-100 py-3 px-2 text-sm leading-none text-red-700 focus:outline-none text-center">
                                {vehicle.adminStatus}
                              </div>
                            )
                          }
                          {
                            vehicle.adminStatus === "confirm" && (
                              <div
                                className="rounded bg-green-100 py-3 px-2 text-sm leading-none text-green-700 focus:outline-none text-center">
                                {vehicle.adminStatus}
                              </div>
                            )
                          }
                        </td>
                        <td className="pl-24">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle
                                cx="7.50004"
                                cy="7.49967"
                                r="1.66667"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="ml-2 text-sm leading-none text-gray-600">
                              {vehicle.vehicleType}
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M7.5 5H16.6667"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 10H16.6667"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 15H16.6667"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.16669 5V5.00667"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.16669 10V10.0067"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.16669 15V15.0067"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="ml-2 text-sm leading-none text-gray-600">
                              {vehicle.availability}
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 9.1665V9.17484"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.66669 9.1665V9.17484"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.3333 9.1665V9.17484"
                                stroke="#52525B"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="ml-2 text-sm leading-none text-gray-600">
                              {vehicle.vehicleCondition}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="col col-5" data-label="">
                            <div className="btn-group dropstart" role="group">
                              <button
                                type="button"
                                className="bi bi-three-dots-vertical dropdown-btn"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              ></button>
                              <ul className="dropdown-menu">
                                <li className="list-item"
                                    onClick={() => setMyVehicle(vehicle)}>
                                  <button className="dropdown-item" type="button"
                                          onClick={handleEdit}>
                                    <i className="bi bi-pencil"></i> Edit
                                  </button>
                                </li>
                                <li
                                  className="list-item"
                                  onClick={() => deleteVehicle(vehicle.vehicleId)}
                                >
                                  <button className="dropdown-item icon-red" type="button">
                                    <i className="bi bi-trash"></i> Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>)
                  ))
              }
              </tbody>
            </table>
            <EditVehiclesModal setShowModal={setShowModal} showModal={showModal} vehicle={myVehicle} />
          </div>
        </div>
        <div className="">
          <ReactPaginate
            previousLabel={"??? Previous"}
            nextLabel={"Next ???"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName="my-4 flex flex-start content-center justify-center"
            pageClassName={""}
            pageLinkClassName="px-2 py-1 mx-2 border rounded-md border-black"
            previousLinkClassName={
              "px-2 py-1 mx-2 border rounded-md border-gray-300"
            }
            nextLinkClassName={
              "px-2 py-1 mx-2 border rounded-md border-gray-300"
            }
            disabledClassName={""}
            disabledLinkClassName={
              "px-2 py 1 mx-2 border rounded-md border-gray-300 bg-gray-300 text-gray-600"
            }
            activeLinkClassName={"text-white bg-black"}
          />
        </div>
      </div>
    </div>
  );
};

export default DriverDashboardVehicleList;
