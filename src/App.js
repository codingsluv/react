import React, { useState } from 'react'
import './App.css'
import ProductLists from './components/ProductLists'
import ProductCreate from './components/ProductCreate'
import { Products } from './data/Products'


const App = () => {
  const [products, setProducts] = useState(Products)
  const createProduct = () => {
    setProducts([
      ...products,
      {
        id: Math.random(Math.random() * 100),
      }
    ])
    console.log(products)
  }
 return (
  <>
    <div className='app-title'>List Of Product</div>
    <ProductCreate onCreateProduct={createProduct}/>
    <ProductLists products={products}/>
  </>
 )
}

export default App

