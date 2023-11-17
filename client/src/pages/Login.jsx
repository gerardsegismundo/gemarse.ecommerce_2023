import { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputGroup } from '../components/'
import { InfinitySpin } from 'react-loader-spinner'

import { validateLogin } from '../utils/helpers/validations'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsync } from '../redux/thunk/authThunk'
import useRedirectIfAuthenticated from '../utils/hooks/useRedirectIfAuthenticated'

const Login = () => {
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.auth)

  const isLoggingIn = status === 'loading'

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })

  useRedirectIfAuthenticated()

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignIn = async e => {
    const errors = validateLogin(formData)
    if (errors) return setError(errors)

    dispatch(loginAsync({ formData, setError }))
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
          {/* <Link to='/forgot-password' className='forgot-password'>
            Forgot password?
          </Link> */}
          <button className='sign-up-btn btn-dark bordered' onClick={handleSignIn}>
            Sign In
            {isLoggingIn && <InfinitySpin width='100' color='#4fa94d' />}
          </button>
          <p className='register-msg'>If you have not created an account yet, please register here:</p>
          <Link to='/account/register' className='sign-up-btn btn-dark bordered'>
            Create An Account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
