import React from 'react'
import { round } from 'lodash'
import CustomInputNumber from './CustomInputNumber'
import translateSize from '../utils/helpers/translateSizes'

const CartItem = ({ item, onRemove }) => {
  const itemTotalPrice = round(item.price * item.quantity, 2)

  return (
    <div className='item' key={item._id}>
      <img src={item.imgSrc} alt={item.imgSrc} loading='lazy' />
      <div className='item-details'>
        <p className='name'>{item.name}</p>
        {item.type !== 'accessories' && <p className='size'>{translateSize(item.size)}</p>}
        <p className='price'>${itemTotalPrice.toFixed(2)}</p>
        <div className='d-flex'>
          <CustomInputNumber max={item.stock} itemId={item._id} value={item.quantity} />
          <button onClick={() => onRemove(item._id, itemTotalPrice, item.quantity)}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
