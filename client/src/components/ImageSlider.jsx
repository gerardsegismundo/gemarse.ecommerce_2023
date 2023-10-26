import React, { useState } from 'react'
import SliderItem from './SliderItem'
import debounce from '../utils/helpers/debounce'

const ImageSlider = ({ sliderData }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const handleDotClick = index => {
    setCurrentIndex(index)
  }

  const handleMouseDown = e => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = debounce(e => {
    if (isDragging) {
      const deltaX = e.clientX - startX

      if (deltaX < 0) {
        if (currentIndex === sliderData.length - 1) {
          return setCurrentIndex(0)
        }

        setCurrentIndex(currentIndex + 1)
      } else if (deltaX > 0) {
        if (currentIndex === 0) {
          return setCurrentIndex(sliderData.length - 1)
        }
        setCurrentIndex(currentIndex - 1)
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
      <SliderItem sliderData={sliderData} currentIndex={currentIndex} />

      <div className='slider-dots'>
        {sliderData.map((_, index) => (
          <span
            className={`dot${index === currentIndex ? ' active' : ''}`}
            onClick={() => handleDotClick(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
