import React, { useState } from 'react'
import sliderData from '../assets/data/sliderData'

import { useTransition, animated } from 'react-spring'
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleDotClick = index => {
    setCurrentSlide(index)
  }

  const imageTransitions = useTransition(currentSlide, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const labelTransitions = useTransition(currentSlide, {
    from: { opacity: 0, transform: 'translateY(-50px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500, delay: 500 }
  })

  return (
    <div className='image-slider'>
      {imageTransitions((styles, currentIndex) => (
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
              <div className='label-wrapper'>
                {labelTransitions(labelStyles => (
                  <animated.h2
                    className='label'
                    style={{
                      opacity: labelStyles.opacity,
                      transform: labelStyles.transform
                    }}
                  >
                    {sliderData[currentIndex].label}
                  </animated.h2>
                ))}
              </div>
              <button className='mens-btn btn-light'>Shop Mens</button>
              <button className='womens-btn btn-transparent'>Shop Womens</button>
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
