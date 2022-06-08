import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { fetchLocations } from "./redux/store/locationsSlice";

import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { fetchVehicles } from "./redux/store/vehiclesSlice";
import { fetchBookings } from "./redux/store/bookingsSlice";
import { fetchAppUser } from "./redux/store/appUserSlice";

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
store.dispatch(fetchAppUser());


