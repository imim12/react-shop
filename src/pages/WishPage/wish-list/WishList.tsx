import React from 'react'
import styles from './WishList.module.scss'
import { useAppSelector } from '../../../hooks/redux'
import CartItem from '../../CartPage/cart-list/cart-item/CartItem'
import WishItem from './wish-item/WishItem'

const WishList = () => {
    const {wishProducts} = useAppSelector((state)=>state.wishListSlice)
    console.log("wishProducts",wishProducts)
    return (
        <div className={styles.cart_list}>
            {wishProducts.map((product)=>(
                <WishItem key={product.id} item={product}/>
            ))}
        </div>
    )
}

export default WishList