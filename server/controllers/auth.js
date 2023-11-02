import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const { JWT_EXPIRE_COOKIE, NODE_ENV, JWT_SECRET_ACCESS, JWT_SECRET_REFRESH, JWT_EXPIRE_REFRESH, JWT_EXPIRE_ACESS } =
  process.env

const cookieOptions = {
  httpOnly: true,
  path: '/api/api/v1/auth/access_token',
  expires: new Date(Date.now() + JWT_EXPIRE_COOKIE * 24 * 60 * 60 * 1000),
  secure: NODE_ENV === 'production' ? true : false
}

// @route   POST  /api/v1/auth/register
async function register(req, res) {
  const { email, password } = req.body

  try {
    const userExists = await User.findOne({ email })
    if (userExists) return res.status(409).json({ name: 'email', message: 'User already exists.' })

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

//  @route  POST  /api/v1/auth/login
async function login(req, res) {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ name: 'email', message: 'User not found.' })
    }

    console.log({ user })
    const isMatch = await user.matchPassword(password)

    if (!isMatch) {
      res.status(401).json({
        name: 'password',
        message: 'Incorrect password.'
      })
    }

    const refreshToken = user.getSignedToken(JWT_SECRET_REFRESH, JWT_EXPIRE_REFRESH)
    const accessToken = user.getSignedToken(JWT_SECRET_ACCESS, JWT_EXPIRE_ACESS)

    res.cookie('refreshToken', refreshToken, cookieOptions)

    res.json({
      refreshToken,
      accessToken,
      expiresIn: JWT_EXPIRE_REFRESH
    })
  } catch (error) {
    console.log(error)
  }
}

//  @route   GET  /api/v1/auth/access_token
async function getAccessToken(req, res) {
  const refreshToken = req.cookies.refreshToken

  if (!refreshToken) res.status(401).json({ message: 'User unauthorized.' })

  jwt.verify(refreshToken, JWT_SECRET_REFRESH, async (error, claims) => {
    if (error) return res.status(401).json({ message: error.response })

    try {
      const user = await User.findById(claims.id)
      const accessToken = user.getSignedToken(JWT_SECRET_ACCESS, JWT_EXPIRE_ACESS)
      res.json({ accessToken })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Access token retrieval failed' })
    }
  })
}

//  @route   GET  /api/v1/auth/current_user
//  @access  PRIVATE
async function getCurrentUser(req, res) {
  try {
    const user = await User.findById(req.user.id).select('-password')

    res.json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'User retrieval failed' })
  }
}

//  @route   POST   /api/v1/auth/logout
async function logout(req, res) {
  res.clearCookie('refreshToken', cookieOptions)

  res.status(200).json({
    message: 'User logged out.'
  })
}

export { register, login, getAccessToken, getCurrentUser, logout }
