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

  const handleStart = clientX => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleMove = debounce(clientX => {
    if (isDragging) {
      const deltaX = clientX - startX

      const threshold = 100

      if (Math.abs(deltaX) > threshold) {
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

      setStartX(0)
    }
  }, 200)

  const handleEnd = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  return (
    <div
      className='image-slider'
      onMouseDown={e => handleStart(e.clientX)}
      onMouseMove={e => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onTouchStart={e => handleStart(e.touches[0].clientX)}
      onTouchMove={e => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
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
