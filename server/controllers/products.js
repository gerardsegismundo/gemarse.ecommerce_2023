import TrendingProduct from '../models/TrendingProduct.js'
import asyncHandler from '../middleware/async.js'

const getTrendingProducts = asyncHandler(async (req, res, next) => {
  try {
    const products = await TrendingProduct.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error.' })
  }
})

export { getTrendingProducts }
