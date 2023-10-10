import React from 'react'
import { animated } from 'react-spring'

const SliderItem = ({ sliderIndex, currentSlideData, windowWidth, labelTransitions }) => {
  return (
    <animated.div className='slider-item' key={sliderIndex}>
      <div className='image-wrapper'>
        <img
          src={
            sliderIndex === 3
              ? windowWidth > 768
                ? currentSlideData.imgSrc.desktop
                : currentSlideData.imgSrc.mobile
              : currentSlideData.imgSrc
          }
          alt={currentSlideData.imgSrc}
          loading='lazy'
        />
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
                {currentSlideData.label}
              </animated.h2>
            ))}
          </div>
          <button className='mens-btn btn-light no-border'>Shop Mens</button>
          <button className='womens-btn btn-transparent'>Shop Womens</button>
        </div>
      </div>
    </animated.div>
  )
}

export default SliderItem
