import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { IProduct } from "./products.type";


export const fetchProducts = createAsyncThunk(   //2. CardList.jsx에서 여기로 옴. 비동기 호출 실행. 이때 진행 상태에 따라 밑의 extraReducers로 값이 들어감??
    "products/fetchProducts",
    async (category:string, thunkAPI) => {
        console.log(thunkAPI);
        try{
            let response;
            if(category){  //각 카테고리를 눌렀으면 카테고리에 맞는 아이템만 가져옴
                response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`);
            }else{
                response = await axios.get<IProduct[]>("https://fakestoreapi.com/products");
            }          
            console.log("response",response)
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue("Error loading products");   //데이터를 가져오다 오류가 났으면 rejectWithValue()로 인해 인자값이 fetchProducts.rejected의 action.payload에 들어가게 됨
        }
    }
)

type ProductsType = {
    products: IProduct[];
    isLoading : boolean;
    error : string;
}

const initialState: ProductsType = {
    products : [],
    isLoading : false,
    error : ""
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers : {},
    //reducers 추가하면 프로미스의 진행 상태에 따라서 리듀서를 실행할 수 있음
    extraReducers:(builder) =>{
        builder
        .addCase(fetchProducts.pending, (state) =>{  //가져오는중
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{  //완료했을때
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{  //가져오지 못하고 종료됐을때
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
})

export default productsSlice.reducer;