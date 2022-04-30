import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";


import UserViewRoute from "./routes/UserViewRoute";
import AuthRoutes from "./routes/AuthRoutes";
import HomePage from "./pages/home/HomePage";
import LocationList from "./pages/location/LocationList";
import VehicleList from "./pages/vehicles/VehicleList";
import LocationDetails from "./pages/location/LocationDetails";
import NotFound from "./components/error/NotFound";
import Login from "./pages/authentication/login/Login";
import Register from "./pages/authentication/registration/Register";
import DriverDashboardHome from "./pages/dashboard/driversDashboard/DriverDashboardHome";
import AddNewLocation from "./pages/dashboard/adminDashboard/AddNewLocation";
import AdminDashboardLocationList from "./pages/dashboard/adminDashboard/AdminDashboardLocationList";
import AdminDashboardHome from "./pages/dashboard/adminDashboard/AdminDashboardHome";
import AdminUserProfile from "./pages/dashboard/adminDashboard/AdminUserProfile";

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
            <Routes>
                <Route path="" element={<UserViewRoute/>}>
                    <Route path="" element={<HomePage/>}/>
                    <Route path="locations" element={<LocationList/>}/>
                    <Route path="locations/:locationId" element={<LocationDetails/>}/>
                    <Route path="vehicles" element={<VehicleList/>}/>
                </Route>
                <Route path="auth" element={<AuthRoutes/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
                <Route path="dashboard/admin" element={<AdminDashboardHome/>}>
                    <Route path="locations" element={<AdminDashboardLocationList/>}/>
                    <Route path="profile" element={<AdminUserProfile/>}/>
                    <Route path="locations/add" element={<AddNewLocation/>}/>
                </Route>
                <Route path="driver" element={<DriverDashboardHome/>}/>
                <Route path="*" element={<NotFound error="404" errorDescription="Page Not Found"/>}/>
            </Routes>
        </Router>
    );
};

export default App;
