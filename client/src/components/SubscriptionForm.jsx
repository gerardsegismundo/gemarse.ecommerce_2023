import React, { useState } from 'react'
import InputRadioGroup from './InputRadioGroup'
import InputGroup from './InputGroup'
import { validateEmail } from '../utils/helpers/validations'

const SubscriptionForm = ({ light }) => {
  const [formData, setFormData] = useState({
    email: '',
    gender: ''
  })

  const [error, setError] = useState({
    email: '',
    gender: ''
  })

  const handleOnChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setError({ ...error, [name]: '' })
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    const { email, gender } = formData

    if (!email || !gender) {
      setError({
        ...error,
        email: !email && 'Email is required.',
        gender: !gender && 'Please chose a gender'
      })
    }

    if (!validateEmail(email)) {
      return setError({ ...error, email: 'Invalid email.' })
    }

    // *TODO SUBMIT TO BACKEND
  }

  return (
    <div className='subscription-form'>
      <InputGroup
        type='email'
        name='email'
        label='email'
        value={formData.email}
        onChange={handleOnChange}
        dataIsFilled={formData.email.length > 0}
        error={error.email}
        light={light}
      />

      <div className='radio-group'>
        <p>Which products are you interested in?</p>
        <div className='flex-wrapper'>
          <InputRadioGroup value='male' onChange={handleOnChange} checked={formData.gender === 'male'} />
          <InputRadioGroup value='female' onChange={handleOnChange} checked={formData.gender === 'female'} />
          <InputRadioGroup value='both' onChange={handleOnChange} checked={formData.gender === 'both'} />
          <button className='btn' onClick={handleOnSubmit}>
            subscribe
          </button>
        </div>
        {error.gender && <p className='error-msg'>{error.gender}</p>}
      </div>
    </div>
  )
}

export default SubscriptionForm
