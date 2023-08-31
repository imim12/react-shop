import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../products/products.type";

export const postOrder = createAsyncThunk(
    "cart/postOrder",
    async(order: CartState, thunkAPI) => {
        try {
            await axios.post(
                "https://64e1bddcab00373588185df2.mockapi.io/orders",
                order
            )
            thunkAPI.dispatch(sendOrder()) 
        } catch (error) {
            return thunkAPI.rejectWithValue("Error sending order");
        }
    }
)

type CartState = {
    products:IProduct[];
    totalPrice:number;
    userId:string
}

const initialState:CartState = {
    products: localStorage.getItem("cartProducts") ? 
        JSON.parse(localStorage.getItem("cartProducts")|| ""): [],
    totalPrice: 0,
    userId: localStorage.getItem("userId") ?
        JSON.parse(localStorage.getItem("userId")|| "") : ""
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setUserId : (state, action:PayloadAction<string>) =>{
            state.userId = action.payload;
            localStorage.setItem('userId', JSON.stringify(state.userId));
        },
        removeUserId: (state) =>{
            state.userId = "";
            localStorage.setItem('userId', JSON.stringify(state.userId));
        },
        addToCart : (state, action:PayloadAction<IProduct>) =>{
            state.products.push({  //원래 있던 카트안의 상품들에게 push로 상품 하나 추가. ...action.payload는 카트에 넣을 상품 하나의 정보들이 담긴 객체라 그 정보들을 전개연산자로 전개
                ...action.payload,    
                quantity: 1,
                total : action.payload.price
            })
            localStorage.setItem('cartProducts', JSON.stringify(state.products));
        },
        deleteFromCart : (state, action:PayloadAction<number>) =>{
            state.products = state.products.filter((item)=>item.id !== action.payload)
            localStorage.setItem('cartProducts', JSON.stringify(state.products));
        },
        incrementProduct : (state, action:PayloadAction<number>) => {
            state.products = state.products.map((item)=>
                item.id === action.payload
                    ? {
                        ...item,
                        quantity : item.quantity +1,
                        total : item.price * (item.quantity +1)
                    }
                    : item
            )
            localStorage.setItem('cartProducts', JSON.stringify(state.products))
        },
        decrementProduct : (state, action:PayloadAction<number>) => {
            state.products = state.products.map((item)=>
                item.id === action.payload
                    ? {
                        ...item,
                        quantity : item.quantity -1,
                        total : item.price * (item.quantity -1)
                    }
                    : item
            )
            localStorage.setItem('cartProducts', JSON.stringify(state.products))
        },
        getTotalPrice : (state) =>{
            state.totalPrice = state.products.reduce(
                (acc, item) => (acc +=item.total),
                0
            )
            return state;
        },
        sendOrder : (state) => {
            state.products = [];   //주문을 보냈으니 장바구니를 비워주기 위해 빈 배열 할당
            localStorage.setItem('cartProducts',JSON.stringify(state.products))  //마찬가지로 localStorage에도 없애줌
        }
        

    }
})

export const {
    setUserId,
    removeUserId,
    addToCart,
    deleteFromCart,
    incrementProduct,
    decrementProduct,
    getTotalPrice,
    sendOrder
} = cartSlice.actions;

export default cartSlice.reducer