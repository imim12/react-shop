import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useAppDispatch = () =>  useDispatch<AppDispatch>();

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;  
//RootState 타입을 적용하기 위해 만들어진 TypedUseSelectorHook ?