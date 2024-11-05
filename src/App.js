import React from 'react'
import './App.css'
import ProductLists from './components/ProductLists'
import ProductCreate from './components/ProductCreate'


const App = () => {
 return (
  <>
    <div className='app-title'>List Of Product</div>
    <ProductCreate />
    <ProductLists />
  </>
 )
}

export default App

