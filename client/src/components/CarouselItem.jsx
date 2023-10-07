import React, { useState } from 'react'
import SizeButton from './SizeButton'

const CarouselItem = ({ props }) => {
  const { name, imgSrc, color, price, type, quantity } = props
  const [isHovered, setIsHovered] = useState(false)
  const [selectedSize, setSelectedSize] = useState(null)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const handleSizeClick = size => setSelectedSize(size)

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  const isSoldOut = (() => {
    if (type === 'accessories') return quantity === 0
    return Object.values(quantity).every(qty => qty === 0)
  })()

  return (
    <div
      className='carousel-item'
      data-is-hover={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isSoldOut && <h3 className='sold-out'>SOLD OUT</h3>}
      <img src={imgSrc} alt={imgSrc} draggable='false' />
      <div className='quick-add-wrapper'>
        <div className='quick-add'>
          <p className='message'>Quick add - ${price}</p>
          {type !== 'accessories' && !isSoldOut && (
            <div className='sizes'>
              {sizes.map(size => (
                <SizeButton
                  key={size}
                  size={size}
                  isSelected={selectedSize === size}
                  isOutOfStock={quantity[size] === 0}
                  onClick={handleSizeClick}
                />
              ))}
            </div>
          )}
          <button className='btn-dark'>{isSoldOut ? 'Email me when back in stock' : 'Add to Cart'}</button>
        </div>
      </div>
      <div className='content'>
        <p className='name'>{name}</p>
        <p className='color'>{color}</p>
        <p className='price'>${price}</p>
      </div>
    </div>
  )
}

export default CarouselItem
