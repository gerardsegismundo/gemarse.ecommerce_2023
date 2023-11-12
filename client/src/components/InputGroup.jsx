import React from 'react'

const InputGroup = props => {
  const {
    type,
    name,
    value,
    onChange,
    label,
    error,
    isValid,
    dataIsFilled,
    disabled = false,
    autoComplete = 'off',
    light = false
  } = props

  return (
    <div className={`input-group${isValid ? '' : ' is-invalid'}${light ? ' light' : ''}`}>
      <input
        stype={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete={autoComplete}
        className={dataIsFilled ? 'is-filled' : ''}
      />
      <div className={`${error ? 'input-error ' : ''}input-line`} />
      <label htmlFor={label}>{label}</label>
      {error && <span>{error}</span>}
    </div>
  )
}

export default InputGroup
