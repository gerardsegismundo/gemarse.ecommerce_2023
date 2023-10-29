import asyncHandler from '../middleware/async.js'

const stripeCheckout = asyncHandler(async (req, res, next) => {
  console.log(req.body)
  res.send('SUCESS?')
  // const line_items = req.body.cartItems.map(item => {
  //   return {
  //     price_data: {
  //       currency: 'usd',
  //       product_data: {
  //         name: item.name,
  //         images: [item.image],
  //         description: item.desc,
  //         // we can include anything right here
  //         metadata: {
  //           idam: item._id
  //         }
  //       },
  //       // convert cents
  //       unit_amount: item.price * 100
  //     },
  //     quantity: item.cartQuantity
  //   }
  // })

  // const session = await stripe.checkout.sessions.create({
  //   shipping_address_collection: {
  //     allowed_countries: ['US', 'CA', 'EU']
  //   },
  //   shipping_options: [
  //     {
  //       shipping_rate_data: {
  //         type: 'fixed_amount',
  //         fixed_amount: {
  //           amount: 0,
  //           currency: 'usd'
  //         },
  //         display_name: 'Free shipping',
  //         delivery_estimate: {
  //           minimum: {
  //             unit: 'business_day',
  //             value: 5
  //           },
  //           maximum: {
  //             unit: 'business_day',
  //             value: 7
  //           }
  //         }
  //       }
  //     },
  //     {
  //       shipping_rate_data: {
  //         type: 'fixed_amount',
  //         fixed_amount: {
  //           amount: 0,
  //           currency: 'usd'
  //         },
  //         display_name: 'Next day air',
  //         delivery_estimate: {
  //           minimum: {
  //             unit: 'business_day',
  //             value: 1
  //           },
  //           maximum: {
  //             unit: 'business_day',
  //             value: 1
  //           }
  //         }
  //       }
  //     }
  //   ],
  //   phone_number_collection: {
  //     enabled: true
  //   },
  //   line_items,
  //   mode: 'payment',
  //   success_url: `${process.env.CLIENT_URL}/checkout-success`,
  //   cancel_url: `${process.env.CLIENT_URL}/cart`
  // })

  // res.send({ url: session.url })
})

export { stripeCheckout }
