import Product from '../models/Product.model.js'
import asyncHandler from '../middleware/async.js'

const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find()
  res.json(products)
})

export { getProducts }
