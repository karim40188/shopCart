import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getBrands = createAsyncThunk('brands/getBrands', async () => {
    let res = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    console.log(res.data)
    return res.data.data
})
export const getSpecificBrand = createAsyncThunk('brands/getSpecificBrand', async (id) => {
    let res = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    console.log(res?.data?.data)
    return res?.data?.data;
})
const brandSlice = createSlice({
    name: 'brands',
    initialState: {
        data: null,
        isLoading: false,
        isError: false,
        isPending: false,
        specificBrand: null
    },
    extraReducers: (builder) => {
        builder.addCase(getBrands.pending, (state) => {
            state.isPending = true,
                state.isLoading = true,
                state.data = null
        }).addCase(getBrands.fulfilled, (state, action) => {

            state.isPending = false,
                state.isLoading = false,
                state.data = action.payload
        }).addCase(getBrands.rejected, (state, action) => {
            state.isError = action.error

        }),
            builder.addCase(getSpecificBrand.fulfilled, (state, action) => {
                state.specificBrand = action.payload,
                    state.isLoading = false

            }),
            builder.addCase(getSpecificBrand.pending, (state) => {
                state.specificBrand = null,
                    state.isLoading = true

            }),
            builder.addCase(getSpecificBrand.rejected, (state, action) => {
                state.specificBrand = action.error,
                    state.isLoading = false

            })
    }
})
export default brandSlice.reducer
