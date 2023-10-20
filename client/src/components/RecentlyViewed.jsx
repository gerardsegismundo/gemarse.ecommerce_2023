import React from 'react'
import CarouselItem from './CarouselItem'
import trendingData from '../assets/data/trendingData'

const RecentlyViewed = () => {
  const fourItems = trendingData.slice(0, 4)

  return (
    <div className='recently-viewed'>
      <div className='container'>
        <h3>Recently Viewed</h3>
        <div className='grid'>
          {fourItems.map(data => (
            <div key={data.id}>
              <CarouselItem props={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentlyViewed
