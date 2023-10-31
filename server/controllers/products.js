import Product from '../models/Product.js'

async function getProducts(req, res) {
  try {
    const products = await Product.find()
  } catch (error) {
    res.json(products)
  }
}

export { getProducts }
