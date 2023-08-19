import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import styles from './CardList.module.scss'
import { fetchProducts } from '../../../store/products/products.slice'
import CardItem from './card-item/CardItem'
import { useSelector } from 'react-redux'

const CardList = () => {

    const dispatch = useAppDispatch()

    const {products} = useAppSelector(state => state.productsSlice)  //3. 비동기 호출이 완료되거나 오류가 난 후 state값 가져옴
    const category = useAppSelector(state => state.categoriesSlice)  //3. 비동기 호출이 완료되거나 오류가 난 후 state값 가져옴

    //console.log("products?????>",products);
    useEffect(() => {
        
        dispatch(fetchProducts(category?.toLowerCase()));  //1. products.slice.js의 fetchProducts()를 부름  (흐름이 맞는지 확신x)
        
    }, [category])
    

  return (
    <ul className={styles.card_list}>
        {products && products.map( product => <CardItem key={product.id} item={product}/>) }
    </ul>
  )
}

export default CardList