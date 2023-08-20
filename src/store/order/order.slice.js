import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async (userId, thunkAPI) =>{
        try {
            const response = await axios.get(`https://64e1bddcab00373588185df2.mockapi.io/orders?search=${userId}`)  //search는 따로 우리가 설정한게 아닌 검색하려면 써야하는 제공해주는 속성인건가??
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Error receiving order")
        }
    }
)

const initialState = {
    order : [],
    isLoading : false,
    error : ""
}

export const productSlice = createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.order = action.payload;
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default productSlice.reducer;