import mongoose from 'mongoose'

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  console.log('Connected to mongodb...')
}

export default connectDB
