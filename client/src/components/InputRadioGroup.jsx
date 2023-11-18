import React from 'react'

const InputRadioGroup = ({ value, onChange, checked }) => {
  return (
    <>
      <input value={value} onChange={onChange} checked={checked} name='gender' type='radio' required />
      <label htmlFor={value}>{value}</label>
    </>
  )
}

export default InputRadioGroup
