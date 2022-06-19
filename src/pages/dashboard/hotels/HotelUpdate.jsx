import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "../../../config/firebase";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import { fetchVehicles } from "../../../redux/store/vehiclesSlice";
import { fetchAppUser } from "../../../redux/store/appUserSlice";
import { fetchHotels } from "../../../redux/store/hotelslice";
import { fetchHotelsById } from "../../../redux/store/hotelsByIdSlice";

export default function HotelUpdate() {
  const [image, setImage] = useState(null);
  const { appUser } = useSelector((state) => state.appUser);
  const { hotelsById } = useSelector((state) => state.hotelsById);
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleChange = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);
  };

  const myHotel = hotelsById.filter(({ hotelId }) => {
    return hotelId.toString() === id;
  });

  const handleUpload = () => {
    if (image == null) {
      return;
    }

    const uploadTask = ref(storage, `hotelUpdatedImages/${"img" + v4()}`);
    uploadBytes(uploadTask, image)
      .then((snapshot) => {

        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          setUrls(urls);
          toast.success("Upload Successfully");
        }).catch((err) => {
          console.log(err);
          toast.error("Upload Error");
        });
      });
  };

  useEffect(() => {
    dispatch(fetchHotelsById());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: myHotel[0].name,
      description: myHotel[0].description,
      hotelImages: []

    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const obj = urls.map((url) => ({ url }));
      console.log(obj);

      let user = JSON.parse(localStorage.getItem("user"));
      touristGuideAppApi
        .put(`/hotel/update/${myHotel[0].hotelId}`, {
          name: values.name
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire(
            "Update Success!",
            "Your Hotel is Updated",
            "success"
          );
          navigate("/dashboard/hotels");
          dispatch(fetchHotels());
        })
        .catch((err) => {
          console.log(err);
          toast.error("Server Error");
        });
    }
  });

  return (
    <>
      <div className="overflow-auto">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Edit Hotel Details
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
                        htmlFor="name"
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
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        //disabled={true}
                        name="description"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-6">
                    <div className="col-span-4 sm:col-span-3">
                      <div className="relative">
                        <img className="w-16 h-16 rounded" src={urls ? urls : hotelsById.hotelImages[0].urls}
                             alt="" />
                        <span
                          className="absolute bottom-0 left-6 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                    </div>
                    <div className="col-span-8 sm:col-span-3 my-auto">
                      <label className="block col-span-8 sm:col-span-3">
                        <span className="sr-only">Choose File</span>
                        <input type="file"
                               id="inputGroupFile07"
                               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                               onChange={handleChange}
                               aria-describedby="inputGroupFileAddon07"
                               onClick={handleUpload}
                               aria-label="Upload"
                        />
                      </label>
                    </div>
                  </div>


                  <div className="grid grid-cols-6 gap-6">
                    {/*<div className="col-span-6 sm:col-span-3">*/}
                    {/*  <label*/}
                    {/*    htmlFor="dob"*/}
                    {/*    className="block text-sm font-medium text-gray-700"*/}
                    {/*  >*/}
                    {/*    Date of Birth*/}
                    {/*  </label>*/}
                    {/*  <input*/}
                    {/*    type="date"*/}
                    {/*    name="dob"*/}
                    {/*    className="mt-1 box-border block w-full rounded-md border border-gray-300 p-1 focus:border-black focus:ring-black sm:text-sm"*/}
                    {/*    onChange={formik.handleChange}*/}
                    {/*    value={formik.values.dob}*/}
                    {/*  />*/}
                    {/*</div>*/}

                    {/*<div className="col-span-6 sm:col-span-3">*/}
                    {/*  <label*/}
                    {/*    htmlFor="phoneNo"*/}
                    {/*    className="block text-sm font-medium text-gray-700"*/}
                    {/*  >*/}
                    {/*    Phone No*/}
                    {/*  </label>*/}
                    {/*  <input*/}
                    {/*    name="phoneNo"*/}
                    {/*    type="text"*/}
                    {/*    autoComplete="family-name"*/}
                    {/*    className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"*/}
                    {/*    value={formik.values.phoneNo}*/}
                    {/*    onChange={formik.handleChange}*/}
                    {/*  />*/}
                    {/*</div>*/}
                  </div>

                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update Profile
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
