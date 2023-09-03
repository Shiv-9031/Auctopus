import { configureStore } from "@reduxjs/toolkit";
import BackendDataReducer from "./feature/Slice";

export const store = configureStore({
  reducer: {
    BackendData: BackendDataReducer,
  },
});
