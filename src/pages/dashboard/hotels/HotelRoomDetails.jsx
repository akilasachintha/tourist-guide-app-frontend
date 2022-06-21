import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fetchHotels } from "../../../redux/store/hotelslice";


const HotelRoomDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.hotels);
  const { category } = useSelector((state) => state.category);
  const freeRoom = ["yes", "No"];
  const formik = useFormik({
    initialValues: {
      roomNo: 0,
      roomCondition: "",
      price: 0,
      categoryType: "",
      hotelId: 0
    },
    onSubmit: (values) => {
      touristGuideAppApi
        .post("/hotel/addRoom", {
          hotelId: values.hotelId,
          categoryType: values.categoryType,
          roomNo: values.roomNo,
          roomCondition: values.roomCondition,
          price: values.price
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire(
            "Successfully Added!",
            "Your room has been Added.",
            "success"
          );
          navigate("/dashboard/hotels");
          dispatch(fetchHotels());
        })
        .catch((err) => {
          console.log(err);
          toast.error("Please Fill this form Correctly");
        });
    }
  });
  return (
    <div>
      <div>
        <p>Add hotel Rooms</p>
        <div className="overflow-hidden shadow sm:rounded-md mt-4">
          <div className="bg-white px-4 py-5 sm:p-6">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Room No
                  </label>
                  <div className="col-span-6 sm:col-span-3">
                    <input
                      type="number"
                      name="roomNo"
                      required={true}
                      onChange={formik.handleChange}
                      value={formik.values.roomNo}

                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Room Condition
                  </label>
                  <select
                    id="roomCondition"
                    value={formik.values.roomCondition}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Chose...</option>
                    <option value="good"> Good</option>
                    <option value="average"> Average</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    required={true}
                    onChange={formik.handleChange}
                    value={formik.values.price}

                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Room Category
                  </label>
                  <select
                    id="categoryType"
                    value={formik.values.categoryType}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Chose...</option>
                    {category.map((category) => (
                      <option value={category.categoryType}
                      >{category.description}</option>
                    ))}
                  </select>
                </div>


                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Hotel
                  </label>
                  <select
                    id="hotelId"
                    value={formik.values.hotelId}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full rounded-md  p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Chose...</option>
                    {hotels.map((hotel) => (
                      <option value={hotel.hotelId}
                      >{hotel.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default HotelRoomDetails;