function translateSize(size) {
  const sizeMap = {
    XS: 'Extra Small',
    S: 'Small',
    M: 'Medium',
    L: 'Large',
    XL: 'Extra Large'
  }

  return sizeMap[size]
}

export default translateSize
