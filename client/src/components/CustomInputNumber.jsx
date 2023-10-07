const CustomInputNumber = ({ max }) => {
  const [value, setValue] = useState(1)

  const handleIncrement = () => {
    if (value < max) {
      setValue(value + 1)
    }
  }

  const handleDecrement = () => {
    if (value > min) {
      setValue(value - 1)
    }
  }

  return (
    <div className='quantity'>
      <input type='number' min='1' max={max} step='1' value={value} onChange={e => setValue(e.target.value)} />
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
