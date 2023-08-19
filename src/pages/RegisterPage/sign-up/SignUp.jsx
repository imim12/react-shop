import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../../firebase';

const SignUp = () => {

  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");

  const auth = getAuth(app);
  
  const handleSignupAndLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      //리덕스 스토어에 담는 로직

      navigate('/');   //로그인 됐으면 메인페이지로 보내줌
    })   
    .catch(error =>{
      return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다")
    }) 
  }

  return (
    <Form
    title={"가입하기"}
    getDataForm={handleSignupAndLogin}
    firebaseError={firebaseError}
    />
  )
}

export default SignUp