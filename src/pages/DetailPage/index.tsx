import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import { fetchProduct } from '../../store/products/product.slice';
import styles from './Detailpage.module.scss'
import Loader from '../../components/loader/Loader';
import { addToCart } from '../../store/cart/cart.slice';

const DetailPage = () => {

  const {id} = useParams();  //url로 온 파라미터값을 받아서 사용하도록
  const productId = Number(id);  //String 타입 id를 number로 변환
  const dispatch = useAppDispatch();

  const {product, isLoading} = useAppSelector((state)=>state.productSlice);
  const {products} = useAppSelector((state)=>state.cartSlice);  //카트안의 상품들
  const productMatching = products.some((product)=>product.id === productId); //카트안의 상품들의 id와 현재 상세페이지의 상품의 id가 하나라도 매칭된다면 true반환
  console.log("productMatching", productMatching)


  useEffect(() => {
    
    dispatch(fetchProduct(productId));
  
  }, [productId])

  const addItemToCart = () => {
    dispatch(addToCart(product));
  }
  

  return (
    <div className='page'>
      {isLoading ? (<Loader/>) 
      :
      <div className={styles.card_wrapper}>
        <div className={styles.card_img}>
          <img src={product.image} alt="product card"/>
        </div>
        <div className={styles.card_description}>
          <h3>{product.category}</h3>
          <h4>{product.title}</h4>
          <h4>${product.price}</h4>
          <p>{product.description}</p>
          <div>
            <button 
              disabled={productMatching}
              onClick = { () => !productMatching && addItemToCart()}
            >
              {productMatching  ? "장바구니에 담긴 제품" : "장바구니에 담기" }
            </button>
            <Link to="../../cart">장바구니로 이동</Link>
          </div>
        </div>
      </div>
      }
      
    </div>
  )
}

export default DetailPage