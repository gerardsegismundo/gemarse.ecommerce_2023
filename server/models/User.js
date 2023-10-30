import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name.']
    },
    email: {
      type: String,
      required: [true, 'Please add an email.'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password.'],
      minlength: 6,
      select: false
    },
    access_type: {
      type: String,
      default: 'local'
    }
  },
  { timestamps: true }
)

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
