import express from 'express'
import cors from 'cors'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const app = express()
app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (_req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Listening to port ${PORT}`))
