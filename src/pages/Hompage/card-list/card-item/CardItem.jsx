import React from 'react'
import styles from './CardItem.module.scss'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/redux'

const CardItem = ({item}) => {

  const {products} =  useAppSelector(state=>state.cartSlice);

  const productMatching = products.some((product) => product.id === item.id);   
  //카트에 담겨있는 아이템 중 하나라도 현재 item과 id가 같다면(??   == 현재 가지고 온 item(하나임)과 카트에 담겨있는 아이템들 중에 id가 같은게있다면) 

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt="product card"
        />
      </Link>
      <h5>{item.title.substring(0,15)}...</h5>
      <div>
        <button
          disabled={productMatching}  //카트에 담긴 아이템이라면 
        >
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>{item.price}</p>
      </div>
    </li>
  )
}

export default CardItem