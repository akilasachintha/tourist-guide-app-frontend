import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

// First, create the thunk
export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    try {
      const response = await touristGuideAppAPI.get("/hotel/category/getAll");
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  category: [],
  loading: "idle", //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const roomCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default roomCategorySlice.reducer;