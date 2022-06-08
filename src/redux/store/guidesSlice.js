import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchGuides = createAsyncThunk(
  "guides/fetchGuides",
  async () => {
    try {
      const response = await touristGuideAppAPI.get("/user/guide/getAll");
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  guides: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

const hotelsSlice = createSlice({
  name: "guides",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGuides.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchGuides.fulfilled, (state, action) => {
      state.guides = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchGuides.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default hotelsSlice.reducer;