import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, setCartDrawerIsOpen } from '../redux/actions'
import SizeButton from './SizeButton'
import products from '../assets/data/products'
import { ReactComponent as InfoIcon } from '../assets/svg/info.svg'
import { ReactComponent as ShirtIcon } from '../assets/svg/shirt.svg'
import { ReactComponent as TruckIcon } from '../assets/svg/truck.svg'

import Accordion from './Accordion'

const Product = () => {
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  const dispatch = useDispatch()

  const { product_name } = useParams()
  const unslugProductName = product_name.replace(/-/g, ' ')

  const handleSizeClick = size => setSelectedSize(size)

  const isSoldOut = (() => {
    if (product) {
      if (product.isAccessories) {
        return product.stock === 0
      } else {
        return Object.values(product.stock).every(s => s === 0)
      }
    }
  })()

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  useEffect(() => {
    const chosenProduct = products.filter(product => product.name === unslugProductName)
    if (chosenProduct[0]) {
      setProduct(chosenProduct[0])
    } else {
      // @TODO -> 404 Page
      console.log('NOT FOUND')
    }
  }, [unslugProductName])

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
              {!product.isAccessories && (
                <>
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
                </>
              )}

              <button className='btn-dark' onClick={handleAddToCart}>
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
                  <li>
                    <span>- </span> <p>95% Cotton, 5% Elastane</p>
                  </li>
                  <li>
                    <span>- </span> <p>Wash inside out at 30 degrees</p>
                  </li>
                  <li>
                    <span>- </span> <p>Iron inside out with a cool iron</p>
                  </li>
                  <li>
                    <span>- </span> <p>Do not tumble dry</p>
                  </li>
                  <li>
                    <span>- </span> <p>Do not Bleach</p>
                  </li>
                </ul>
              </Accordion>

              <Accordion title='deliveries & returns' icon={TruckIcon}>
                <ul>
                  <li>
                    <span>- </span> <p>All orders sent via DHL Express (2-4 Working Days) tracked services</p>
                  </li>
                  <li>
                    <span>- </span> <p>Orders over $199 - Free Shipping</p>
                  </li>
                  <li>
                    <span>- </span> <p>Orders under $199 - $9.99 USD</p>
                  </li>
                  <li>
                    <span>- </span> <p>Returns are available - see Returns Policy</p>
                  </li>
                  <li>
                    <span>- </span> <p>No additional import duty or tax fees applicable, pay once only.</p>
                  </li>
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
