import React from 'react'
import { animated } from 'react-spring'
import { useTransition } from 'react-spring'
import { Link } from 'react-router-dom'

const SliderItem = ({ sliderData, currentIndex }) => {
  const labelTransitions = useTransition(currentIndex, {
    from: { opacity: 0, transform: 'translateY(-50px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500, delay: 500 }
  })

  const overlayTransitions = useTransition(currentIndex, {
    from: { backgroundColor: 'rgba(23, 23, 23, 1)' },
    enter: { backgroundColor: 'rgba(23, 23, 23, 0.3)' },
    config: { duration: 500, delay: 500 }
  })

  const slideLinks = sliderData[currentIndex].buttons.map((button, i) => (
    <Link to={button.link} key={i}>
      {button.title}
    </Link>
  ))

  return (
    <div className='slider-item' key={currentIndex}>
      <div className='image-wrapper'>
        {sliderData.map((data, index) => {
          return (
            <img
              src={
                currentIndex === 3 ? (window.innerWidth > 768 ? data.imgSrc.desktop : data.imgSrc.mobile) : data.imgSrc
              }
              alt={data.imgSrc.label}
              key={index}
              className={index === currentIndex ? 'is-active' : ''}
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
                  {sliderData[currentIndex].label}
                </animated.h2>
              ))}
            </div>

            {sliderData[currentIndex].buttons.length >= 2 ? (
              <div className='button-group'>{slideLinks}</div>
            ) : (
              <>{slideLinks}</>
            )}
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default SliderItem
