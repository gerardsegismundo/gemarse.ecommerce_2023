import axios from 'axios'
import { useSelector } from 'react-redux'

const PaymentButton = () => {
  const { cartItems } = useSelector(state => state.cart)

  const handleCheckout = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/stripe/create-checkout-session`, {
        cartItems
      })
      console.log({ response })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button className='btn-dark bordered' onClick={handleCheckout}>
      Checkout
    </button>
  )
}

export default PaymentButton
