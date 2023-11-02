import { addToCart, removeFromCart, incrementItem, decrementItem } from './slice/cartSlice'
import { setCartDrawerIsOpen, setSubMenu } from './slice/uiSlice'
import { login, logout, setCurrentUser } from './slice/authSlice'

export {
  addToCart,
  removeFromCart,
  setCartDrawerIsOpen,
  incrementItem,
  decrementItem,
  setSubMenu,
  login,
  logout,
  setCurrentUser
}
