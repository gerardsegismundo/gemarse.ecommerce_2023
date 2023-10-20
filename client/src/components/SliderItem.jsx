import React from 'react'
import { animated } from 'react-spring'
import sliderData from '../assets/data/sliderData'
import { useTransition } from 'react-spring'

const SliderItem = ({ sliderIndex, currentSlideData }) => {
  const labelTransitions = useTransition(sliderIndex, {
    from: { opacity: 0, transform: 'translateY(-50px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500, delay: 500 }
  })

  const overlayTransitions = useTransition(sliderIndex, {
    from: { backgroundColor: 'rgba(23, 23, 23, 1)' },
    enter: { backgroundColor: 'rgba(23, 23, 23, 0.3)' },
    config: { duration: 500, delay: 500 }
  })

  return (
    <div className='slider-item' key={sliderIndex}>
      <div className='image-wrapper'>
        {sliderData.map((data, index) => {
          return (
            <img
              src={
                sliderIndex === 3 ? (window.innerWidth > 768 ? data.imgSrc.desktop : data.imgSrc.mobile) : data.imgSrc
              }
              alt={data.imgSrc.label}
              key={index}
              className={index === sliderIndex ? 'is-active' : ''}
            />
          )
        })}
      </div>
      {overlayTransitions(overlayStyles => (
        <animated.div
          className='overlay'
          style={{
            backgroundColor: overlayStyles.backgroundColor
          }}
        >
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
        </animated.div>
      ))}
    </div>
  )
}

export default SliderItem
