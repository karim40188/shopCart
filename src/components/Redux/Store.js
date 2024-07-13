import "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import "react-redux";
import brandsReducer from "./BrandsSlice";

let store = configureStore({
  reducer: {
    brands: brandsReducer,
  },
});

export default store;
