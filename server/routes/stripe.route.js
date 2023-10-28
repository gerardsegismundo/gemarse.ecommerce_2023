import express from 'express'
import { stripeCheckout } from '../controllers/stripe.js'
const router = express.Router()

router.route('/create-checkout-session').get(stripeCheckout)

export default router
