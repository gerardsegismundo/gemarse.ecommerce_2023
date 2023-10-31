import { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputGroup } from '../components/'
import axios from 'axios'

const Account = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignIn = async e => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/auth/sign-in`, {
        ...formData
      })

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='account-page'>
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
          <button className='sign-up-btn btn-dark' onClick={handleSignIn}>
            Sign In
          </button>
          <p>If you have not created an account yet, please register here:</p>
          <button className='sign-up-btn btn-dark'>Create An Account</button>
        </div>
      </div>
    </div>
  )
}

export default Account
