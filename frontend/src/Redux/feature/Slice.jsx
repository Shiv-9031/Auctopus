import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: " ",
  isAuthenticated: false,
  allBook: " ",
};
export const BackendDataSlice = createSlice({
  name: "backendData",

  initialState,

  reducers: {
    login: (state, action) => {
      state.info = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.info = "";
      state.isAuthenticated = false;
      state.allBook = "";
    },
    storeBook: (state, action) => {
      state.allBook = action.payload;
    },
  },
});

export const { login, logout, storeBook } = BackendDataSlice.actions;
export default BackendDataSlice.reducer;
