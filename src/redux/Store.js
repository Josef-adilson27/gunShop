import { configureStore } from "@reduxjs/toolkit";
import  MainSlice from "./MainSlise";

export const Store = configureStore({
  reducer: {
    Data: MainSlice,
  },
});
