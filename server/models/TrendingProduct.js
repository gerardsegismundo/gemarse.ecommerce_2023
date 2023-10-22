import mongoose from 'mongoose'

const trendingProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name.']
  },
  imgSrc: {
    type: String,
    required: [true, 'Please add an image source.']
  },
  color: {
    type: String,
    required: [true, 'Please add a color.']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price.']
  },
  category: {
    type: String,
    required: [true, 'Please add a category.']
  },
  type: {
    type: String,
    required: [true, 'Please add a type.']
  },
  stock: {
    type: mongoose.Schema.Types.Mixed,
    required: [true, 'Please add a stock information.']
  }
})

const TrendingProduct = mongoose.model('TrendingProduct', trendingProductSchema)

export default TrendingProduct
