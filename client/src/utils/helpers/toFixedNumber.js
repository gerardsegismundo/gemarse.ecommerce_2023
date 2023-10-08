function toFixedNumber(num, digits) {
  const pow = Math.pow(10, digits)
  return Math.round(num * pow) / pow
}

export default toFixedNumber
