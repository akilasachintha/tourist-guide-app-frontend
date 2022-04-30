import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "./slices/locationSlice";
import locationsReducer from "./slices/locationsSlice";
import userAuthReducer from "./slices/userAuthSlice";
import userSlice from "./slices/userSlice";
import vehicleReducer from "./slices/vehiclesSlice";

export default configureStore({
  reducer: {
    locations: locationsReducer,
    location: locationReducer,
    vehicles: vehicleReducer,
    userAuth: userAuthReducer,
    user: userSlice,
  },
});
