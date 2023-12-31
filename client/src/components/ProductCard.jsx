import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, setCartDrawerIsOpen } from '../redux/actions'
import SizeButton from './SizeButton'

const ProductCard = ({ props, isClickEnabled, isOnSlider = false }) => {
  const { _id, name, color, price, imgSrc, type, stock } = props

  const [isHovered, setIsHovered] = useState(false)
  const [selectedSize, setSelectedSize] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const isAccessories = type === 'accessories'

  const isSoldOut = (() => {
    if (isAccessories) return stock === 0
    return Object.values(stock).every(s => s === 0)
  })()

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  const handleSizeClick = size => setSelectedSize(size)

  const handleAddToCart = () => {
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

  const handleOnClick = e => {
    if (isClickEnabled || !isOnSlider) {
      const isQuickAddClicked = e.target.classList.contains('quick-add') || e.target.closest('.quick-add') !== null

      if (!isQuickAddClicked) {
        const slugifiedName = name.replace(/ /g, '-')
        navigate(`/product/${slugifiedName}`)
      }
    }
  }

  return (
    <div
      className='product-card'
      data-is-hover={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      {isSoldOut && <h3 className='sold-out'>SOLD OUT</h3>}
      <img src={imgSrc} alt={name} draggable='false' />
      <div className='quick-add-wrapper'>
        <div className='quick-add'>
          <p className='message'>Quick add - ${price}</p>
          {!isAccessories && !isSoldOut && (
            <div className='sizes'>
              {sizes.map(size => (
                <SizeButton
                  key={size}
                  size={size}
                  isSelected={selectedSize === size}
                  isOutOfStock={stock[size] === 0}
                  onClick={handleSizeClick}
                />
              ))}
            </div>
          )}
          <button className='btn-dark' onClick={handleAddToCart}>
            {isSoldOut ? 'Email me when back in stock' : 'Add to Cart'}
          </button>
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

export default ProductCard
