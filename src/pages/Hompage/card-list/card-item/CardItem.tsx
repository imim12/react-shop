import React, { useEffect } from 'react'
import styles from './CardItem.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { addToCart } from '../../../../store/cart/cart.slice'
import { IProduct } from '../../../../store/products/products.type'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { addToWishList, deleteWishList } from '../../../../store/wishList/wishList.slice'

type CardItemProps = {
  item : IProduct
}

const CardItem = ({item}:CardItemProps) => {

  const {products} =  useAppSelector(state=>state.cartSlice);
  const {wishProducts} = useAppSelector(state=>state.wishListSlice);
  //console.log("products>>>", products)

  const productMatching = products.some((product) => product.id === item.id);   
  //카트에 담겨있는 아이템 중 하나라도 현재 item과 id가 같다면(??   == 현재 가지고 온 item(하나임)과 카트에 담겨있는 아이템들 중에 id가 같은게있다면) 
  const dispatch = useAppDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(item));
  }

  const wishProductMatching = wishProducts.some((product) => product.id === item.id);   

  const addItemToWishList = () => {
    dispatch(addToWishList(item));
  }

  const deleteItemToWishList = () => {
    dispatch(deleteWishList(item.id));
    console.log("deleteItemToWishList",wishProducts)
  }

  // useEffect(() => {
  // }, [wishProducts])


  return (
    <li className={styles.card_item}>
      <div className={styles.wish_list}>

        {wishProductMatching ?  
          <button className={styles.wish} onClick={()=> wishProductMatching && deleteItemToWishList()}>
            <AiFillStar color="#ffa704"/>          
          </button>       
          : 
          <button className={styles.wish} onClick={()=> !wishProductMatching && addItemToWishList()}>
            <AiOutlineStar color="#ffa704"  />  
          </button>
        }

      </div>
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
          onClick={() => !productMatching && addItemToCart()}  // 장바구니에 안 담긴 상품이라면 addItemToCart()
        >
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>{item.price}</p>
      </div>
    </li>
  )
}

export default CardItem