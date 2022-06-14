import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehiclesSlice";
import locationsReducer from "./locationsSlice";
import appUserReducer from "./appUserSlice";
import authSlice from "./authSlice";
import vehiclesByIdSlice from "./vehiclesByIdSlice";
import bookingsSlice from "./bookingsSlice";
import hotelslice from "./hotelslice";
import guidesSlice from "./guidesSlice";
import roomCategorySlice from "./roomCategorySlice";

export default configureStore({
  reducer: {
    locations: locationsReducer,
    vehicles: vehiclesReducer,
    appUser: appUserReducer,
    auth: authSlice,
    vehiclesById: vehiclesByIdSlice,
    hotels:hotelslice,
    bookings: bookingsSlice,
    guides: guidesSlice,
    category:roomCategorySlice
  },
});
