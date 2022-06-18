import React, { useState } from "react";
import { useFormik } from "formik";
import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import Swal from "sweetalert2";
import { fetchVehicles } from "../../../redux/store/vehiclesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { v4 } from "uuid";


const EditVehiclesModal = ({ showModal, setShowModal, vehicle }) => {
  const [image, setImage] = useState(vehicle.userPhotoUrl);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);
  };

  console.log(vehicle);

  const handleUpload = () => {
    if (image == null) {
      return;
    }
    const uploadTask = ref(storage, `updatedVehicleImages/${"img" + v4()}`);
    uploadBytes(uploadTask, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          setUrl(url);
          toast.success("Upload Successfully");
        }).catch((err) => {
          console.log(err);
          toast.error("Upload Error");
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      vehicleNo: vehicle.vehicleNo,
      vehicleType: vehicle.vehicleType,
      vehicleModal: vehicle.vehicleModal,
      vehicleName: vehicle.vehicleName,
      seats: vehicle.seats,
      priceForKm: vehicle.priceForKm,
      vehiclePhotoUrl: vehicle.vehiclePhotoUrl,
      vehicleCondition: vehicle.vehicleCondition,
      userId: vehicle.userId
    },
    enableReinitialize: true,
    onSubmit: (values, e) => {
      let user = JSON.parse(localStorage.getItem("user"));

      touristGuideAppApi
        .put(`vehicles/update/${vehicle.vehicleId}`, {
          vehicleNo: values.vehicleNo,
          vehicleModal: values.vehicleModal,
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
            "Please Wait for Approval of Admin!",
            "Your vehicle is reviewed by admin of the System. Please be patient.",
            "info"
          );
          navigate("/dashboard/drivers");
          dispatch(fetchVehicles());
        })
        .catch((err) => {
          console.log(err);
          toast.error("Server Error");
        });
      e.target.reset();
    }
  });

  return (
    <div>
      {showModal && vehicle?.length !== 0 && (
        <div className="shadow-lg">
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="p-2 rounded w-50">
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
                            name="vehicleName"
                            disabled={true}
                            className="mt-1 box-border block w-full rounded-md border border-gray-300 p-1 focus:border-black focus:ring-black sm:text-sm"
                            onChange={formik.handleChange}
                            value={formik.values.vehicleNo}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="vehicleModal"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Vehicle Modal
                          </label>
                          <input
                            type="text"
                            name="vehicleModal"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            value={formik.values.vehicleModal}
                            onChange={formik.handleChange}
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
                      <div
                        onClick={() => setShowModal(!showModal)}
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Cancel
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default EditVehiclesModal;
