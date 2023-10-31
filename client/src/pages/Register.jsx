import { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputGroup } from '../components/'
import axios from 'axios'
import { validateRegister } from '../utils/helpers/validations'

const Register = () => {
  const [formData, setFormData] = useState({
    email: 'gerardmartinsegismundo@protonmail.com',
    password: 'Putanginamo123!!',
    confirmPassword: 'Putanginamo123!!'
  })

  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError({ ...error, [e.target.name]: '' })
  }

  const handleSignUp = async e => {
    const errors = validateRegister(formData)
    if (errors) return setError(errors)

    try {
      const payload = {
        email: formData.email,
        password: formData.password
      }

      const response = await axios.post(`${process.env.REACT_APP_API}/auth/register`, payload)

      console.log(response)
      // @TODO to my account page logged in account
    } catch (error) {
      if (error.response.data.name) {
        setError({ ...error, [error.response.data.name]: error.response.data.message })
      }
      console.log(error)
    }
  }

  return (
    <div className='register-page'>
      <div className='container'>
        <div className='sign-up'>
          <h2>Create account</h2>
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

            <InputGroup
              type='password'
              name='confirmPassword'
              label='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleOnChange}
              dataIsFilled={formData.confirmPassword.length > 0}
              error={error.confirmPassword}
            />
          </form>
          <button className='sign-up-btn btn-dark bordered' onClick={handleSignUp}>
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
