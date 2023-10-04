import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import CarouselItem from './CarouselItem'
import sliderData from '../assets/data/sliderData'

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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-chevron-left'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
            />
          </svg>
        </button>
        <div></div>
        {carouselFragment}
      </div>

      <button className='next-btn' onClick={slideToNextItem}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-chevron-right'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
          />
        </svg>
      </button>
    </>
  )
}

export default ImageCarousel
