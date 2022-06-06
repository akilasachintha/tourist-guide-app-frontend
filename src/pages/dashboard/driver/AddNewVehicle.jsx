import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "../../../config/firebase";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import { fetchVehicles } from "../../../redux/store/vehiclesSlice";

export default function AddNewVehicle() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);
  };

  const handleUpload = () => {
    if (image == null) {
      return;
    }

    const uploadTask = ref(storage, `vehicleImages/${"img" + v4()}`);

    uploadBytes(uploadTask, image)
      .then((snapshot) => {

        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          setUrl(url);
        });
      });
  };


  const formik = useFormik({
    initialValues: {
      vehicleNo: "",
      vehicleType: "",
      vehicleName: "",
      seats: 0,
      priceForKm: 0,
      vehiclePhotoUrl: "",
      vehicleCondition: "",
      userId: 0
    },
    onSubmit: (values) => {

      let user = JSON.parse(localStorage.getItem("user"));

      touristGuideAppApi
        .post(`/vehicles/`, {
          vehicleNo: values.vehicleNo,
          vehicleType: values.vehicleType,
          vehicleName: values.vehicleName,
          seats: values.seats,
          priceForKm: values.priceForKm,
          vehicleCondition: values.vehicleCondition,
          vehiclePhotoUrl: url,
          userId: user.userId
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire(
            "Successfully Added!",
            "Your file has been deleted.",
            "success"
          );
          navigate("/dashboard/drivers");
          dispatch(fetchVehicles());
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
                Add Vehicle
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
                        htmlFor="vehicleName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Vehicle Name
                      </label>
                      <input
                        type="text"
                        name="vehicleName"
                        className="mt-1 box-border block w-full rounded-md border border-gray-300 p-1 focus:border-black focus:ring-black sm:text-sm"
                        onChange={formik.handleChange}
                        value={formik.values.vehicleName}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="vehicleType"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Vehicle Type
                      </label>
                      <input
                        type="text"
                        name="vehicleType"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.vehicleType}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="vehicleNo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Vehicle No
                      </label>
                      <input
                        type="text"
                        name="vehicleNo"
                        className="mt-1 box-border block w-full rounded-md border border-gray-300 p-1 focus:border-black focus:ring-black sm:text-sm"
                        onChange={formik.handleChange}
                        value={formik.values.vehicleNo}
                      />
                    </div>
                  </div>

                  <div>

                    <label className="block">
                      <span className="sr-only">Choose File</span>
                      <input type="file"
                             id="inputGroupFile01"
                             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                             onChange={handleChange}
                             aria-describedby="inputGroupFileAddon01"
                             onClick={handleUpload}
                             aria-label="Upload"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="seats"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Seats
                      </label>
                      <input
                        type="text"
                        name="seats"
                        className="mt-1 box-border block w-full rounded-md border border-gray-300 p-1 focus:border-black focus:ring-black sm:text-sm"
                        onChange={formik.handleChange}
                        value={formik.values.seats}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="priceForKm"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price For Km
                      </label>
                      <input
                        name="priceForKm"
                        type="text"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.priceForKm}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="vehicleCondition"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Vehicle Condition
                    </label>
                    <input
                      name="vehicleCondition"
                      type="text"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={formik.values.vehicleCondition}
                      onChange={formik.handleChange}
                    />
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
