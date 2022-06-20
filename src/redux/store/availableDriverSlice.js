import { createAsyncThunk, createSlice, getType } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchAvailableDrivers = createAsyncThunk(
  "availableDrivers/fetchAvailableDrivers",
  async () => {
    try {
      const response = await touristGuideAppAPI.get("/user/guide/getByAvailability");
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  availableGuides: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const availableGuideSlice = createSlice({
  name: "availableGuides",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAvailableGuides.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAvailableGuides.fulfilled, (state, action) => {
      state.availableGuides = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchAvailableGuides.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default availableGuideSlice.reducer;