import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InputGroup } from '../components/'
import axios from 'axios'
import { validateLogin } from '../utils/helpers/validations'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    email: 'gerardmartinsegismundo@protonmail.com',
    password: 'Putanginamo123!!'
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/account/dashboard')
  }, [isAuthenticated])

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignIn = async e => {
    const errors = validateLogin(formData)
    if (errors) return setError(errors)

    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/auth/login`, {
        ...formData
      })

      //   {
      //     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDFmOGNiNTk2MWZjNmY4M2QzMWM1MiIsImlhdCI6MTY5ODgyMjU5MiwiZXhwIjoxNjk4ODIyNTkyfQ.RHNK74kRoo6mgl9usmN0HZdZXB2AUnfy_Z9BskbnfFo",
      //     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDFmOGNiNTk2MWZjNmY4M2QzMWM1MiIsImlhdCI6MTY5ODgyMjU5MiwiZXhwIjoxNjk4ODIyNTkyfQ.RHNK74kRoo6mgl9usmN0HZdZXB2AUnfy_Z9BskbnfFo",
      //     "expiresIn": "30"
      // }

      console.log(response)
      // dispatch(login())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login-page'>
      <div className='container'>
        <div className='sign-up'>
          <h2>Welcome back</h2>
          <form className='sign-up-form'>
            <InputGroup
              type='email'
              name='email'
              label='email'
              value={formData.email}
              onChange={handleOnChange}
              dataIsFilled={formData.email.length > 0}
              error={error.email}
            />

            <InputGroup
              type='password'
              name='password'
              label='password'
              value={formData.password}
              onChange={handleOnChange}
              dataIsFilled={formData.password.length > 0}
              error={error.password}
            />
          </form>
          <Link to='/forgot-password'>Forgot password?</Link>
          <button className='sign-up-btn btn-dark bordered' onClick={handleSignIn}>
            Sign In
          </button>
          <p>If you have not created an account yet, please register here:</p>
          <button className='sign-up-btn btn-dark bordered'>Create An Account</button>
        </div>
      </div>
    </div>
  )
}

export default Login
