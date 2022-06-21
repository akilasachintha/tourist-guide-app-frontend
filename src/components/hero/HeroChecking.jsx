import React, { useState } from "react";
import beachVideo2 from "../../assets/videos/beachVideo2.mp4";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelsById } from "../../redux/store/hotelsByIdSlice";


const HeroChecking = () => {
  const [openDate, setOpenDate] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [myModal, setMyModal] = useState(false);
  const [showCategoryList, setShowCategoryList] = useState(false);
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ]);

  const navigate = useNavigate();

  const handleSearch = () => {
    setMyModal(true);
  };

  const validate = values => {
    const errors = {};
    if (values.noOfRooms > 0) {
      setShowCategoryList(true);
    } else {
      setShowCategoryList(false);
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      noOfRooms: 0,
      roomCategory: "",
      noOfMembers: ""

    }, validate, onSubmit: (values) => {

      if (!values.noOfRooms) {
        navigate("/booking/guide");
      } else {
        navigate("/booking/availablehotels");
        dispatch(fetchHotelsById());
      }

      localStorage.setItem("amount", values?.noOfRooms);
      //localStorage.setItem("type", values?.roomCategory);
      localStorage.setItem("noOfMembers", values?.noOfMembers);

      console.log(state[0].startDate.getUTCDate());
      localStorage.setItem("startDate", (state[0].startDate.getUTCDate()).toString());
      console.log(state[0].startDate.getUTCMonth() + 1);
      localStorage.setItem("startMonth", (state[0].startDate.getUTCMonth() + 1).toString());
      console.log(state[0].startDate.getUTCFullYear());
      localStorage.setItem("startYear", (state[0].startDate.getUTCFullYear()).toString());

      console.log(state[0].endDate.getUTCDate());
      localStorage.setItem("endDate", (state[0].endDate.getUTCDate()).toString());
      console.log(state[0].endDate.getUTCMonth() + 1);
      localStorage.setItem("endMonth", (state[0].endDate.getUTCMonth() + 1).toString());
      console.log(state[0].endDate.getUTCFullYear());
      localStorage.setItem("endYear", (state[0].endDate.getUTCFullYear()).toString());
    }, validateOnChange: (values) => {
      if (values.noOfRooms) {
        setShowCategoryList(true);
      }
    }
  });

  const handleCategorySelect = (val) => {
    localStorage.setItem("type", val.toString());
  };

  return (
    <section className="relative h-screen w-full snap-center">
      <video
        className="h-full w-full object-cover"
        src={beachVideo2}
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <div className="absolute top-0 flex h-full w-full flex-col justify-center text-center text-white">
        <div className="headerSearch">
          <div className="headerSearchItem">
            {<DateRangePicker
              className="text-black"
              onChange={item => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn bg-blue-500 text-white w-5/12 rounded-lg p-2 px-4 mt-4"
                    onClick={handleSearch}>Continue Booking <i className="bi bi-arrow-right ml-2"></i>
            </button>
          </div>

        </div>
        <div>
          {myModal && (
            <div className="shadow-lg z-50">
              <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
                <div className="rounded w-50">
                  {!showCategoryList && (
                    <div id="alert-3" className="flex p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-blue-800" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd" />
                      </svg>
                      <div className="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
                        If you don't Want to Book A hotel Give Press Continue Booking Button
                      </div>
                    </div>)}
                  <div>
                    <div className="overflow-hidden shadow sm:rounded-md" id="roomFormContent">
                      <div className="bg-white px-4 p-1">
                        <p className="my-1">Book a Room</p>
                        <form onSubmit={formik.handleSubmit}>
                          <h1 className="my-2 mb-3 text-black text-xl font-bold">Fill Details You Want</h1>
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                How many rooms
                              </label>
                              <div className="col-span-6 sm:col-span-3">
                                <input
                                  type="number"
                                  name="noOfRooms"
                                  min={0}
                                  value={formik.values.noOfRooms}
                                  onChange={formik.handleChange}
                                  className="block w-full border rounded-md p-1 border-black shadow-sm focus:border-black focus:ring-black sm:text-sm text-black"
                                />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                How many Members
                              </label>
                              <input
                                type="number"
                                name="noOfMembers"
                                value={formik.values.noOfMembers}
                                onChange={formik.handleChange}
                                className="block w-full border ring-black rounded-md p-1 border-black shadow-sm focus:border-black focus:ring-black sm:text-sm text-black"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                            </div>
                          </div>
                          {showCategoryList && (<div className="hotelroomdetailtable">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                  className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th scope="col" className="px-6 py-3">
                                    Room Category discription
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    Category Type
                                  </th>

                                  <th scope="col" className="px-6 py-3">
                                    Select
                                  </th>
                                </tr>
                                </thead>
                                <tbody>
                                {category.map((category) => (
                                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-black"
                                      key={category.categoryType}>
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-black">
                                      {category.description}
                                    </th>
                                    <td className="px-6 py-4">
                                      {category.categoryType
                                      }
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                      <button value={category.categoryType} type="button"
                                              className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                                              onClick={() => handleCategorySelect(category.categoryType)}>Select
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                                </tbody>
                              </table>
                            </div>
                          </div>)}
                          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6" id="bookButton">
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-20 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              CONTINUE BOOKING
                            </button>
                          </div>
                        </form>

                        <button type="button"
                                onClick={() => setMyModal(!myModal)}
                                className="ml-auto mx-1.5 my-4 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300"
                                data-dismiss-target="#alert-3" aria-label="Close">
                          <span className="sr-only">Close</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroChecking;
