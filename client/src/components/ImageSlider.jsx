import React, { useState } from 'react'
import sliderData from '../assets/data/sliderData'
import SliderItem from './SliderItem'

import debounce from '../utils/helpers/debounce'
const SliderItemMemo = React.memo(SliderItem)

const ImageSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const handleDotClick = index => {
    setSliderIndex(index)
  }

  const handleMouseDown = e => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = debounce(e => {
    if (isDragging) {
      const deltaX = e.clientX - startX

      if (deltaX < 0) {
        if (sliderIndex === 4) {
          return setSliderIndex(0)
        }

        setSliderIndex(sliderIndex + 1)
      } else if (deltaX > 0) {
        if (sliderIndex === 0) {
          return setSliderIndex(4)
        }
        setSliderIndex(sliderIndex - 1)
      }
    }
  }, 100)

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  return (
    <div className='image-slider' onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <SliderItemMemo sliderData={sliderData} sliderIndex={sliderIndex} currentSlideData={sliderData[sliderIndex]} />

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
