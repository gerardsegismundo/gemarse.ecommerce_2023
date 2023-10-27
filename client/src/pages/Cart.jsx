import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart)

  console.log(cartItems)
  return (
    <div className='cart-page'>
      <div className='container'>
        {cartItems.length === 0 ? (
          <p className='is-empty'>Cart is empty</p>
        ) : (
          <ul className='cart-items'>
            {cartItems.map(item => (
              <>
                <li key={item._id} className='item'>
                  <img src={item.imgSrc} alt={item.name} />
                  {item.name}
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Cart
