import React from 'react'
import mensSliderData from '../assets/data/mensSliderData'
import { ImageSlider } from '../components'

const Mens = () => {
  return (
    <div className='mens-page'>
      <ImageSlider sliderData={mensSliderData} />
    </div>
  )
}

export default Mens
