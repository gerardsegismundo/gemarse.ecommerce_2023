import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InputGroup } from '../components/'

import { validateLogin } from '../utils/helpers/validations'
import { useSelector, useDispatch } from 'react-redux'
import { loginAsync, logoutAsync } from '../redux/thunk/authThunk'

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

  // useEffect(() => {
  //   if (isAuthenticated) navigate('/account/dashboard')
  // }, [isAuthenticated])

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignIn = async e => {
    // const errors = validateLogin(formData)
    // if (errors) return setError(errors)

    // dispatch(loginAsync())
    dispatch(loginAsync({ formData, setError }))
  }

  const handleLogout = () => dispatch(logoutAsync())

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
          <button className='btn-dark bordered' onClick={handleLogout}>
            LOgout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
