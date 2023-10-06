import React from 'react'
import { ImageSlider, ImageCarousel, NewsLetterBanner, Footer } from '../components'
import Story from '../components/Story'

const Home = () => {
  return (
    <div className='home'>
      <ImageSlider />
      <ImageCarousel />
      <NewsLetterBanner />
      <Story />
      <Footer />
    </div>
  )
}

export default Home
