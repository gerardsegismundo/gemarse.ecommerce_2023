import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import CarouselItem from './CarouselItem'
import sliderData from '../assets/data/sliderData'
import { ReactComponent as ChevLeft } from '../assets/svg/chev-left.svg'
import { ReactComponent as ChevRight } from '../assets/svg/chev-right.svg'

const ImageCarousel = () => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    slideType: 'fluid',
    slideAmount: 630,
    enableFreeScrollDrag: true,
    draggingSlideTreshold: 35,
    withLoop: true,
    items: sliderData.map(({ id, imgSrc }) => ({
      id,
      renderItem: <img src={imgSrc} alt={imgSrc} draggable='false' />
    }))
  })

  return (
    <div className='image-carousel'>
      <div className='container'>
        <h3>Trending</h3>
      </div>
      <div className='carousel-fragment'>{carouselFragment}</div>
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
