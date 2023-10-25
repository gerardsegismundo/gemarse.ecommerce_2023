import { ImageSlider, ImageCarousel, NewsLetterBanner } from '../components'
import Story from '../components/Story'
import homeSliderData from '../assets/data/homeSliderData'

console.log(homeSliderData)
const Home = () => {
  return (
    <div className='home-page'>
      <ImageSlider sliderData={homeSliderData} />
      <ImageCarousel />
      <NewsLetterBanner />
      <Story />
    </div>
  )
}

export default Home
