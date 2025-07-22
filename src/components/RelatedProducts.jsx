import React from 'react'
import ProductsBlock from './Blocks/ProductsBlock'
import { relatedProducts } from '../assets/assets'

const RelatedProducts = () => {
  return (
    <ProductsBlock heading={"You might also like"} products={relatedProducts}/>
  )
}

export default RelatedProducts