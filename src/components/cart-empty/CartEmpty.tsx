import React from 'react'
import styles from './CartEmpty.module.scss'
import { Link } from 'react-router-dom'

type CartEmptyProps = {
  title : string;
}

const CartEmpty = ({title}:CartEmptyProps) => {
  return (
    <div className={styles.cart_empty}>
      <img src='img/empty-cart.png' alt='cart empty'/>
      {title === '주문내역' 
      ? <h1>{title}이 비어있습니다.</h1> 
      : <h1>{title}가 비어있습니다.</h1> 
      }
      {title === '주문내역' 
      ? <p>주문을 하시면 주문 내역이 뜹니다</p>
      : <p>{title}에 상품을 넣어주세요.</p> 
      }
      
      <Link to ="/">계속 쇼핑하기</Link>
    </div>
  )
}

export default CartEmpty