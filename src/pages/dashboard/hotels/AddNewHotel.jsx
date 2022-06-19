import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "../../../config/firebase";
import { useFormik } from "formik";

import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import { fetchLocations } from "../../../redux/store/locationsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const districts = ["Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya", "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar", "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee", "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla", "Moneragala", "Ratnapura", "Kegalle"];

export default function AddNewHotel() {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let user = JSON.parse(localStorage.getItem("user"));
  const { locations } = useSelector((state) => state.locations);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    images.map((image) => {
      const uploadTask = ref(storage, `hotel/${"img" + v4()}`);
      uploadBytes(uploadTask, image)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setUrls((prev) => [...prev, url]);
          });
          toast.success("Successfully Uploaded !");
          console.log(urls);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "<a href=\"\">Why do I have this issue?</a>"
          });
        });
      return null;
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      no: 0,
      town: "",
      district: "",
      description: "",
      hotelImages: [],
      hotelOwnerId: 0,
      locationId: 0
    }, onSubmit: (values) => {
      const obj = urls.map((url) => ({ url }));
      console.log(obj);

      touristGuideAppApi
        .post("/hotel/add", {
          name: values.name,
          no: values.no,
          town: values.town,
          district: values.district,
          description: values.description,
          locationId: values.locationId,
          hotelOwnerId: user.userId,
          hotelImages : obj

        })
        .then((res) => {
          alert("work");
          console.log(res.data);
          Swal.fire("Successfully Added!", "Your Hotel Is Uploaded.", "success");
          navigate("/dashboard/hotels");
          dispatch(fetchLocations());
        })
        .catch((err) => {
          alert("error");
          console.log(err);
          toast.error("Server Error");
        });
    }
  });

  return (<>
    <div className="overflow-auto">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add Hotel
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what
              you share.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="location-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Hotel Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="mt-1 box-border block w-full rounded-md border border-gray-300 p-1 focus:border-black focus:ring-black sm:text-sm"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="district"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                      <select
                        id="locationId"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formik.values.locationId}
                        onChange={formik.handleChange}>
                        <option>Choose ...</option>
                        {locations.map((location) => (<option value={location.locationId}
                        >{location.locationName}</option>))}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="district"
                        className="block text-sm font-medium text-gray-700"
                      >
                        District
                      </label>
                      <select
                        id="district"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formik.values.district}
                        onChange={formik.handleChange}>
                        <option>Choose ...</option>
                        {locations.map((i) => (<option value={i.district}
                        >{i.district}</option>))}
                      </select>

                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="streetno"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street No
                      </label>
                      <input
                        type="text"
                        name="no"

                        className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.no}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="town"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Town
                      </label>
                      <input
                        type="text"
                        name="town"
                        className="mt-1 box-border block w-full rounded-md border border-gray-300 p-1 focus:border-black focus:ring-black sm:text-sm"
                        onChange={formik.handleChange}
                        value={formik.values.town}
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description

                      </label>
                      <input
                        name="description"
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                      />
                    </div>


                  </div>


                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photos of Hotel
                    </label>
                    <div
                      className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        {!urls && (<svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>)}
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="inputGroupFile05"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            {urls && <span>Upload a file</span>}
                            <input
                              id="inputGroupFile05"
                              type="file"
                              multiple
                              aria-describedby="inputGroupFileAddon05"
                              className="sr-only"
                              onChange={handleChange}
                              aria-label="Upload"
                              onClick={handleUpload}
                            />
                            <div>
                              {urls.map((url, i) => (<img
                                key={i}
                                style={{
                                  width: "100px", height: "100px", display: "inline"
                                }}
                                src={url || "http://via.placeholder.com/300"}
                                alt={url}
                              />))}
                            </div>
                          </label>
                          {urls.length === 0 && (<p className="pl-1">or drag and drop</p>)}
                        </div>
                        {urls.length === 0 && (<p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <div
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <Link to="./hotellist/roomdetails">
                      <p className="text-sm font-medium leading-none text-white">
                        Next
                      </p>
                    </Link>

                  </div>
                  <div className="savehotel">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>


  </>);
}