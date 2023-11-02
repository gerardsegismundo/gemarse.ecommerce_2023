import express from 'express'

import { register, login, getAccessToken, getCurrentUser, logout } from '../controllers/auth.js'
import protect from '../middleware/protect.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/access_token', getAccessToken)
router.post('/current_user', protect, getCurrentUser)
router.post('/logout', logout)

export default router
