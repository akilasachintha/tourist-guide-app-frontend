import { createAsyncThunk } from "@reduxjs/toolkit";

import touristGuideAppApi from "../../apis/touristGuideAppApi";

export const getLocations = createAsyncThunk(
  "locations/getLocations",
  async () => {
    const response = await touristGuideAppApi.get("/locations");
    return [...response.data.locations];
  }
);

export const getLocationDetails = createAsyncThunk(
  "location/getLocationDetails",
  async (locationId) => {
    try {
      const response = await touristGuideAppApi.get(`/locations/${locationId}`);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }
);
