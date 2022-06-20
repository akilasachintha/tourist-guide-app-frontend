import React, { useState } from "react";
import beachVideo2 from "../../assets/videos/beachVideo2.mp4";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";
import { useFormik } from "formik";
import { useSelector } from "react-redux";


const HeroChecking = () => {
  const [openDate, setOpenDate] = useState(false);
  const [myModal, setMyModal] = useState(false);
  const { category } = useSelector((state) => state.category);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ]);
  const  handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      // newImage["id"] = Math.random();
      // setImages((prevState) => [...prevState, newImage]);
    }
  };

  const navigate = useNavigate();
  const availableHotels = () =>{
    navigate('/availablehotels');
  };


  const handleSearch = () => {
    setMyModal(true);
  };

  const formik = useFormik({
    initialValues: {
      noOfRooms: 0,
      roomCategory: "",
      noOfMembers: ""

    }, onSubmit: (values) => {
      localStorage.setItem("amount", values.noOfRooms);
      localStorage.setItem("type", values.roomCategory);
      localStorage.setItem("noOfMembers", values.noOfMembers);
      const nnn = localStorage.getItem("amount");
      const nn = localStorage.getItem("type");
      const n = localStorage.getItem("noOfMembers");


    }
  });



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
            <button className="headerBtn bg-blue-500 text-white w-5/12 rounded p-2 px-4 mt-4"
                    onClick={handleSearch}>Check Hotels
            </button>
          </div>

        </div>
        <div>
          {myModal && (
            <div className="shadow-lg">
              <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
                <div className="p-2 rounded w-75">
                  <div className="my-5">
                    <div className="overflow-hidden shadow sm:rounded-md" id="roomFormContent">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <p id="topic">Hotel Name</p>
                        <p id="topic">Book a Room</p>
                        <form onSubmit={formik.handleSubmit}>
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
                                  value={formik.values.noOfRooms}
                                  onChange={formik.handleChange}
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                                />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Room Category
                              </label>
                              <select
                                name="roomCategory"
                                value={formik.values.roomCategory}
                                onChange={formik.handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                              >
                                <option>Choose...</option>
                                <option>Chose...</option>
                                {category.map((category) => (
                                  <option value={category.categoryType}
                                  >{category.categoryType}</option>

                                ))}
                              </select>
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6" id="bookButton">
                            <button
                              type="submit"
                              onClick={availableHotels}
                              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-20 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Book
                            </button>
                          </div>
                        </form>
                        <i className="bi bi-x relative top-0 right-0 text-3xl text-black"
                           onClick={() => setMyModal(!myModal)}></i>
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
