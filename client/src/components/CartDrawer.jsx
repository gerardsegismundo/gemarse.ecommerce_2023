import React from 'react'
import { ReactComponent as CloseIcon } from '../assets/svg/close.svg'

import { useSelector, useDispatch } from 'react-redux'
import { setCartDrawerIsClosed } from '../redux/counterSlice'

const CartDrawer = () => {
  const cartDrawerIsClosed = useSelector(state => state.counter.cartDrawerIsClosed)
  const dispatch = useDispatch()

  const handleCloseCart = () => dispatch(setCartDrawerIsClosed(true))

  return (
    <div className='cart-drawer' data-is-closed={cartDrawerIsClosed}>
      <div className='drawer'>
        <div className='cart-header'>
          <h4>My Cart</h4>
          <CloseIcon onClick={handleCloseCart} />
        </div>
        <div className='cart-items'></div>

        <div className='cart-footer'>
          <div className='flex-wrapper'>
            <h4>Total</h4>
            <p>$456.00</p>
          </div>
          <button className='btn-dark'>Proceed to Checkout</button>
          <button className='btn-light'>Your Cart</button>
        </div>
      </div>
      <div className='dark-overlay' onClick={handleCloseCart}></div>
    </div>
  )
}

export default CartDrawer
