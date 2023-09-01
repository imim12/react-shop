import React from 'react'
import styles from './LoginRequest.module.scss'

const LoginRequest = () => {
  return (
    <div className={styles.login_request}>
        <img src='img/empty-cart.png' alt='cart empty'/>
        <h1>로그인을 하셔야 주문 내역이 보입니다.</h1>
    </div>
  )
}

export default LoginRequest