import Stripe from 'stripe'

const stripe = Stripe(process.env.STRIPE_KEY)

async function stripeCheckout(req, res) {
  const line_items = req.body.cartItems.map(item => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [`${process.env.CLIENT_URL + item.imgSrc}`],
          description: item.desc,

          metadata: {
            idam: item._id
          }
        },

        unit_amount: item.price * 100
      },
      quantity: item.quantity
    }
  })

  try {
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ['US', 'CA']
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd'
            },
            display_name: 'Free shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5
              },
              maximum: {
                unit: 'business_day',
                value: 7
              }
            }
          }
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd'
            },
            display_name: 'Next day air',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1
              },
              maximum: {
                unit: 'business_day',
                value: 1
              }
            }
          }
        }
      ],
      phone_number_collection: {
        enabled: true
      },
      line_items,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`
    })

    res.send({ url: session.url })
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: 'An error occurred during checkout' })
  }
}

export { stripeCheckout }
