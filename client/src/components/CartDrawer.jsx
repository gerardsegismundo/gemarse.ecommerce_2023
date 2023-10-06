import React from 'react'
import { ReactComponent as CloseIcon } from '../assets/svg/close.svg'

const CartDrawer = () => {
  return (
    <div className='cart-drawer'>
      <div className='cart-header'>
        <h4>My Cart</h4>
        <CloseIcon />
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
  )
}

export default CartDrawer
