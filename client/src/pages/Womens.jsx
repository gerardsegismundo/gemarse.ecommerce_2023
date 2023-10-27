import React from 'react'
import mensSliderData from '../assets/data/mensSliderData'
import womensSliderData from '../assets/data/womensSliderData'
import { ImageCarousel, ImageSlider } from '../components'
import products from '../assets/data/products'
import ShopSection from '../components/ShopSection'
import { mensShopSections } from '../assets/data/shopSecions'

const Mens = () => {
  const trendingProducts = products.filter(product => product.isTrending && product.category === 'women')

  return (
    <div className='womens-page'>
      <ImageSlider sliderData={womensSliderData} />
      <ImageCarousel carouselItems={trendingProducts} />
      <ShopSection sections={mensShopSections} />
    </div>
  )
}

export default Mens
