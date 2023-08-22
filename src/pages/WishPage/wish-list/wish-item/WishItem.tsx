import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { addToCart, decrementProduct, deleteFromCart, incrementProduct } from '../../../../store/cart/cart.slice';
import styles from './WishItem.module.scss'
import { Link } from 'react-router-dom';
import {AiOutlineDelete} from 'react-icons/ai';
import { IProduct } from '../../../../store/products/products.type';
import { deleteWishList } from '../../../../store/wishList/wishList.slice';

type wishItemProps = {
    item : IProduct;
}

const WishItem = ({item}:wishItemProps) => {

    const {products} =  useAppSelector(state=>state.cartSlice);

    const dispatch = useAppDispatch();

    const productMatching = products.some((product) => product.id === item.id);   
    //카트에 담겨있는 아이템 중 하나라도 현재 item과 id가 같다면(??   == 현재 가지고 온 item(하나임)과 카트에 담겨있는 아이템들 중에 id가 같은게있다면) 
    const addItemToCart = () => {
      dispatch(addToCart(item));
    }

    const deleteProduct = () => {
        dispatch(deleteWishList(item.id))
    }

  return (
    <div className={styles.cart_item}>
        <Link to={`/product/${item.id}`}>
            <img src={item.image} alt='product card'/>
        </Link>
        <div className={styles.cart_description}>
            <h3>{item.category}</h3>
            <h2>{item.title}</h2>
        </div>
        <div className={styles.cart_add}>
            <div>
                <p>{item.price} $</p>
                <button
                disabled={productMatching}  //카트에 담긴 아이템이라면 
                onClick={() => !productMatching && addItemToCart()}  // 장바구니에 안 담긴 상품이라면 addItemToCart()
                >
                {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
                </button>
            </div>
        </div>
        <button onClick={deleteProduct} className={styles.cart_delete}>
            <AiOutlineDelete/>
        </button>
    </div>
  )
}

export default WishItem