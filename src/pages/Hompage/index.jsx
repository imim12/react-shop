import React from 'react'
import FiltersCategory from './filter-category/FiltersCategory'

const Hompage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory/>
      </div>
    </div>
  )
}

export default Hompage