import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { fetchLocations } from "./redux/store/locationsSlice";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { fetchVehicles } from "./redux/store/vehiclesSlice";
import { fetchHotels } from "./redux/store/hotelslice";
import { fetchAppUser } from "./redux/store/appUserSlice";
import { fetchGuides } from "./redux/store/guidesSlice";
import { fetchCategory } from "./redux/store/roomCategorySlice";
import { fetchAvailableHotels } from "./redux/store/avilableHotelSlice";
import { fetchAdminApprovalDrivers, fetchAdminApprovalVehicles } from "./redux/store/adminApprovalSlice";
import { fetchHotelsById } from "./redux/store/hotelsByIdSlice";
import { fetchAvailableGuides } from "./redux/store/availableGuideSlice";
import { fetchPayment } from "./redux/store/paymentSlice";
import { fetchVehiclesByDriver } from "./redux/store/vehicleByDriverSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
let user = JSON.parse(localStorage.getItem('user'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

store.dispatch(fetchLocations());
store.dispatch(fetchVehicles());
// store.dispatch(fetchBookings());
store.dispatch(fetchHotels());
store.dispatch(fetchAppUser());
store.dispatch(fetchGuides());
store.dispatch(fetchCategory());
store.dispatch(fetchAdminApprovalDrivers())
store.dispatch(fetchAdminApprovalVehicles())
store.dispatch(fetchAvailableHotels());
store.dispatch(fetchHotelsById());
store.dispatch(fetchAvailableGuides());
store.dispatch(fetchAdminApprovalDrivers());
store.dispatch(fetchPayment());
store.dispatch(fetchVehiclesByDriver());


