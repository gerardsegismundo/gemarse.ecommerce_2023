import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
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
  isTrending: {
    type: Boolean,
    required: [true, 'Please add isTrending.']
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

const ProductModel = mongoose.model('TrendingProduct', ProductSchema)

export default ProductModel
