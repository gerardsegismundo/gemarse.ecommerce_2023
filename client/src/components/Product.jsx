import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, setCartDrawerIsOpen } from '../redux/actions'
import SizeButton from './SizeButton'
import products from '../assets/data/products'

const Product = () => {
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const dispatch = useDispatch()

  const { product_name } = useParams()
  const unslugProductName = product_name.replace(/-/g, ' ')

  const handleSizeClick = size => setSelectedSize(size)

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  useEffect(() => {
    const chosenProduct = products.filter(product => product.name === unslugProductName)
    if (chosenProduct[0]) {
      setProduct(chosenProduct[0])
    } else {
      // @TODO -> 404 Page
      console.log('NOT FOUND')
    }
  }, [product_name])

  const handleAddToCart = () => {
    const { _id, name, imgSrc, price, stock, isAccessories } = product

    if (isAccessories) {
      dispatch(addToCart({ _id, name, imgSrc, price, stock, quantity: 1 }))
      dispatch(setCartDrawerIsOpen(true))
    } else if (selectedSize) {
      // @TODO fix size to cart
      dispatch(
        addToCart({
          _id: _id + selectedSize,
          name,
          imgSrc,
          price,
          stock: stock[selectedSize],
          size: selectedSize,
          quantity: 1
        })
      )
      dispatch(setCartDrawerIsOpen(true))
    }
  }

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
              <button className='btn-dark' onClick={handleAddToCart}>
                {product.isSoldOut ? 'Email me when back in stock' : 'Add to Cart'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Product
