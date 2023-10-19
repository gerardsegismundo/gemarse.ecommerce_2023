import React from 'react'
import { animated } from 'react-spring'
import sliderData from '../assets/data/sliderData'

const SliderItem = ({ sliderIndex, currentSlideData, windowWidth, labelTransitions }) => {
  return (
    <div className='slider-item' key={sliderIndex}>
      <div className='image-wrapper'>
        {sliderData.map((data, index) => {
          return (
            <img
              src={sliderIndex === 3 ? (windowWidth > 768 ? data.imgSrc.desktop : data.imgSrc.mobile) : data.imgSrc}
              alt={data.imgSrc.label}
              key={index}
              className={index === sliderIndex ? 'is-active' : ''}
            />
          )
        })}
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
    </div>
  )
}

export default SliderItem
