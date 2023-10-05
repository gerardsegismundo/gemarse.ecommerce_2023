import React from 'react'
import { ImageSlider, ImageCarousel } from '../components'
import NewsLetterBanner from '../components/NewsLetterBanner'
import Story from '../components/Story'

const Home = () => {
  return (
    <div className='home'>
      <ImageSlider />
      <ImageCarousel />
      <NewsLetterBanner />
      <Story />
    </div>
  )
}

export default Home
