import React from 'react';
import ProductCreate from './components/ProductCreate';
import ProductList from './components/ProductLists';
import { Products } from './data/Products';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState(Products);
  const editProductById = (id, data) => {
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        console.log({ ...prod, ...data });
        return { ...prod, ...data };
      }

      return prod;
    });
    console.log(updatedProducts);
    setProducts(updatedProducts);
  };
  const onCreateProduct = (product) => {
    setProducts([
      ...products,
      {
        id: Math.round(Math.random() * 1998),
        ...product,
      },
    ]);
    console.log(products);
  };
  const onDeleteProduct = (id) => {
    const updatedProducts = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        onEditProduct={editProductById}
        products={products}
        onDeleteProduct={onDeleteProduct}
      />
    </>
  );
};

export default App;