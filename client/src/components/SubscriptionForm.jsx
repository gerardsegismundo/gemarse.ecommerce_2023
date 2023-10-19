import React, { useState } from 'react'
import InputRadioGroup from './InputRadioGroup'

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    gender: ''
  })

  const handleOnChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <div className='form-group'>
      <div className='input-group'>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleOnChange}
          data-filled={formData.email.length > 0}
        />
        <label htmlFor='email'>Enter your email</label>
      </div>
      <p>Which products are you interested in?</p>
      <div className='flex-wrapper'>
        <InputRadioGroup value='male' onChange={handleOnChange} checked={formData.gender === 'male'} />
        <InputRadioGroup value='female' onChange={handleOnChange} checked={formData.gender === 'female'} />
        <InputRadioGroup value='both' onChange={handleOnChange} checked={formData.gender === 'both'} />
        <button onClick={handleOnSubmit}>submit</button>
      </div>
    </div>
  )
}

export default SubscriptionForm
