import React from 'react'

const CarouselItem = ({ props }) => {
  const { name, imgSrc, color, price, type } = props

  return (
    <div className='carousel-item'>
      <img src={imgSrc} alt={imgSrc} draggable='false' />

      <div className='quick-add-wrapper'>
        <div className='quick-add'>
          <p className='message'>Quick add - ${price}</p>
          {type !== 'accessories' && (
            <div className='button-group'>
              <button className='btn-size'>XS</button>
              <button className='btn-size'>S</button>
              <button className='btn-size'>M</button>
              <button className='btn-size'>L</button>
              <button className='btn-size'>XL</button>
            </div>
          )}
          <button className='btn-dark'>Add to Cart</button>
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
