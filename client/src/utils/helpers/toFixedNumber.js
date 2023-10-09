function toFixedNumber(num, digits) {
  const pow = Math.pow(10, digits)
  const rounded = Math.round(num * pow) / pow

  // Check if the rounded result is a valid number
  if (isNaN(rounded)) {
    return 0 // or any default value you prefer
  }

  return rounded
}

export default toFixedNumber
