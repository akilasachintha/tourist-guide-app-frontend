import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

// First, create the thunk
export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async () => {
    try {
      const response = await touristGuideAppAPI.get("/hotel/getAll");
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  hotels: [],
  loading: "idle", //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.hotels = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchHotels.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default hotelsSlice.reducer;