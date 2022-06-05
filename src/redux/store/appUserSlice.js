import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchAppUser = createAsyncThunk(
  "appUser/fetchAppUser",
  async () => {
    try {
      var user = JSON.parse(localStorage.getItem('user'));
      const response = await touristGuideAppAPI.get(`/user/${user.userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  appUser: {},
  loading: "idle", //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const appUserSlice = createSlice({
  name: "appUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAppUser.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAppUser.fulfilled, (state, action) => {
      state.appUser = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchAppUser.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default appUserSlice.reducer;
