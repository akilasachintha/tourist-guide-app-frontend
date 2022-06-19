import React from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
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
      roomAvailability: "",
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
          roomAvailability: values.roomAvailability,
          price: values.price
        })
        .then((res) => {
          alert("work");
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
          alert("error");
          console.log(err);
          toast.error("Server Error");
        });
    }
  });
  return (
    <div>
      <div>
        <p>Add hotel Rooms</p>
        <div className="overflow-hidden shadow sm:rounded-md">
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
                      onChange={formik.handleChange}
                      value={formik.values.roomNo}

                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Room Avilability
                  </label>
                  <select
                    id="roomAvailability"
                    onChange={formik.handleChange}
                    value={formik.values.roomAvailability}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Chose...</option>
                    {freeRoom.map((free) => (
                      <option value={free}
                      >{free}</option>
                    ))}
                  </select>
                </div>


                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Room Condition
                  </label>
                  <input
                    type="text"
                    name="roomCondition"
                    onChange={formik.handleChange}
                    value={formik.values.roomCondition}

                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
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
                    onChange={formik.handleChange}
                    value={formik.values.price}

                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
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
                    Hotel
                  </label>
                  <select
                    id="hotelId"
                    value={formik.values.hotelId}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Chose...</option>
                    {hotels.map((hotel) => (
                      <option value={hotel.hotelId}
                      >{hotel.name}</option>
                    ))}
                  </select>
                </div>


              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">

                <button
                  type="reset"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add more Rooms
                </button>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">

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