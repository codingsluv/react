import React, { useState } from 'react'

const ProductCreate = ({onCreateProduct}) => {
    const initialState = {
        'name': '',
        'description': '',
        'imageURL': ''
    }
    const [fromAdd, setFormAdd] = useState(initialState)
    const { name, description, imageURL } = fromAdd
    const [showForm, setShowForm] = useState(false)
    const handleChange = (e) => {
        setFormAdd({ ...fromAdd, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onCreateProduct(fromAdd)
        setFormAdd(initialState)
    }
    const handleToggleClick = () => {
        setShowForm(!showForm)
    }
  return (
    <div className='product-create'>
        <div className='toggle-add'>
            <button onClick={handleToggleClick} className='add-toggle edit-input-submit'>
                {showForm ? 'Close Form' : 'Add Product'}
            </button>
        </div>
        {showForm && (
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-add-title'>Form Create Product</div>
                <div className='form-group'>
                    <input type="text" className='add-input-text' 
                        placeholder='Name of product'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <input type="text" className='add-input-text' 
                        placeholder='Description of product'
                        name='description'
                        value={description}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <input type="text" className='add-input-text' 
                        placeholder='Image URL'
                        name='imageURL'
                        value={imageURL}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" className="edit-input-submit add" />
            </form>
        )}
    </div>
  )
}

export default ProductCreate