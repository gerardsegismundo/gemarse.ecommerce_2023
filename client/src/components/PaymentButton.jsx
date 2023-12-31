import { useSelector } from 'react-redux'
import axios from 'axios'

const PaymentButton = () => {
  const { cartItems } = useSelector(state => state.cart)

  const handleCheckout = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/stripe/create-checkout-session`, {
        cartItems
      })
      if (response.data.url) {
        window.location.href = response.data.url
      }
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
