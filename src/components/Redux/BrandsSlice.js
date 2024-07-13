import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getBrands = createAsyncThunk("brands/getBrands", async () => {
  let { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/brands`
  );
  return data.data
});
export let BrandsSlice = createSlice({
  name: "brands",
  initialState: {
    isLoading: false,
    isError: null,
    brands: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      });
    builder.addCase(getBrands.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isError = action.error.message;
    });
  },
});

let brandsReducer = BrandsSlice.reducer;
export default brandsReducer;
