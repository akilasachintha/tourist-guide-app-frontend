import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../../assets/images/cards/img-1.jpg";
import { fetchHotelsById } from "../../../redux/store/hotelsByIdSlice";

const PER_PAGE = 4;

const HotelDashboardList = () => {
  const { loading, hotelsById } = useSelector((state) => state.hotelsById);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(hotelsById.length / PER_PAGE);
  const [hotelImages, setHotelImages] = useState([]);
  let user = JSON.parse(localStorage.getItem("user"));


  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("Selected Page", selectedPage);
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    dispatch(fetchHotelsById());

  }, [dispatch]);

  // const hotelsFilterById = hotels.filter(({ userId }) => {
  //   return userId.toString() === user.userId;
  // });


  const currentPageData = hotelsById
    ?.slice(offset, offset + PER_PAGE)
    .map((hotelsById) => (
      <tr
        className="h-16 rounded border border-gray-100 focus:outline-none"
        key={hotelsById.hotelId}
      >
        <td>
          <div className="ml-5">
            <div className="relative flex flex-shrink-0 items-center justify-center rounded-sm bg-gray-200">

              <img
                className="h-10 w-10 rounded"
                src={hotelsById.hotelImages[0]?.url ? hotelsById.hotelImages[0]?.url : img1}
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
              {hotelsById.name}
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
              {hotelsById.category}
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
              {hotelsById.district}
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
              {hotelsById.town}
            </p>
            <p className="ml-2 text-sm leading-none text-gray-600">
              {hotelsById.district}
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
                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                stroke="#52525B"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="ml-2 text-sm leading-none text-gray-600"></p>
          </div>
        </td>
        <td className="pl-5">
          <button className="rounded bg-red-100 py-3 px-3 text-sm leading-none text-red-700 focus:outline-none">
            {hotelsById.adminStatus}
          </button>
        </td>
        <td className="pl-4">
          <Link to={`/dashboard/hotels/hotellist/${hotelsById.hotelId}`}>
            <button
              className="rounded bg-gray-100 py-3 px-5 text-sm leading-none text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2">
              View
            </button>
          </Link>
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
                <li className="list-item">
                  <Link to={`./updatehotel/${hotelsById.hotelId}`}>
                  <button className="dropdown-item" type="button">
                    <i className="bi bi-pencil"></i> Edit
                  </button>
                </Link>
                </li>
                {<li
                  className="list-item"

                >
                  <button className="dropdown-item icon-red" type="button">
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </li>}
              </ul>
            </div>
          </div>
        </td>
      </tr>
    ));

  return (
    <div>
      <div className="w-full">
        <div className="px-4 py-4 md:px-10 md:py-7">
          <div className="flex items-center justify-between">
            <p
              className="text-base font-bold leading-normal text-gray-800 focus:outline-none sm:text-lg md:text-xl lg:text-2xl">
              Hotels
            </p>
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
              <div
                className="ml-4 rounded-full focus:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-800 sm:ml-8">
                <div className="rounded-full py-2 px-8 text-gray-600 hover:bg-indigo-100 hover:text-indigo-700">
                  <Link to="./roomdetails">
                    <p>Add Rooms</p>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/dashboard/hotels/hotels/add"
              className="hover:bg-black-600 mt-4 inline-flex items-start justify-start rounded bg-black px-6 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:mt-0"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Hotel
              </p>
            </Link>
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>{currentPageData}</tbody>
            </table>
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

export default HotelDashboardList;