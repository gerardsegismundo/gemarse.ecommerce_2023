import User from '../models/User.js'

const cookieOptions = {
  httpOnly: true,
  path: '/api/auth/access_token',
  expires: new Date(Date.now() + process.env.JWT_EXPIRE_COOKIE * 24 * 60 * 60 * 1000),
  secure: process.env.NODE_ENV === 'production' ? true : false
}

async function register(req, res) {
  const { email, password } = req.body

  try {
    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(409).json({ name: 'email', message: 'User already exists.' })
    }

    const newUser = new User({ email, password })

    await newUser.save()

    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Registration failed'
    })
  }
}

async function login(req, res) {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ name: 'email', message: 'User not found.' })
    }

    const isMatch = await user.matchPassword(password)

    if (!isMatch) {
      res.status(401).json({
        name: 'password',
        message: 'Incorrect password.'
      })
    }

    const refreshToken = user.getRefreshToken()
    const accessToken = user.getAccessToken()

    res.cookie('refreshToken', refreshToken, cookieOptions)

    res.json({
      refreshToken,
      accessToken,
      expiresIn: process.env.JWT_EXPIRE_REFRESH
    })
  } catch (error) {
    console.log(error)
  }
}

export { register, login }
