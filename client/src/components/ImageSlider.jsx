import React, { useState } from 'react'
import sliderData from '../assets/data/sliderData'

import { useTransition, animated } from 'react-spring'
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleDotClick = index => {
    setCurrentSlide(index)
  }

  const transitions = useTransition(currentSlide, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <div className='image-slider'>
      {transitions((styles, currentIndex) => (
        <animated.div
          style={{
            ...styles
          }}
          className='slider-item'
          key={currentIndex}
        >
          <div className='image-wrapper'>
            <img src={sliderData[currentIndex].imgSrc} alt='slider-image' loading='lazy' />
          </div>
          <div className='overlay'>
            <div className='banner-content'>
              <h2 className='label'>{sliderData[currentIndex].label}</h2>
              <button className='left-btn btn-light'>Shop Mens</button>
              <button className='right-btn btn-transparent'>Shop Women</button>
            </div>
          </div>
        </animated.div>
      ))}
      <div className='slider-dots'>
        {sliderData.map((_, index) => (
          <span
            className={`dot${index === currentSlide ? ' active' : ''}`}
            onClick={() => handleDotClick(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
