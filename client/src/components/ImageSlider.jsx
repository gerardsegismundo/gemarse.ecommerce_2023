import React, { useState } from 'react'
import sliderData from '../assets/data/sliderData'
import SliderItem from './SliderItem'

import { useTransition, config } from 'react-spring'
const ImageSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0)

  const handleDotClick = index => {
    setSliderIndex(index)
  }

  const imageTransitions = useTransition(sliderIndex, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  })

  const labelTransitions = useTransition(sliderIndex, {
    from: { opacity: 0, transform: 'translateY(-50px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500, delay: 500 }
  })

  return (
    <div className='image-slider'>
      {imageTransitions(() => (
        <SliderItem
          sliderIndex={sliderIndex}
          currentSlideData={sliderData[sliderIndex]}
          windowWidth={window.innerWidth}
          labelTransitions={labelTransitions}
        />
      ))}
      <div className='slider-dots'>
        {sliderData.map((_, index) => (
          <span
            className={`dot${index === sliderIndex ? ' active' : ''}`}
            onClick={() => handleDotClick(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
