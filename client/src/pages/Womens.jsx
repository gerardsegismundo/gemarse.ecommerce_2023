import React from 'react'
import womensSliderData from '../assets/data/womensSliderData'
import { ImageCarousel, ImageSlider } from '../components'
import products from '../assets/data/products'
import ShopSection from '../components/ShopSection'
import { womensShopSections } from '../assets/data/shopSecions'

const Womens = () => {
  const trendingProducts = products.filter(product => product.isTrending && product.category === 'women')

  const types = [...new Set(products.filter(products => products.category === 'women').map(product => product.type))]

  console.log(types)

  return (
    <div className='womens-page'>
      <ImageSlider sliderData={womensSliderData} />
      <ImageCarousel carouselItems={trendingProducts} />
      <ShopSection sections={womensShopSections} />
    </div>
  )
}

export default Womens
