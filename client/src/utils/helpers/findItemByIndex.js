function findItemIndexById(cartItems, itemId) {
  return cartItems.findIndex(item => item._id === itemId)
}

export default findItemIndexById
