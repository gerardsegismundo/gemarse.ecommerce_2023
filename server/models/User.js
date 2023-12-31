import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
      minlength: 6
    },
    access_type: {
      type: String,
      default: 'local'
    }
  },
  { timestamps: true }
)

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next()

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.methods.getSignedToken = function (jwtSecret, expiresIn) {
  return jwt.sign({ id: this._id }, jwtSecret, {
    expiresIn: expiresIn * 24 * 60 * 60
  })
}

const User = mongoose.model('User', UserSchema)

export default User
