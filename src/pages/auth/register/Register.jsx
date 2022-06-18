import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { fetchAppUser } from "../../../redux/store/appUserSlice";

const Register = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [selectedLocationId, setSelectedLocationId] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const { locations } = useSelector((state) => state.locations);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);
  };

  useEffect(() => {
    return () => {
      dispatch(fetchAppUser());
    };
  }, [dispatch]);


  const handleUpload = (e) => {
    e.preventDefault();

    if (image == null) {
      return;
    }
    const uploadTask = ref(storage, `profileImages/${"img" + v4()}`);

    uploadBytes(uploadTask, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          setUrl(url);
          toast.success("Successfully Uploaded");
        }).catch((err) => {
          console.log(err);
          toast.error("Uploading Error");
        });
      });
  };

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      dob: "",
      userPhotoUrl: "",
      licenceNo: "",
      availability: "",
      phoneNo: "",
      nic: "",
      country: "",
      passportNo: ""
    },
    onSubmit: (values) => {
      if (title === "driver") {
        touristGuideAppApi
          .post("/user/drivers", {
            email: values.email,
            password: values.password,
            name: values.name,
            dob: startDate,
            userPhotoUrl: url,
            licenceNo: values.licenceNo,
            phoneNo: values.phoneNo,
            availability: values.availability,
            locationId: selectedLocationId
          })
          .then((res) => {
            console.log(res.data);
            Swal.fire(
              "Successfully Added!",
              "Your file has been deleted.",
              "success"
            );
            navigate("/auth/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else if(title === "tourist"){
        touristGuideAppApi
          .post("/user/tourist/add", {
            email: values.email,
            password: values.password,
            name: values.name,
            dob: startDate,
            userPhotoUrl: url,
            phoneNo: values.phoneNo,
            passport: values.password,
            country: values.country
          })
          .then((res) => {
            console.log(res.data);
            Swal.fire(
              "Successfully Added!",
              "Your file has been deleted.",
              "success"
            );
            navigate("/auth/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else if(title === "hotelOwner"){
        touristGuideAppApi
          .post("/user/hotelOwner/add", {
            email: values.email,
            password: values.password,
            name: values.name,
            dob: startDate,
            userPhotoUrl: url,
            phoneNo: values.phoneNo
          })
          .then((res) => {
            console.log(res.data);
            Swal.fire(
              "Successfully Added!",
              "Your file has been deleted.",
              "success"
            );
            navigate("/auth/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else if(title === "guide"){
        touristGuideAppApi
          .post("/user/guide/add", {
            email: values.email,
            password: values.password,
            name: values.name,
            dob: startDate,
            userPhotoUrl: values.photoUrl,
            phoneNo: values.phoneNo,
            nic: values.nic
          })
          .then((res) => {
            console.log(res.data);
            Swal.fire(
              "Successfully Added!",
              "Your file has been deleted.",
              "success"
            );
            navigate("/auth/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  });

  return (

    <div className="container mx-auto  bg-white">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <form className="flex flex-col mt-4" onSubmit={formik.handleSubmit}>
          <input type="text" name="name"
                 className="px-4 py-3 w-full rounded-md border border-black focus:border-gray-500 focus:bg-white focus:ring-1 text-sm"
                 placeholder="Full Name"
                 onChange={formik.handleChange}
                 value={formik.values.name} />
          <input type="email" name="email"
                 className="px-4 mt-4 py-3 w-full rounded-md border border-black focus:border-gray-500 focus:bg-white focus:ring-1 text-sm"
                 placeholder="Email address"
                 onChange={formik.handleChange}
                 value={formik.values.email} />
          <input type="password" name="password"
                 className="px-4 mt-4 py-3 w-full rounded-md border border-black focus:border-gray-500 focus:bg-white focus:ring-1 text-sm"
                 placeholder="Password"
                 onChange={formik.handleChange}
                 value={formik.values.password} />
          <div className="flex justify-center">
            <div className="my-3 w-100">
              <label htmlFor="formFile" className="form-label inline-block mx-2 text-gray-700">Upload Your Profile
                Photo</label>
              <input
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file" id="inputGroupFile02" onChange={handleChange}
                aria-describedby="inputGroupFileAddon02"
                aria-label="Upload" />
              <button onClick={handleUpload}>Upload</button>
            </div>
          </div>

          <input type="password" name="repeat-password"
                 className="px-4 mt-4 py-3 w-full rounded-md border border-black focus:border-gray-500 focus:bg-white focus:ring-1 text-sm"
                 placeholder="Repeat Password"
                 onChange={formik.handleChange}
                 value={formik.values.password} />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                      className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" />

          <div className="relative" placeholder="Select your role">
            <select
              className="mt-4 bg-white block w-full appearance-none rounded border border-black py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-state"
              onClick={handleChangeTitle}
            >
              <option value="tourist">Tourist</option>
              <option value="driver">Driver</option>
              <option value="guide">Guide</option>
              <option value="hotelOwner">Hotel Owner</option>
            </select>
            <div className="text-white-700 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {
            title === "tourist" && (
              <div>
                <input type="text" name="country"
                       className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                       placeholder="Country"
                       onChange={formik.handleChange}
                       value={formik.values.country}
                />
                <input type="text" name="passportNo"
                       className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                       placeholder="Passport No"
                       onChange={formik.handleChange}
                       value={formik.values.passportNo}
                />
              </div>

            )
          }
          {
            title === "driver" && (
              <div>
                <input type="text" name="licenceNo"
                       className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                       placeholder="Driving Licence No"
                       onChange={formik.handleChange}
                       value={formik.values.licenceNo}
                />
                <div className="relative" placeholder="Select Location">
                  <select
                    className="mt-4 bg-white block w-full appearance-none rounded border border-black py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="grid-state"
                    onClick={(e) => setSelectedLocationId(e.target.value)}
                  >
                    {
                      locations.map((location) => (
                        <option value={location.locationId} key={location.locationId}>{location.locationName}</option>
                      ))
                    }

                  </select>
                  <div className="text-white-700 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          }

          {
            title === "guide" && (
              <input type="text" name="nic"
                     className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                     placeholder="NIC"
                     onChange={formik.handleChange}
                     value={formik.values.nic}
              />
            )
          }
          <button type="submit"
                  className="mt-4 px-4 py-3 leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none">
            Register
          </button>
        </form>
        <div className="flex flex-col items-center mt-5">
          <p className="mt-1 text-xs font-light text-gray-500">
            Register already?
            <Link to="/auth/login" className="ml-1 font-medium text-blue-400">Sign in now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
