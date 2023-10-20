import React, { useState } from 'react'
import sliderData from '../assets/data/sliderData'
import SliderItem from './SliderItem'

const ImageSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0)

  const handleDotClick = index => setSliderIndex(index)

  return (
    <div className='image-slider'>
      <SliderItem sliderData={sliderData} sliderIndex={sliderIndex} currentSlideData={sliderData[sliderIndex]} />

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
