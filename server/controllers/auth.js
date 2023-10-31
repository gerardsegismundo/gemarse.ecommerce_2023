import User from '../models/User.js'

async function register(req, res) {
  const { email, password } = req.body

  try {
    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const newUser = new User({ email, password })

    await newUser.save()

    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Registration failed' })
  }
}

export { register }
