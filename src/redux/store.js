import { configureStore } from "@reduxjs/toolkit";

import locationSlice from "./slices/locationSlice";
import locationsSlice from "./slices/locationsSlice";

export default configureStore({
  reducer: {
    locations: locationsSlice,
    location: locationSlice,
  },
});
