import React from 'react'
import ProductCard from '../Cards/ProductCard'
import Button from '../Buttons/Button'

const ProductsBlock = ({heading, products}) => {
  return (
    <section className='pt-[50px] flex flex-col items-center lg:pt-[72px] px-[16px] lg:px-[100px]'>
        <p className='font-IntegralCF font-bold text-[24px] lg:text-[36px] text-center'>{heading}</p>
        {/* <div className='grid grid-cols-2 gap-x-[16px] lg:gap-x-[20px] lg:grid-cols-4'>
            {products.map((product) => (
                <ProductCard product={product} key={product.name}/>
            ))}
        </div> */}
        <div className='grid grid-cols-2 lg:grid-cols-4 space-x-[16px] lg:space-x-[20px]'>
            {products.map((product) => (
                <ProductCard product={product} key={product.name}/>
            ))}
        </div>
        <Button text="View all" backgroundColor='white' border='softGray' textcolor='black'></Button>
    </section>
  )
}

export default ProductsBlock