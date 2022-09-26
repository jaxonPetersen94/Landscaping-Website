import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSignedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.userSignedIn = true;
    },
    signOut: (state) => {
      state.userSignedIn = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
