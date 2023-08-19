import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import categoriesSlice from './categories/categories.slice';
import productsSlice from './products/products.slice';
import cartSlice from './cart/cart.slice'
import productSlice from './products/product.slice'

export const store = configureStore({
    reducer:{
        userSlice,
        categoriesSlice,
        productsSlice,
        cartSlice,
        productSlice
    }
})