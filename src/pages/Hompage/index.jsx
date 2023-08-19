import React from 'react'
import FiltersCategory from './filter-category/FiltersCategory'
import CardList from './card-list/CardList'

const Hompage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory/>
        <CardList/>
      </div>
    </div>
  )
}

export default Hompage