import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./products.type";


export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",  //prefix
    async (id: number, thunkAPI) => {
        try{
            const response = await axios.get<IProduct>(
                `https://fakestoreapi.com/products/${id}`
            )
            return response.data;
        } catch (error){
            return thunkAPI.rejectWithValue("Error loading product");
        }
    }
)

type ProductType={
    product: IProduct;
    isLoading : boolean;
    error:string;
}
const initialState: ProductType = {
    product : {} as IProduct,  //초기값은 빈 배열인데 product타입인 IProduct에는 여러 속성과 타입이 정의되어있기 때문에 오류남. 이럴땐 as로 타입단언 해주기
    isLoading : false,
    error : ""
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export default productSlice.reducer;