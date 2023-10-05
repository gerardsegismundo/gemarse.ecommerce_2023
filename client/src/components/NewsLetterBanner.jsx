import React, { useState } from 'react'
import InputRadioGroup from './InputRadioGroup'

const NewsLetterBanner = () => {
  const [formData, setFormData] = useState({
    email: '',
    gender: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    gender: ''
  })

  const handleOnChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <div className='news-letter-banner container'>
      <div className='content'>
        <h4>NEVER SETTLE. KEEP UP TO DATE AND SAVE 10% ON YOUR FIRST ORDER </h4>
        <p>*T&C Apply. View our Privacy Policy to find our how your data is handled.</p>
      </div>
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
    </div>
  )
}

export default NewsLetterBanner
