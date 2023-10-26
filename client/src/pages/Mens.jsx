import React from 'react'
import mensSliderData from '../assets/data/mensSliderData'
import { ImageCarousel, ImageSlider } from '../components'
import products from '../assets/data/products'

const Mens = () => {
  const trendingProducts = products.filter(product => product.isTrending && product.category === 'men')

  return (
    <div className='mens-page'>
      <ImageSlider sliderData={mensSliderData} />
      <ImageCarousel carouselItems={trendingProducts} />
    </div>
  )
}

export default Mens
