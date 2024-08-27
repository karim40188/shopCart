import { configureStore } from "@reduxjs/toolkit";
import BrandsReducer from './BrandSlice'
export  const store= configureStore({
    reducer: {
        BrandsReducer
    }

})