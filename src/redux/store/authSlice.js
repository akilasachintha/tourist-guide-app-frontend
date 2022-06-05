import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: {
    status : "false",
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin: (state, action) => {
      state.loginStatus = action.payload;
    }
  }
});

export const { authLogin } = authSlice.actions;

export default authSlice.reducer;