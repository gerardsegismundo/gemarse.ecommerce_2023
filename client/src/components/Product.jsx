import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import SizeButton from './SizeButton'

const Product = () => {
  const [product, setProduct] = useState(null)
  const { product_name } = useParams()
  const unslugProductName = product_name.replace(/-/g, ' ')

  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeClick = size => setSelectedSize(size)

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  useEffect(() => {
    const foundProduct = products.filter(product => product.name === unslugProductName)
    if (foundProduct[0]) {
      setProduct(foundProduct[0])
      console.log(foundProduct[0])
    } else {
      console.log('NOT FOUND')
    }
  })

  return (
    <div className='product-page'>
      <div className='container'>
        {product && (
          <>
            <img src={product.imgSrc} alt={product.name} />
            <div className='details'>
              <h2 className='name'>{product.name}</h2>
              <p className='price'>${product.price}</p>
              <p className='color'>
                Color: <span>{product.color}</span>
              </p>
              <p className='size'>Size:</p>
              {sizes.map(size => (
                <SizeButton
                  key={size}
                  size={size}
                  isSelected={selectedSize === size}
                  isOutOfStock={product.stock[size] === 0}
                  onClick={handleSizeClick}
                />
              ))}
              <button className='btn-dark'>Add to Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Product
