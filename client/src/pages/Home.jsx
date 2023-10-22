import { ImageSlider, ImageCarousel, NewsLetterBanner } from '../components'
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
