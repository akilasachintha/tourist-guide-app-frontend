import { createSlice } from "@reduxjs/toolkit";

import { getLocations } from "./locationApiHandle";

const initialState = {
  locations: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "faild",
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocations.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getLocations.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.locations = action.payload;
    });
    builder.addCase(getLocations.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { fetchLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
