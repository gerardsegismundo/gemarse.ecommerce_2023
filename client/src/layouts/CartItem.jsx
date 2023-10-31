import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { round } from 'lodash'
import { removeFromCart } from '../redux/actions'
import translateSize from '../utils/helpers/translateSizes'
import CustomInputNumber from '../components/CustomInputNumber'

const CartItem = ({ item }) => {
  const itemTotalPrice = round(item.price * item.quantity, 2)
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeFromCart({ _id: item._id, itemTotalPrice, itemQuantity: item.quantity }))
  }

  return (
    <div className='item' key={item._id}>
      <img src={item.imgSrc} alt={item.imgSrc} loading='lazy' />
      <div className='item-details'>
        <p className='name'>{item.name}</p>
        {item.type !== 'accessories' && <p className='size'>{translateSize(item.size)}</p>}
        <p className='price'>${itemTotalPrice.toFixed(2)}</p>
        <div className='d-flex'>
          <CustomInputNumber max={item.stock} itemId={item._id} value={item.quantity} />
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default memo(CartItem)
