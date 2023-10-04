import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import CarouselItem from './CarouselItem'
import sliderData from '../assets/data/sliderData'
import { ReactComponent as ChevLeft } from '../assets/svg/chev-left.svg'
import { ReactComponent as ChevRight } from '../assets/svg/chev-right.svg'

const ImageCarousel = () => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    slideType: 'fluid',
    slideAmount: 1630,
    freeScroll: true,
    enableFreeScrollDrag: true,
    withLoop: true,
    items: sliderData.map(({ id, imgSrc }) => ({
      id,
      renderItem: (
        <CarouselItem>
          <img src={imgSrc} alt={imgSrc} draggable='false' />
        </CarouselItem>
      )
    }))
  })

  return (
    <>
      <div className='image-carousel'>
        <button className='prev-btn' onClick={slideToPrevItem}>
          <ChevLeft />
        </button>
        <div></div>
        {carouselFragment}
      </div>

      <button className='next-btn' onClick={slideToNextItem}>
        <ChevRight />
      </button>
    </>
  )
}

export default ImageCarousel
