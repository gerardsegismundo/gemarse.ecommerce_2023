import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, setCartDrawerIsOpen } from '../redux/actions'
import { SizeButton, Accordion } from '../components/'
import products from '../assets/data/products'
import { ReactComponent as InfoIcon } from '../assets/svg/info.svg'
import { ReactComponent as ShirtIcon } from '../assets/svg/shirt.svg'
import { ReactComponent as TruckIcon } from '../assets/svg/truck.svg'

import { materialsAndCare, deliveriesAndReturns } from '../assets/data/accordionData'

const Product = () => {
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  const dispatch = useDispatch()

  const { product_name } = useParams()
  const unslugProductName = product_name.replace(/-/g, ' ')

  const handleSizeClick = size => setSelectedSize(size)

  const isAccessories = product && product.type === 'accessories'

  const isSoldOut = product
    ? isAccessories
      ? product.stock === 0
      : Object.values(product.stock).every(s => s === 0)
    : false

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  useEffect(() => {
    const chosenProduct = products.find(product => product.name === unslugProductName)

    if (chosenProduct) {
      setProduct(chosenProduct)
    } else {
      // @TODO -> 404 Page
      console.log('NOT FOUND')
    }
  }, [unslugProductName])

  const handleAddToCart = () => {
    const { _id, name, imgSrc, price, stock } = product

    if (isAccessories) {
      dispatch(addToCart({ _id, name, imgSrc, price, stock, quantity: 1 }))
      dispatch(setCartDrawerIsOpen(true))
    } else if (selectedSize) {
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
              {!isAccessories && (
                <>
                  <p className='size'>Size:</p>
                  <div className='sizes'>
                    {sizes.map(size => (
                      <SizeButton
                        key={size}
                        size={size}
                        isSelected={selectedSize === size}
                        isOutOfStock={product.stock[size] === 0}
                        onClick={handleSizeClick}
                      />
                    ))}
                  </div>
                </>
              )}

              <button className='btn-dark bordered' onClick={handleAddToCart}>
                {product && isSoldOut ? 'Email me when back in stock' : 'Add to Cart'}
              </button>
              <Accordion title='description & sizing' icon={InfoIcon}>
                <h4>{product.name}</h4>
                <p className='description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo magnam dicta delectus deserunt
                  esse debitis corporis distinctio laboriosam ea, error ullam sit sunt optio eius nobis. Perferendis,
                  voluptatum illum!
                </p>
              </Accordion>
              <Accordion title='materials & care' icon={ShirtIcon}>
                <ul>
                  {materialsAndCare.map((material, index) => (
                    <li key={index}>
                      <span>- </span> <p>{material}</p>
                    </li>
                  ))}
                </ul>
              </Accordion>

              <Accordion title='deliveries & returns' icon={TruckIcon}>
                <ul>
                  {deliveriesAndReturns.map((item, index) => (
                    <li key={index}>
                      <span>- </span> <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Product
