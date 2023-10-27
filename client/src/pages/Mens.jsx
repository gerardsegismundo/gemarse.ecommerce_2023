import React from 'react'
import mensSliderData from '../assets/data/mensSliderData'
import { ImageCarousel, ImageSlider } from '../components'
import products from '../assets/data/products'
import ShopSection from '../components/ShopSection'
import { mensShopSections } from '../assets/data/shopSecions'

const Mens = () => {
  const trendingProducts = products.filter(product => product.isTrending && product.category === 'men')

  // CATEGORIES
  // [ 'pants', 'shirts', 'accessories', 'jackets', 'suits', 'shorts' ]
  return (
    <div className='mens-page'>
      <ImageSlider sliderData={mensSliderData} />
      <ImageCarousel carouselItems={trendingProducts} />
      <ShopSection sections={mensShopSections} />
    </div>
  )
}

export default Mens
