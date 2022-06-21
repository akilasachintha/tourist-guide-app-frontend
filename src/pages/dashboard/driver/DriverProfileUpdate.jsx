import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import { fetchVehicles } from "../../../redux/store/vehiclesSlice";
import { fetchAppUser } from "../../../redux/store/appUserSlice";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
};

export default function DriverProfileUpdate() {
  const [image, setImage] = useState(null);
  const { appUser } = useSelector((state) => state.appUser);
  const [url, setUrl] = useState(appUser.userPhotoUrl);
  const [progressVal, setProgressVal] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storageRef = ref(storage, `updatedDriverProfile/${"img" + v4()}`);

  const handleChange = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);
  };


  const handleUpload = () => {
    if (image == null) {
      return;
    }

    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
  };

  useEffect(() => {
    dispatch(fetchAppUser());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: appUser.name,
      email: appUser.email,
      userPhotoUrl: appUser.userPhotoUrl,
      phoneNo: appUser.phoneNo,
      licenceNo: ""
    },
    enableReinitialize: true,
    onSubmit: (values) => {

      let user = JSON.parse(localStorage.getItem("user"));

      touristGuideAppApi
        .put(`/user/driver/${user.userId}`, {
          name: values.name,
          userPhotoUrl: url,
          phoneNo: values.phoneNo,
          licenceNo: values.licenceNo,
          password: values.password
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire(
            "Successfully Updated!",
            "Your profile is Successfully Updated.",
            "success"
          );
          navigate("/dashboard/drivers");
          dispatch(fetchVehicles());
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
                Edit Driver Profile
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
                        Driver Name
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
                        Email
                      </label>
                      <input
                        type="email"
                        disabled={true}
                        name="vehicleType"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-6">
                    <div className="col-span-4 sm:col-span-3">
                      <div className="relative">
                        <img className="w-16 h-16 rounded" src={url ? url : appUser.userPhotoUrl}
                             alt="" />
                        <span
                          className="absolute bottom-0 left-6 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                    </div>
                    <div className="col-span-8 sm:col-span-3 my-auto">
                      <label className="block col-span-8 sm:col-span-3">
                        <span className="sr-only">Choose File</span>
                        <input type="file"
                               id="inputGroupFile06"
                               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                               onChange={handleChange}
                               aria-describedby="inputGroupFileAddon06"
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

                  {
                    progressVal > 0 && progressVal < 100 && (<Box sx={{ width: "100%" }}>
                      <LinearProgressWithLabel value={progressVal} />
                    </Box>)
                  }

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="dob"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dob"
                        className="mt-1 box-border block w-full rounded-md border border-gray-300 p-1 focus:border-black focus:ring-black sm:text-sm"
                        onChange={formik.handleChange}
                        value={formik.values.dob}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phoneNo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone No
                      </label>
                      <input
                        name="phoneNo"
                        type="text"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.phoneNo}
                        onChange={formik.handleChange}
                      />
                    </div>
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
