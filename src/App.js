import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NotFound from "./components/error/Error";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import AddNewLocation from "./pages/dashboard/adminDashboard/AddNewLocation";
import AdminDashboard from "./pages/dashboard/adminDashboard/AdminDashboard";
import HomePage from "./pages/home/HomePage";
import LocationDetails from "./pages/location/LocationDetails";
import LocationList from "./pages/location/LocationList";
import VehicleList from "./pages/vehicles/VehicleList";

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="*" element={<NotFound error="404" errorDescription="Page Not Found"/>}></Route>
        <Route
          exact
          path="/dashboard/admin"
          element={<AdminDashboard />}
        ></Route>
        <Route exact path="/locations" element={<LocationList />}></Route>
        <Route
          exact
          path="/locations/:locationId"
          element={<LocationDetails />}
        ></Route>
        <Route path="/locations/add" element={<AddNewLocation />}></Route>
        <Route path="/vehicles/" element={<VehicleList />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
