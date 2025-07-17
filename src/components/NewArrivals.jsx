import React from 'react'
import ProductsBlock from './Blocks/ProductsBlock'
import { newArrivals } from '../assets/assets'

const NewArrivals = () => {
  return (
    <ProductsBlock heading="New Arrivals" products={newArrivals}/>
  )
}

export default NewArrivals