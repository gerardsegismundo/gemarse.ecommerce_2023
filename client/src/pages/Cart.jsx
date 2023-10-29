import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, totalPrice, itemsInCart } = useSelector(state => state.cart)

  return (
    <div className='cart-page'>
      <div className='container'>
        <div className='cart-items'>
          {cartItems.length === 0 ? (
            <p className='is-empty'>Cart is empty</p>
          ) : (
            <>
              <h2>Shopping Cart</h2>
              {cartItems.map(item => (
                <CartItem key={item._id + item.name} item={item} />
              ))}

              <div className='subtotal'>
                <p>
                  Subtotal:({itemsInCart} {`${itemsInCart > 1 ? ' items' : ' item'}`})&nbsp;
                </p>
                <p className='total-price'>{totalPrice > 0 && '$' + totalPrice.toFixed(2)}</p>
              </div>

              <Link to='/checkout' className='btn-dark bordered'>
                Proceed to Checkout
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart