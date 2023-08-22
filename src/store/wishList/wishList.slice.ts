import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../products/products.type";

type WishState = {
    wishProducts:IProduct[];
}

const initialState: WishState = {
    wishProducts: localStorage.getItem("wishProducts") ? 
        JSON.parse(localStorage.getItem("wishProducts")|| ""): []
}

export const wishListSlice = createSlice({
    name:"wish",
    initialState,
    reducers:{
        addToWishList : (state, action:PayloadAction<IProduct>) =>{
            state.wishProducts.push({  //위시리스트에 상품 하나 추가
                ...action.payload    //그 상품의 정보가 담긴 객체를 전개
            })
            localStorage.setItem('wishProducts', JSON.stringify(state.wishProducts));
        },
        deleteWishList : (state, action:PayloadAction<number>) =>{
            state.wishProducts = state.wishProducts.filter((item)=>item.id !== action.payload)
            localStorage.setItem('wishProducts', JSON.stringify(state.wishProducts));
        }

    }
})

export const {
    addToWishList,
    deleteWishList
} = wishListSlice.actions;

export default wishListSlice.reducer