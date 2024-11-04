import React from 'react'
import ProductCards from '../components/ProductCards'
import { Products } from '../data/Products'


const ProductLists = () => {
  return (
      <div className='cards'>
      {Products.map(product => {
        return <ProductCards 
          key={product.id}
          title={product.name}
          description={product.description}
          imageURL={product.imageURL}
        s/>
      })}
    </div>
  )
}

export default ProductLists
