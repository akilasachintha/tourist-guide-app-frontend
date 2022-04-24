import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { v4 } from "uuid";

import touristGuideAppApi from "../../../apis/touristGuideAppApi";
import { storage } from "../../../config/firebase";

import "../../../styles/AddNewLocation.css";

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

const categories = ["Beach", "Ancient", "Adventure", "Park", "Safari"];



const AddNewLocation = () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();

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
        .catch((err) => {
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
        })
        .catch((err) => {
          console.log(err);
          toast.error("Server Error");
        });
    },
  });

  return (
    <div className="container-fluid p-5 col-6">
      <h1 className="text-center mb-3">Add Location</h1>
      <form onSubmit={formik.handleSubmit} className="row g-3 needs-validation">
        <div className="col-md-6">
          <label htmlFor="locationName" className="form-label">
            Location Name
          </label>
          <input
            id="locationName"
            name="locationName"
            type="text"
            required
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.locationName}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="district" className="form-label">
            District
          </label>
          <select
            id="district"
            className="form-select"
            required
            value={formik.values.district}
            onChange={formik.handleChange}
          >
            <option>Choose...</option>
            {districts.map((district, index) => (
              <option value={district} key={index}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="town" className="form-label">
            Town
          </label>
          <input
            id="town"
            name="town"
            type="text"
            required
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.town}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="categoty" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            required
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            <option>Choose...</option>
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control custom-height"
            placeholder="Leave a comment here"
            id="description"
            required
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>
        <div className="input-group">
          <br />
          <input
            type="file"
            multiple
            className="form-control"
            id="inputGroupFile04"
            onChange={handleChange}
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
          <button
            className="btn btn-dark"
            type="button"
            id="inputGroupFileAddon04"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>

        <button type="submit" className="btn btn-dark col-12">
          Add New Location
        </button>
      </form>
      <div>
        {urls.map((url, i) => (
          <img
            key={i}
            style={{ width: "300px", display: "inline" }}
            src={url || "http://via.placeholder.com/300"}
            alt={url}
          />
        ))}
      </div>
    </div>
  );
};

export default AddNewLocation;
