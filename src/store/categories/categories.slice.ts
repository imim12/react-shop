import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesName } from "./categories.type";

const initialState = CategoriesName.All;

export const categoriesSlice = createSlice({
    name : "category",
    initialState,
    reducers : {
        setActiveCategory : (_, action:PayloadAction<CategoriesName>) => action.payload  //PayloadAction는 payload 필드의 타입을 지정할 수 있게 해줌. 
    }
})

export const { setActiveCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;