import express from 'express'
import path from 'path'
import cors from 'cors'
import connectDB from './config/db.js'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.dirname(new URL(import.meta.url).pathname)

  app.use(express.static('client/build'))
  app.get('*', (_req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Listening to port ${PORT}`))
