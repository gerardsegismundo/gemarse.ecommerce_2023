import React from 'react'
import mensSliderData from '../assets/data/mensSliderData'
import { ImageCarousel, ImageSlider } from '../components'
import products from '../assets/data/products'
import ShopSection from '../components/ShopSection'

const shopSections = [
  {
    title: 'shirts',
    imgSrc: '',
    link: ''
  },
  {
    title: 'women sweaters',
    imgSrc: '',
    link: ''
  },
  {
    title: 'tees',
    imgSrc: '',
    link: ''
  }
]

const Mens = () => {
  const trendingProducts = products.filter(product => product.isTrending && product.category === 'men')

  return (
    <div className='mens-page'>
      <ShopSection sections={shopSections} />
      <ImageSlider sliderData={mensSliderData} />
      <ImageCarousel carouselItems={trendingProducts} />
    </div>
  )
}

export default Mens
