import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/user/user.slice';
import { setUserId } from '../../../store/cart/cart.slice';

const SignIn = () => {

  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");

  const dispatch= useDispatch();

  const auth = getAuth(app);
  
  const handleLogin = (email:string, password:string) => {   //파이어베이스에서 제공해주는 유저 로그인 함수
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {  //userCredential은 임의의 변수
       //리덕스 스토어에 담는 로직
       dispatch(setUser({
        email: userCredential.user.email,
        token: userCredential.user.refreshToken,
        id: userCredential.user.uid,
       }))
      dispatch(setUserId(userCredential.user.uid)) //id 로컬스토리지에 저장
      navigate('/');   //로그인 됐으면 메인페이지로 보내줌
    })   
    .catch(error =>{
      return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다")
    }) 
  }

  return (
    <Form
        title={"로그인"}
        getDataForm={handleLogin}
        firebaseError={firebaseError}

    />
  )
}

export default SignIn