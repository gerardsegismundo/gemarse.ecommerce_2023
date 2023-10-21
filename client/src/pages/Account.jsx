import { useState } from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  return (
    <div className='account'>
      <div className='container'>
        <div className='sign-in'>
          <h2>Sign In</h2>
          <form className='sign-in-form'>
            <div className='md-input-group'>
              <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleOnChange}
                data-filled={formData.email.length > 0}
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='md-input-group'>
              <input
                type='password'
                name='password'
                onChange={handleOnChange}
                value={formData.password}
                data-filled={formData.password.length > 0}
              />
              <label htmlFor='password'>Password</label>
            </div>
          </form>
          <Link>Forgot password?</Link>
          <button className='sign-in-btn btn-light '>Sign In</button>
          <p>If you have not created an account yet, please register here:</p>
          <button className='sign-up-btn btn-dark'>Create An Account</button>
        </div>
      </div>
    </div>
  )
}

export default Account
