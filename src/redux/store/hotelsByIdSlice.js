import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchHotelsById = createAsyncThunk(
  "hotelsByIdSlice/fetchHotelsById",
  async () => {
    try {
      let user = JSON.parse(localStorage.getItem('user'));
      const response = await touristGuideAppAPI.get(`/hotel/${user.userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  hotelsById: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const hotelsByIdSlice = createSlice({
  name: "hotelsById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotelsById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchHotelsById.fulfilled, (state, action) => {
      state.hotelsById = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchHotelsById.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default hotelsByIdSlice.reducer;