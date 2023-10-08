function findItemIndexById(cartItems, itemId) {
  return cartItems.findIndex(item => item.id === itemId)
}

export default findItemIndexById
