import { ReactComponent as CloseIcon } from '../assets/svg/close.svg'

import { useSelector, useDispatch } from 'react-redux'
import { setCartDrawerIsOpen } from '../redux/actions'

import trendingData from '../assets/data/trendingData'
import CustomInputNumber from './CustomInputNumber'
import useDisableScroll from '../utils/hooks/useDisableScroll'

const CartDrawer = () => {
  const { cartDrawerIsOpen } = useSelector(state => state.ui)
  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleCloseCart = () => dispatch(setCartDrawerIsOpen(false))

  useDisableScroll()

  return (
    // <div className='cart-drawer' data-is-open={true}>
    <div className='cart-drawer' data-is-open={cartDrawerIsOpen}>
      <div className='drawer'>
        <div className='cart-header'>
          <h4>My Cart</h4>
          <CloseIcon onClick={handleCloseCart} />
        </div>
        <div className='cart-items'>
          {
            cartItems &&
              cartItems.map(c => (
                <div className='item' key={c.id}>
                  <img src={c.imgSrc} alt={c.imgSrc} loading='lazy' />
                  <div className='item-details'>
                    <p className='name'>{c.name}</p>
                    <p className='size'>Extra Small</p>
                    {/* {c.type !== 'accessories' && <p className='size'>{c.size}</p>} */}
                    <p className='price'>${c.price}</p>
                    <div className='d-flex'>
                      {/* <input type='number' value='1' name='quantity' max={c.quantity} /> */}
                      <CustomInputNumber max={c.quantity} />
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              ))
            // trendingData.map(c => (
            //   <div className='item' key={c.id}>
            //     <img src={c.imgSrc} alt={c.imgSrc} loading='lazy' />
            //     <div className='item-details'>
            //       <p className='name'>{c.name}</p>
            //       <p className='size'>Extra Small</p>
            //       {/* {c.type !== 'accessories' && <p className='size'>{c.size}</p>} */}
            //       <p className='price'>${c.price}</p>
            //       <div className='d-flex'>
            //         {/* <input type='number' value='1' name='quantity' max={c.quantity} /> */}
            //         <CustomInputNumber max={c.max} />
            //         <button>Remove</button>
            //       </div>
            //     </div>
            //   </div>
            // ))
          }
        </div>

        <div className='cart-footer'>
          <div className='d-flex'>
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
