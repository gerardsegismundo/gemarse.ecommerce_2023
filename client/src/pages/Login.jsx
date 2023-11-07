import { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputGroup } from '../components/'

import { validateLogin } from '../utils/helpers/validations'
import { useDispatch } from 'react-redux'
import { loginAsync } from '../redux/thunk/authThunk'
import useRedirectIfAuthenticated from '../utils/hooks/useRedirectIfAuthenticated'

const Login = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: 'gerardmartinsegismundo@protonmail.com',
    password: 'Putanginamo123!!'
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
