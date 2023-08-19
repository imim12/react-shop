import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('user') ?    //초기값
    JSON.parse(localStorage.getItem('user')) : { email : "", token: "", id: ""}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) =>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;

            localStorage.setItem('user', JSON.stringify(state));
        },
        removeUser: (state) =>{
            state.email = "";
            state.token = "";
            state.id = "";

            localStorage.setItem('user', JSON.stringify(state));
        }
    }
})

export const { setUser, removeUser } = userSlice.actions; 

export default userSlice.reducer;  //default라서 다른 파일에서 이 파일을 가져올 때 어떤 이름으로 가져와도 userSlice를 가져오게됨 