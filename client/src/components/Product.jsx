import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { product_name } = useParams()
  const unslugProductName = product_name.replace(/-/g, ' ')

  return <div className='product-page'>{unslugProductName}</div>
}

export default Product
