import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { incrementItem, decrementItem } from '../redux/actions'

const CustomInputNumber = ({ max, value, itemId }) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(value)

  const handleIncrement = () => {
    if (inputValue < max) {
      dispatch(incrementItem(itemId))
      setInputValue(inputValue + 1)
    }
  }

  const handleDecrement = () => {
    if (inputValue > 1) {
      dispatch(decrementItem(itemId))
      setInputValue(inputValue - 1)
    }
  }

  const handleOnChange = e => {
    const newValue = parseInt(e.target.value, 10)
    if (!isNaN(newValue) && newValue >= 1 && newValue <= max) {
      setInputValue(newValue)
    }
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className='quantity'>
      <input type='number' min='1' max={max} step='1' value={value} onChange={handleOnChange} />
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
