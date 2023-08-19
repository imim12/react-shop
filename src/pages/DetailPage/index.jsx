import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useAppDispatch} from '../../hooks/redux';
import { fetchProduct } from '../../store/products/product.slice';

const DetailPage = () => {

  const {id} = useParams();  //url로 온 파라미터값을 받아서 사용하도록
  const productId = Number(id);  //String 타입 id를 number로 변환
  const dispatch = useAppDispatch();


  useEffect(() => {
    
    dispatch(fetchProduct(productId));
  
  }, [productId])
  

  return (
    <div>index</div>
  )
}

export default DetailPage