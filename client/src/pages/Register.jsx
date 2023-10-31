import React from 'react'

const validateRegister = ({ name, email, password, confirmPassword }) => {
  let errors = {}

  if (!name) errors.name = 'Name is required.'
  if (!password) errors.password = 'Password is required.'
  if (!confirmPassword) errors.confirmPassword = 'Confirm password is required.'
  if (!validateEmail(email)) errors.email = 'Invalid email.'
  if (!email) errors.email = 'Email is required.'

  if (password !== confirmPassword) {
    errors.password = 'Password and confirm password did not match.'
    errors.confirmPassword = 'Password and confirm password did not match.'
  }

  return Object.keys(errors).length === 0 ? false : errors
}

const Register = () => {
  return <div>Register</div>
}

export default Register
