import React, { useEffect } from "react";
import "../../styles/hotels/list.css";
import SearchItemH from "../../components/hotel/SearchItemH";
import { Link, useNavigate } from "react-router-dom";
import { fetchHotelsById } from "../../redux/store/hotelsByIdSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


const List = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(fetchHotelsById());
    };
  }, [dispatch]);

  return (
    <div>
      <div className="navlist">
      </div>

      <nav aria-label="breadcrumb" className="bg-custom-light px-4 pt-3 rounded">
        <ol className="breadcrumb mb-0">
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
            Hotels
          </li>
        </ol>
      </nav>

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
                    When you are select a guide for your tour make sure to check her/his price, rating, and language
                    that guide fluent with.
                    After selecting a guide according to your needs, click Select Guide button to Confirm your
                    Selection.
                  </p>
                </div>
                {/* Modal footer */}
              </div>
            </div>
          </div>
        </div>
      )}


      <div className="pt-4 px-3">
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

      <div className="text-center pt-12">
        <div className="flex mb-4">
          <div className="w-1/2 h-12">
            <h1 className="text-center text-3xl font-bold"></h1>
          </div>
          <div className="w-1/2 h-12">
            <div className="absolute right-4"><Link to="/booking/guide">
              <button
                className="flex rounded-md bg-blue-700 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600">
                SKIP HOTELS BOOKING & CONTINUE YOUR BOOKING <i className="bi bi-arrow-right ml-2"></i>
              </button>
            </Link></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold">Hotels Booking</h1>
      </div>

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            <SearchItemH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;