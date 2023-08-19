import React from 'react'
import styles from './Loader.module.scss'


const Loader = () => {
  return (  //로딩이미지
    <div className={styles.lds_ring}>  
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader