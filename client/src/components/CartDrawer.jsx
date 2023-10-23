import { ReactComponent as CloseIcon } from '../assets/svg/close.svg'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'

import { setCartDrawerIsOpen, removeFromCart } from '../redux/actions'

import useDisableScroll from '../utils/hooks/useDisableScroll'

const CartDrawer = () => {
  const { cartDrawerIsOpen } = useSelector(state => state.ui)
  const { totalPrice } = useSelector(state => state.cart)

  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleClose = () => dispatch(setCartDrawerIsOpen(false))
  const handleRemove = (id, itemTotalPrice, itemQuantity) => {
    dispatch(removeFromCart({ id, itemTotalPrice, itemQuantity }))
  }

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
            cartItems.map(item => <CartItem key={item.id + item.name} item={item} onRemove={handleRemove} />)
          )}
        </div>

        <div className='cart-footer'>
          <div className='d-flex'>
            <h4>Total</h4>
            <p>{totalPrice > 0 && totalPrice.toFixed(2)}</p>
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
