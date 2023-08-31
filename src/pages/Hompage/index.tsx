import React from 'react'
import FiltersCategory from './filter-category/FiltersCategory'
import CardList from './card-list/CardList'
import CountProducts from './count-products/CountProducts'
import Slide from './slide/Slide'

const Hompage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <Slide/>
        <h1>Products</h1>
        <FiltersCategory/>
        <CountProducts/>
        <CardList/>
      </div>
    </div>
  )
}

export default Hompage