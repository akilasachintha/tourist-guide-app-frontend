import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Typography } from "@mui/material";
import "./AddNewLocationForm.css";
import { Button } from "@mui/material";
import axios from "axios";

const validationSchema = yup.object({
  locationName: yup
    .string("Enter your Location Name")
    .required("Location Name is required"),
  district: yup
    .string("Enter your District")
    .required("District is required"),
  town: yup
    .string("Enter Town")
    .required("Town is required"),
});

const AddNewLocationForm = () => {
  const formik = useFormik({
    
    //Initial Values of form
    initialValues: {
      locationName: "",
      district: "",
      town: "",
      category: "",
      description: "",
    },

    //Schema of Validation
    validationSchema: validationSchema,

    //Handle Submit
    onSubmit: (values) => {
      const value = JSON.stringify(values, null, 2);
      console.log(value);

      const url = "https://tourist-guide-app-backend.herokuapp.com/api/location";

      axios
        .post(url, {
          locationName: values.locationName,
          district: values.district,
          town: values.town,
          category: values.category,
          description: values.description,
        })
        .then((res) => {
          console.log(res); 
        })
        .catch(err => {
          console.log(err);
        });  
    },
  });

  return (
    <div>
      <Typography variant="h3" sx={{
        m: 3,
        textAlign: "center",
      }}> Add a New Location </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          sx={{
            mb: 5,
          }}
          id="locationName"
          name="locationName"
          label="Location Name"
          value={formik.values.locationName}
          onChange={formik.handleChange}
          error={
            formik.touched.locationName && Boolean(formik.errors.locationName)
          }
          helperText={formik.touched.locationName && formik.errors.locationName}
        />

        <TextField
          fullWidth
          sx={{
            mb: 5,
          }}
          id="district"
          name="district"
          label="District"
          type="district"
          value={formik.values.district}
          onChange={formik.handleChange}
          error={formik.touched.district && Boolean(formik.errors.district)}
          helperText={formik.touched.district && formik.errors.district}
        />

        <TextField
          fullWidth
          sx={{
            mb: 5,
          }}
          id="town"
          name="town"
          label="Town"
          type="town"
          value={formik.values.town}
          onChange={formik.handleChange}
          error={formik.touched.town && Boolean(formik.errors.town)}
          helperText={formik.touched.town && formik.errors.town}
        />

        <TextField
          fullWidth
          sx={{
            mb: 5,
          }}
          id="category"
          name="category"
          label="Category"
          type="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
        />

        <TextField
          fullWidth
          sx={{
            mb: 5,
          }}
          id="description"
          name="description"
          label="description"
          type="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.descriptionS}
        />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ backgroundColor: "#242424" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddNewLocationForm;
