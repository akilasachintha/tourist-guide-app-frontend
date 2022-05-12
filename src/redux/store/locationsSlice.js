import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

// First, create the thunk
export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    try {
      const response = await touristGuideAppAPI.get("/locations");
      return response.data.locations;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  locations: [],
  loading: "idle", //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.locations = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchLocations.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default locationsSlice.reducer;
