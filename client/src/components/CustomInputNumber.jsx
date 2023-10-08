import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateItemQuantity } from '../redux/actions'

const CustomInputNumber = ({ max, value, itemId }) => {
  const [updatedValue, setUpdatedValue] = useState(value)
  const dispatch = useDispatch()

  const handleIncrement = () => updatedValue < max && setUpdatedValue(updatedValue + 1)
  const handleDecrement = () => updatedValue > 1 && setUpdatedValue(updatedValue - 1)

  const handleBlur = () => {
    if (updatedValue !== value) {
      dispatch(updateItemQuantity({ itemId, newQuantity: updatedValue }))
    }
  }

  return (
    <div className='quantity'>
      <input
        type='number'
        min='1'
        max={max}
        step='1'
        value={updatedValue}
        onChange={e => setUpdatedValue(parseInt(e.target.value, 10))}
        onBlur={handleBlur}
      />
      <div className='quantity-nav'>
        <div className='quantity-button quantity-up' onClick={handleIncrement}>
          +
        </div>
        <div className='quantity-button quantity-down' onClick={handleDecrement}>
          -
        </div>
      </div>
    </div>
  )
}

export default CustomInputNumber
