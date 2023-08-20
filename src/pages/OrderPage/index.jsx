import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const OrderPage = () => {

  const {isAuth} = useAuth();

  if(!isAuth) return <Navigate to="/"/>  //로그인한 사용자가 아니면 메인페이지로 리턴

  return (
    <div className='page'>
      <div className='container'>
        <h1>주문 히스토리</h1>
      </div>
    </div>
  )
}

export default OrderPage