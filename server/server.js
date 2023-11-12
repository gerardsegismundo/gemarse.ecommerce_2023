import express from 'express'
import path from 'path'
import cors from 'cors'
import 'dotenv/config'
import ExpressMongoSanitize from 'express-mongo-sanitize'

import connectDB from './config/db.js'
import productsRoute from './routes/products.route.js'
import stripeRoute from './routes/stripe.route.js'
import authRoute from './routes/auth.route.js'

const app = express()

app.use(cors())
app.use(ExpressMongoSanitize())
app.use(express.json())

connectDB()

app.get('/api/v1/', (req, res) => {
  res.send('BACKEND RESPONDED!')
})

app.use('/api/v1/products', productsRoute)
app.use('/api/v1/stripe', stripeRoute)
app.use('/api/v1/auth', authRoute)

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.dirname(new URL(import.meta.url).pathname)

  app.use(express.static('client/build'))
  app.get('*', (_req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Listening to port ${PORT}`))
