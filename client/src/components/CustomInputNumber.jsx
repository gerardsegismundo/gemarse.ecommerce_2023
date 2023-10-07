import { useState } from 'react'

const CustomInputNumber = ({ max }) => {
  const [value, setValue] = useState(1)

  const handleIncrement = () => {
    if (value < max) setValue(value + 1)
  }

  const handleDecrement = () => {
    console.log('WOW')
    if (value > 1) setValue(value - 1)
  }

  return (
    <div className='quantity'>
      <input
        type='number'
        min='1'
        max={max}
        step='1'
        value={value}
        onChange={e => setValue(parseInt(e.target.value, 10))}
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
