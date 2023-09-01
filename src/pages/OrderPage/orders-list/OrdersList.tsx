import React, { useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchOrder } from '../../../store/order/order.slice';
import CartEmpty from '../../../components/cart-empty/CartEmpty';
import styles from './OrdersList.module.scss'
import OrderItem from './order-item/OrderItem';
import LoginRequest from '../../../components/loginRequest/LoginRequest';



const OrdersList = () => {

    const {id} = useAuth();
    const {order} = useAppSelector(state=>state.orderSlice);  //2. 가져온 목록들이 담긴 state인 order 가져옴
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchOrder(id));  //1. 유저 id에 맞는 주문 목록들을 가져오는 비동기함수 호출
    },[id])

    if(!id){
        return<LoginRequest/>
    }

    if(!order.length){
        return <CartEmpty title="주문내역"/>
    }

  return (
    <div className={styles.orders}>
        {order.map(item=>(
            <div key={item.id}>
                <div className={styles.order_header}>
                    <h3>주문 번호_{item.id}</h3> 
                    <p>합계: ${item.totalPrice.toFixed(2)}</p>
                </div>
                <ul className={styles.orders_list}>
                    {item.products.map(order => (
                        <OrderItem key={order.id} order={order}/>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default OrdersList