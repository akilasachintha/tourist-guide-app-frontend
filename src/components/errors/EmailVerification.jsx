import React from "react";
import { useFormik } from "formik";
import touristGuideAppApi from "../../apis/touristGuideAppAPI";
import { fetchAppUser } from "../../redux/store/appUserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EmailVerification = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = localStorage.getItem("email");


  const formik = useFormik({
    initialValues: {
      email: "",
      code: ""
    },
    onSubmit: (values) => {
      touristGuideAppApi
        .post("/user/tourist/verify", {
          email: email,
          code: values.code.toString()
        })
        .then((res) => {
          console.log(values.code);
          console.log(res.data);
          console.log(email);
          if (res.data.toString() === "successfully verified") {
            navigate("/auth/login");
            localStorage.removeItem("email");
          } else {
            toast.error("Error in the Code");
          }
          dispatch(fetchAppUser());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  return (
    <>
      <form className="flex items-center justify-center min-h-screen p-5 bg-blue-100 min-w-screen"
            onSubmit={formik.handleSubmit}>
        <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
          <h3 className="text-2xl">Thanks for signing up for Travel Mate!</h3>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
          </div>
          <p>We're happy you're here. Let's get your email address verified:</p>
          <div className="mt-4">
            <input type="text" id="code" name="code" className="px-2 py-2 text-black bg-gray-300 rounded"
                   onChange={formik.handleChange}
                   value={formik.values.code} />
            <button type="submit" className="px-2 mx-2 py-2 text-black bg-green-300 rounded">
              Confirm Code
            </button>
            <p className="mt-4 text-sm">
              If you’re having trouble clicking the "Verify Email Address" button,
              copy and paste the URL below into your web browser:
            </p>
          </div>
        </div>
      </form>

    </>
  );
};

export default EmailVerification;
