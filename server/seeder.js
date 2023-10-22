import path from 'path'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { config } from 'dotenv'

import connectDB from './config/db.js'
import TrendingProduct from './models/TrendingProduct.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

config({ path: '../.env' })
connectDB()

const trendingProducts = JSON.parse(readFileSync(`${__dirname}/data/trendingProducts.json`, 'utf-8'))

const importData = async () => {
  try {
    await TrendingProduct.create(trendingProducts)
    console.log('Data imported...')
    process.exit()
  } catch (error) {
    console.error(error)
  }
}

const deleteData = async () => {
  try {
    await TrendingProduct.deleteMany()
    console.log('Data deleted...')
    process.exit()
  } catch (error) {
    console.error(error)
  }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
