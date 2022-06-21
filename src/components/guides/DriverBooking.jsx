import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGuides } from "../../redux/store/guidesSlice";
import img from "../../assets/images/guide.jpg";
import { fetchAvailableGuides } from "../../redux/store/availableGuideSlice";
import { fetchAvailableDrivers } from "../../redux/store/availableDriverSlice";
import { useState } from "react";

const DriverBooking = () => {
  const { availableDrivers } = useSelector((state) => state.availableDrivers);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvailableDrivers());
  }, [dispatch]);

  function onclick(event, data) {
    console.log(data);
    localStorage.setItem("driver", data);
  }

  return (
    <div>
      <div className="absolute top-0 h-20 w-full bg-black">
      </div>
      {showModal && (
        <div className="shadow-lg">
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
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
      <div className="pt-24 px-2">
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
                This is a dark alert
              </h3>
            </div>
            <div className="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
              More info about this info dark goes here. This example text is going to
              run a bit longer so that you can see how spacing within an alert works
              with this kind of content.
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
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

      <div className="mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableDrivers.length !== 0 && (
            availableDrivers.map((driver) => (
              <div className="no-underline cursor-pointer" key={driver.userId}>
                <div
                  className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                  <div>
                    <img className="object-center object-cover w-[350px] h-[300px]"
                         src={driver.userPhotoUrl ? driver.userPhotoUrl : img}
                         alt="photo" />
                  </div>
                  <div className="text-center py-8 sm:py-6">
                    <p className="text-xl text-gray-700 font-bold mb-2">Name - {driver.name}</p>
                    <p className="text-base text-gray-400 font-normal">Email - {driver.email}</p>
                    <p className="text-base text-gray-400 font-normal">Rating - {driver.rating}</p>
                  </div>
                  <Link to="/booking/vehicle">
                    <button
                      className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
                      onClick={event => onclick(event, driver.userId)}>
                      SELECT
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
        <Link to="/booking/main">
          <button
            className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600">
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DriverBooking;
