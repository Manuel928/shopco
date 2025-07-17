import React from 'react'
import ProductsBlock from './Blocks/ProductsBlock'
import { topSelling } from '../assets/assets'

const TopSelling = () => {
  return (
    <ProductsBlock heading="Top Selling" products={topSelling}/>
  )
}

export default TopSelling