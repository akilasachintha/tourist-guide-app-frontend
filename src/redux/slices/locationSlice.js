import { createSlice } from "@reduxjs/toolkit";

import loadingImg from "../../assets/images/loading/loading-images.gif";
import { getLocationDetails } from "./locationApiHandle";

const initialState = {
  location: {},
  status: "idle", // "idle" | "loading" | "succeeded" | "faild",
  images: [loadingImg],
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocationDetails.pending, (state) => {
      state.status = "locading";
    });
    builder.addCase(getLocationDetails.fulfilled, (state, action) => {
      state.images = action.payload.urls;
      state.location = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getLocationDetails.rejected, (state) => {
      state.status = "faild";
    });
  },
});

export const { fetchLocation } = locationSlice.actions;

export default locationSlice.reducer;
