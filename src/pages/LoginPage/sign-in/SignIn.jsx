import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/user/user.slice';

const SignIn = () => {

  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");

  const dispatch= useDispatch();

  const auth = getAuth(app);
  
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       //리덕스 스토어에 담는 로직
       dispatch(setUser({
        email: userCredential.user.email,
        token: userCredential.user.refreshToken,
        id: userCredential.user.uid,
       }))

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