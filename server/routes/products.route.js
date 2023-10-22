import express from 'express'
import { getTrendingProducts } from '../controllers/products.js'

const router = express.Router({ mergeParams: true })

router.route('/trending-products').get(getTrendingProducts)

export default router
