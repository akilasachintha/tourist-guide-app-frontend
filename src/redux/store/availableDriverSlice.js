import { createAsyncThunk, createSlice, getType } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchAvailableDrivers = createAsyncThunk(
  "availableDrivers/fetchAvailableDrivers",
  async () => {
    try {
      let location = localStorage.getItem("location");
      const response = await touristGuideAppAPI.get("/user/driver/getByAvailabilityAndLocation",{
        params : {id : location},
      });
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  availableDrivers: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const availableDriverSlice = createSlice({
  name: "availableDrivers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAvailableDrivers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAvailableDrivers.fulfilled, (state, action) => {
      state.availableDrivers = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchAvailableDrivers.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default availableDriverSlice.reducer;