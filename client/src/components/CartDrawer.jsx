import { ReactComponent as CloseIcon } from '../assets/svg/close.svg'
import { useSelector, useDispatch } from 'react-redux'
import { round } from 'lodash'

import { setCartDrawerIsOpen, removeFromCart } from '../redux/actions'

import CustomInputNumber from './CustomInputNumber'
import useDisableScroll from '../utils/hooks/useDisableScroll'
import translateSize from '../utils/helpers/translateSizes'

const CartDrawer = () => {
  const { cartDrawerIsOpen } = useSelector(state => state.ui)
  const { totalPrice } = useSelector(state => state.cart)

  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleClose = () => dispatch(setCartDrawerIsOpen(false))
  const handleRemove = (id, itemTotal) => dispatch(removeFromCart({ id, itemTotal }))

  useDisableScroll(cartDrawerIsOpen)

  return (
    <div className='cart-drawer' data-is-open={cartDrawerIsOpen}>
      <div className='drawer'>
        <div className='cart-header'>
          <h4>My Cart</h4>
          <CloseIcon onClick={handleClose} />
        </div>
        <div className='cart-items'>
          {cartItems.length === 0 ? (
            <p className='is-empty'>Cart is empty</p>
          ) : (
            cartItems.map(c => {
              const itemTotal = round(c.price * c.quantity, 2)

              return (
                <div className='item' key={c.id}>
                  <img src={c.imgSrc} alt={c.imgSrc} loading='lazy' />
                  <div className='item-details'>
                    <p className='name'>{c.name}</p>
                    {c.type !== 'accessories' && <p className='size'>{translateSize(c.size)}</p>}
                    <p className='price'>${itemTotal}</p>
                    <div className='d-flex'>
                      <CustomInputNumber max={c.stock} itemId={c.id} value={c.quantity} />
                      <button onClick={() => handleRemove(c.id, itemTotal)}>Remove</button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div className='cart-footer'>
          <div className='d-flex'>
            <h4>Total</h4>
            <p>{totalPrice > 0 && totalPrice}</p>
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
