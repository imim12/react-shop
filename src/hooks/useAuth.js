import { useAppSelector } from "./redux";

export function useAuth() {
    const {id, email, token} = useAppSelector((state)=> state.userSlice)

    return {
        isAuth: !!email,   //email값이 있으면(즉 유저 정보가 있으면) true 반환
        email,
        id,
        token
    }

}
