import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: localStorage.getItem("cartProducts") ? 
        JSON.parse(localStorage.getItem("cartProducts")): [],
    totalPrice: 0,
    userId: localStorage.getItem("userId") ?
        JSON.parse(localStorage.getItem("userId")) : ""
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setUserId : (state, action) =>{
            state.userId = action.payload;
            localStorage.setItem('userId', JSON.stringify(state.userId));
        },
        removeUserId: (state, action) =>{
            state.userId = "";
            localStorage.setItem('userId', JSON.stringify(state.userId));
        },
        addToCart : (state, action) =>{
            state.products.push({  //원래 있던 products값(=...action.payload)에 받아온 값을 넣어 하나를 더함
                ...action.payload,    
                quantity: 1,
                total : action.payload.price
            })
            localStorage.setItem('cartProducts', JSON.stringify(state.products));
        },
        deleteFromCart : (state, action) =>{
            state.products = state.products.filter((item)=>item.id !== action.payload)
            localStorage.setItem('cartProducts', JSON.stringify(state.products));
        },
        incrementProduct : (state, action) => {
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
        decrementProduct : (state, action) => {
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
    getTotalPrice
} = cartSlice.actions;

export default cartSlice.reducer