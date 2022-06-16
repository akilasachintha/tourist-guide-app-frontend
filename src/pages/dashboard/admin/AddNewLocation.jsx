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

const districts = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Moneragala",
  "Ratnapura",
  "Kegalle",
];

export default function AddNewLocation() {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    images.map((image) => {
      const uploadTask = ref(storage, `locationImages/${"img" + v4()}`);
      uploadBytes(uploadTask, image)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setUrls((prev) => [...prev, url]);
          });
          toast.success("Successfully Uploaded !");
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });
      return null;
    });
  };

  const formik = useFormik({
    initialValues: {
      locationName: "",
      district: "",
      town: "",
      category: "",
      description: "",
      locationImages: [],
    },
    onSubmit: (values) => {
      const obj = urls.map((url) => ({ url }));
      console.log(obj);

      touristGuideAppApi
        .post("/locations", {
          locationName: values.locationName,
          district: values.district,
          town: values.town,
          category: values.category,
          description: values.description,
          locationImages: obj,
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire(
            "Successfully Added!",
            "Your file has been deleted.",
            "success"
          );
          navigate("/dashboard/admin");
          dispatch(fetchLocations());
        })
        .catch((err) => {
          console.log(err);
          toast.error("Server Error");
        });
    },
  });

  return (
    <>
      <div className="overflow-auto">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add Location
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="location-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location Name
                      </label>
                      <input
                        type="text"
                        name="locationName"
                        className="mt-1 box-border block w-full rounded-md border border-gray-300 p-1 focus:border-black focus:ring-black sm:text-sm"
                        onChange={formik.handleChange}
                        value={formik.values.locationName}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <select
                        name="district"
                        className="block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.district}
                        onChange={formik.handleChange}>
                        <option>Choose ...</option>
                        {districts.map((district) => (
                          <option value={district}>{district}</option>
                        ))}
                      </select>
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
                        Category
                      </label>
                      <input
                        name="category"
                        type="text"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="description"
                        rows={3}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="This location is attractive"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for location. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photos of Location
                    </label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        {!urls && (
                          <svg
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
                          </svg>
                        )}
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="inputGroupFile04"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            {urls && <span>Upload a file</span>}
                            <input
                              id="inputGroupFile04"
                              type="file"
                              multiple
                              aria-describedby="inputGroupFileAddon04"
                              className="sr-only"
                              onChange={handleChange}
                              aria-label="Upload"
                              onClick={handleUpload}
                            />
                            <div>
                              {urls.map((url, i) => (
                                <img
                                  key={i}
                                  style={{
                                    width: "100px",
                                    height: "100px",
                                    display: "inline",
                                  }}
                                  src={url || "http://via.placeholder.com/300"}
                                  alt={url}
                                />
                              ))}
                            </div>
                          </label>
                          {urls.length === 0 && (
                            <p className="pl-1">or drag and drop</p>
                          )}
                        </div>
                        {urls.length === 0 && (
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
