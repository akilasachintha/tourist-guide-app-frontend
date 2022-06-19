import React, { useState } from "react";
import { useFormik } from "formik";
import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import Swal from "sweetalert2";
import { fetchVehicles } from "../../../redux/store/vehiclesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { v4 } from "uuid";


const EditVehiclesModal = ({ showModal, setShowModal, vehicle }) => {
  const [image, setImage] = useState();
  const [url, setUrl] = useState(vehicle.userPhotoUrl);
  const navigate = useNavigate();
  const [progressVal, setProgressVal] = useState(0);
  const dispatch = useDispatch();
  const storageRef = ref(storage, `updatedVehicleImages/${"img" + v4()}`);

  const handleChange = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);
  };

  const handleUpload = (e) => {
    if (image == null) {
      return;
    }

    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log("Upload is " + progress + "% done");
        setProgressVal(progress);

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
        });
      }
    );

    // uploadBytes(uploadTask, image)
    //   .then((snapshot) => {
    //     console.log(progress);
    //     getDownloadURL(snapshot.ref)
    //       .then((url) => {
    //
    //         console.log(url);
    //         setUrl(url);
    //         toast.success("Upload Successfully");
    //       }).catch((err) => {
    //       console.log(err);
    //       toast.error("Upload Error");
    //     });
    //   });
  };

  const formik = useFormik({
    initialValues: {
      vehicleNo: vehicle?.vehicleNo,
      vehicleType: vehicle?.vehicleType,
      vehicleModal: vehicle?.vehicleModal,
      vehicleName: vehicle?.vehicleName,
      seats: vehicle?.seats,
      priceForKm: vehicle?.priceForKm,
      vehiclePhotoUrl: vehicle?.vehiclePhotoUrl,
      vehicleCondition: vehicle?.vehicleCondition,
      userId: vehicle?.userId
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

                      <div className="grid grid-cols-6">
                        <div className="col-span-4 sm:col-span-3">
                          <div className="relative">
                            <img className="w-16 h-16 rounded"
                                 src={url ? url : vehicle.vehiclePhotoUrl}
                                 alt="" />
                            <span
                              className="absolute bottom-0 left-6 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full">{progressVal}</span>
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
                                   aria-label="Upload"
                            />
                            <button
                              onClick={handleUpload}
                              type="button"
                              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Upload
                            </button>
                          </label>
                        </div>
                      </div>

                      {(progressVal > 0 && progressVal < 100.00) ? (
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2.5 rounded-full"
                               style={{ width: progressVal?.toString() + "%" }} />
                        </div>
                      ) : null}
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
