import { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputGroup } from '../components/'

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
    console.log(formData)
  }

  return (
    <div className='account-page'>
      <div className='container'>
        <div className='sign-in'>
          <h2>Welcome back</h2>
          <form className='sign-in-form'>
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
          <button className='sign-in-btn btn-dark '>Sign In</button>
          <p>If you have not created an account yet, please register here:</p>
          <button className='sign-up-btn btn-dark'>Create An Account</button>
        </div>
      </div>
    </div>
  )
}

export default Account
