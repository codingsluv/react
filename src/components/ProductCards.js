import React, { useState } from 'react'

const ProductCards = (props) => {
    const [jumlahProduct, setJumlahProduct] = useState(0)
    const handlePlus = () => {
        setJumlahProduct(jumlahProduct + 1)
    }
    const handleMinus = () => {
        setJumlahProduct(jumlahProduct - 1)
        if (jumlahProduct === 0) {
            setJumlahProduct(0)
        }
    }
    
  return (
    <div className='card'>
    <img style={{ width: "100%", height: "200px", borderRadius: "10px 10px 0px 0px" }} 
        src= {props.imageURL}
        alt="" 
    />
    <div className='container'>
      <h4>
        <b>{props.title}</b>
      </h4>
      <p>{props.description}</p>
    </div>
    <div className={`card-keranjang ${jumlahProduct > 0 ? 'jumlah-product' : 'hidden'}`}>
        {jumlahProduct > 0 ? <>
            <button onClick={handleMinus} className='button'>-</button>
            <div>{jumlahProduct}</div>
        <button onClick={handlePlus} className='button'>+</button>
        </> : <div onClick={handlePlus}>Keranjang</div>}
    </div>
  </div>
  )
}

export default ProductCards
