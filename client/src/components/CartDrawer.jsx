import { ReactComponent as CloseIcon } from '../assets/svg/close.svg'

import { useSelector, useDispatch } from 'react-redux'
import { setCartDrawerIsOpen, removeFromCart, updateItemQuantity } from '../redux/actions'

import CustomInputNumber from './CustomInputNumber'
import useDisableScroll from '../utils/hooks/useDisableScroll'
import translateSize from '../utils/helpers/translateSizes'

const CartDrawer = () => {
  const { cartDrawerIsOpen } = useSelector(state => state.ui)
  const { total } = useSelector(state => state.cart)

  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleClose = () => dispatch(setCartDrawerIsOpen(false))
  const handleRemove = id => dispatch(removeFromCart(id))

  useDisableScroll(cartDrawerIsOpen)

  return (
    <div className='cart-drawer' data-is-open={cartDrawerIsOpen}>
      <div className='drawer'>
        <div className='cart-header'>
          <h4>My Cart</h4>
          <CloseIcon onClick={handleClose} />
        </div>
        <div className='cart-items'>
          {cartItems &&
            cartItems.map(c => (
              <div className='item' key={c.id}>
                <img src={c.imgSrc} alt={c.imgSrc} loading='lazy' />
                <div className='item-details'>
                  <p className='name'>{c.name}</p>
                  {c.type !== 'accessories' && <p className='size'>{translateSize(c.size)}</p>}
                  <p className='price'>${(c.price * c.quantity).toFixed(2)}</p>
                  <div className='d-flex'>
                    <CustomInputNumber max={c.stock} value={c.quantity} itemId={c.id} />
                    <button onClick={() => handleRemove(c.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className='cart-footer'>
          <div className='d-flex'>
            <h4>Total</h4>
            <p>{total}</p>
          </div>
          <button className='btn-dark'>Proceed to Checkout</button>
          <button className='btn-light'>Your Cart</button>
        </div>
      </div>
      <div className='dark-overlay' onClick={handleClose}></div>
    </div>
  )
}

export default CartDrawer
