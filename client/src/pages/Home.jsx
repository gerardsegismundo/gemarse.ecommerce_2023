import { ImageSlider, ImageCarousel, NewsLetterBanner } from '../components'
import Story from '../components/Story'
import homeSliderData from '../assets/data/homeSliderData'
import products from '../assets/data/products'

const Home = () => {
  const trendingProducts = products.filter(product => product.isTrending)

  return (
    <div className='home-page'>
      <ImageSlider sliderData={homeSliderData} />
      <ImageCarousel carouselItems={trendingProducts} />
      <NewsLetterBanner />
      <Story />
    </div>
  )
}

export default Home
