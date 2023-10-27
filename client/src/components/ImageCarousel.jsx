import { useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import { ReactComponent as ChevLeft } from '../assets/svg/chev-left.svg'
import { ReactComponent as ChevRight } from '../assets/svg/chev-right.svg'
import ProductCard from './ProductCard'
import useResponsiveSlideAmount from '../utils/hooks/useResponsiveSlideAmount'

const ImageCarousel = ({ carouselItems, title = 'trending' }) => {
  const [isClickEnabled, setClickEnabled] = useState(true)
  const slideAmount = useResponsiveSlideAmount()

  const { carouselFragment, slideToPrevItem, slideToNextItem, useListenToCustomEvent } = useSpringCarousel({
    initialActiveItem: 1,
    slideType: 'fluid',
    slideAmount,
    enableFreeScrollDrag: true,
    draggingSlideTreshold: 35,
    withLoop: true,
    items: carouselItems.map(item => ({
      id: item._id,
      renderItem: <ProductCard props={item} isOnSlider={true} isClickEnabled={isClickEnabled} />
    }))
  })

  useListenToCustomEvent(event => {
    if (event.eventName === 'onDrag') {
      setClickEnabled(false)
    } else if (event.eventName === 'onSlideChange') {
      setClickEnabled(true)
    }
  })

  return (
    <div className='image-carousel'>
      <div className='container'>
        <h3 className='title'>trending</h3>
      </div>
      <div className='container'>{carouselFragment}</div>
      <button className='prev-btn' onClick={slideToPrevItem}>
        <ChevLeft />
      </button>
      <button className='next-btn' onClick={slideToNextItem}>
        <ChevRight />
      </button>
    </div>
  )
}

export default ImageCarousel
