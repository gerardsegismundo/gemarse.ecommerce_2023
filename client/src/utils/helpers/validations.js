function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return re.test(email)
}

function validateRegister({ email, password, confirmPassword }) {
  let errors = {}

  if (!email) errors.email = 'Email is required.'
  if (!password) errors.password = 'Password is required.'
  if (!validateEmail(email)) errors.email = 'Invalid email.'
  if (!confirmPassword) errors.confirmPassword = 'Confirm password is required.'

  if (password && confirmPassword && password !== confirmPassword) {
    errors.password = 'Password and confirm password did not match.'
    errors.confirmPassword = 'Password and confirm password did not match.'
  }

  return Object.keys(errors).length === 0 ? false : errors
}

function validateLogin({ email, password }) {
  let errors = {}

  if (!email) errors.email = 'Email is required.'
  if (!password) errors.password = 'Password is required.'

  return Object.keys(errors).length === 0 ? false : errors
}

export { validateRegister, validateLogin }
