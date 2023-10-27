import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart)

  console.log(cartItems)
  return (
    <div className='cart-page'>
      <div className='container'>
        <ul className='cart-items'>
          {cartItems &&
            cartItems.map(item => (
              <>
                <li key={item._id} className='item'>
                  <img src={item.imgSrc} alt={item.name} />
                  {item.name}
                </li>
              </>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Cart
