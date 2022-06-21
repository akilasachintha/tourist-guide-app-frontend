import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchGetUserRatingSlice = createAsyncThunk(
  "getUserRating/fetchGetUserRatingSlice",
  async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      const response = await touristGuideAppAPI.get("booking/getRatingUsers", {
        params: { id: user.userId }
      });
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  userRating: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

const getUserRatingSlice = createSlice({
  name: "getUserRating",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetUserRatingSlice.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchGetUserRatingSlice.fulfilled, (state, action) => {
      state.userRating = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchGetUserRatingSlice.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default getUserRatingSlice.reducer;