import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import categoriesSlice from './categories/categories.slice';
import productsSlice from './products/products.slice';
import cartSlice from './cart/cart.slice'
import productSlice from './products/product.slice'
import orderSlice from './order/order.slice'

export const store = configureStore({
    reducer:{
        userSlice,
        categoriesSlice,
        productsSlice,
        cartSlice,
        productSlice,
        orderSlice
    }
})


//const {product, isLoading} = useAppSelector((state:RootState) =>state.productSlice) 이렇게 AppSelector에 state타입을 한번에 정의해주기위해 밑에 코드 씀?
export type RootState = ReturnType<typeof store.getState>
//store.getState는 현재 store의 state값들을 반환하는것이고 ReturnType<typeof store.getState>는 그 state의 반환값의 타입을 추론해 줌
//이걸 일괄적으로 적용하기 위해서는 useAppSelector()이 만들어져 있는 redux.ts로 가기
//리덕스 타입스크립트로 적용하기 강의

export type AppDispatch = typeof store.dispatch;