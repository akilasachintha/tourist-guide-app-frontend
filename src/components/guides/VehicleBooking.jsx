import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehiclesByDriver } from "../../redux/store/vehiclesByDriverSlice";
import img from "../../assets/images/guide.jpg";
import Swal from "sweetalert2";

const DriverVehicleList = () => {
  const { vehiclesByDriver } = useSelector((state) => state.vehiclesByDriver);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [viewType, setViewType] = useState({ grid: true });
  const { vehicles } = useSelector((state) => state.vehicles);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(fetchVehiclesByDriver());
    };
  }, [dispatch]);

  function onclick(event, data) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm Booking!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(data);
        localStorage.setItem("vehicle", data);
        navigate("/booking/main");
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
            <Link
              className="text-decoration-none link-secondary"
              to="/vehicle"
              replace
            >
              Booking
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Drivers
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Vehicles
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

      <div className="px-xl-5 container mt-4">
        <div className="row mt-lg-3 mb-4">
          <div className="col-lg-9">
            <div className="d-flex flex-column h-100">
              <div
                className={
                  "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 " +
                  (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")
                }
              >
                {vehiclesByDriver.map((vehicle) => (
                  <div key={vehicle.vehicleNo}>
                    <div className="card shadow-sm">
                      <Link to={`/vehicles/${vehicle.vehicleId}`}>
                        <img
                          className="card-img-top bg-dark cover h-[300px] overflow-auto object-cover"
                          alt={vehicle.vehicleName}
                          src={vehicle.vehiclePhotoUrl}
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title text-center text-dark text-truncate">
                          {vehicle.vehicleName}
                        </h5>
                        <p className="card-text text-center text-muted mb-0">{vehicle.priceForKm}</p>
                        <div className="d-grid d-block">
                          <Link to={`/booking/vehicle/${vehicle.vehicleId}`} className="btn btn-outline-dark mt-3">
                            <button>
                              View Details
                            </button>
                          </Link>
                        </div>
                        <div className="d-grid d-block">
                          <div className="btn btn-dark mt-3">
                            <button onClick={event => onclick(event, vehicle.vehicleId)}>
                              Book This Vehicle
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverVehicleList;
