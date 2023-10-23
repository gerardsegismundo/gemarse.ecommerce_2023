import React from 'react'
import ProductCard from './ProductCard'
import products from '../assets/data/products'

const RecentlyViewed = () => {
  const fourItems = products.slice(5, 9)

  return (
    <div className='recently-viewed'>
      <div className='container'>
        <h3 className='title'>Recently Viewed</h3>
        <div className='grid'>
          {fourItems.map(data => (
            <ProductCard key={data._id} props={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentlyViewed
