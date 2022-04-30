import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import touristGuideAppApi from "../../../apis/touristGuideAppApi";
import { setLogin } from "../../../redux/slices/userAuthSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      touristGuideAppApi
        .post("/auth/login", {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          console.log(res.data);
          dispatch(setLogin(res.data));
          navigate("/dashboard/" + res.data.userType);

          Swal.fire(
            "Successfully Login!",
            "Your are successfully logged into system.",
            "success"
          );
        })
        .catch((err) => {
          console.log(err);
          toast.error("Server Error");
        });
    },
  });

  return (
    <div className="container-fluid p-5 col-4">
      <h1 className="text-center mb-3">Login</h1>
      <form onSubmit={formik.handleSubmit} className="row g-3 needs-validation">
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            required
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="text"
            required
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit" className="btn btn-dark col-12">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
