import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import trendingData from '../assets/data/trendingData'
import { ReactComponent as ChevLeft } from '../assets/svg/chev-left.svg'
import { ReactComponent as ChevRight } from '../assets/svg/chev-right.svg'
import CarouselItem from './CarouselItem'
import useResponsiveSlideAmount from '../utils/hooks/useResponsiveSlideAmount'

const ImageCarousel = () => {
  const slideAmount = useResponsiveSlideAmount()

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    initialActiveItem: 1,
    slideType: 'fluid',
    slideAmount,
    enableFreeScrollDrag: true,
    draggingSlideTreshold: 35,
    withLoop: true,
    items: trendingData.map(data => ({
      id: data.id,
      renderItem: <CarouselItem props={data} />
    }))
  })

  return (
    <div className='image-carousel'>
      <div className='container'>
        <h3>Trending</h3>
      </div>
      <div className='container'>{carouselFragment}</div>
      <button className='prev-btn' onClick={slideToPrevItem}>
        <ChevLeft />
      </button>
      <button className='next-btn' onClick={slideToNextItem}>
        <ChevRight />
      </button>
    </div>
  )
}

export default ImageCarousel
