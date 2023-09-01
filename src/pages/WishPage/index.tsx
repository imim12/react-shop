import React from 'react'
import { useAppSelector } from '../../hooks/redux';
import styles from './Wish.module.scss';
import { AiFillStar } from 'react-icons/ai';
import WishList from './wish-list/WishList';

const WishListPage = () => {

  const {wishProducts} = useAppSelector(state=>state.wishListSlice);

  return (
    <div className='page'>
      <div className='container'>
      <h1>위시리스트</h1>
        {!wishProducts.length ? (
          <div className={styles.wishList}>
            <AiFillStar color="#ffa704" font-size='200px'/>     
            <h1>위시 리스트가 비어있습니다.</h1>
          </div>
        ) : (
          <div>
            <WishList/>
          </div>
        ) 
      }
      </div>
    </div>
  )
}

export default WishListPage