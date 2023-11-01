import jwt from 'jsonwebtoken'
import User from '../models/User'

async function protect(req, res, next) {
  if (!req.headers.authorization && !req.headers.authorization.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const token = req.headers.autorization.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS)
    req.user = await User.findById(decoded.id)

    next()
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' })
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' })
    } else {
      return res.status(500).json({ message: 'Internal server error' })
    }
  }
}

export default protect
