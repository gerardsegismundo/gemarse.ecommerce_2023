import React, { useState, useEffect } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import { ReactComponent as ChevLeft } from '../assets/svg/chev-left.svg'
import { ReactComponent as ChevRight } from '../assets/svg/chev-right.svg'
import CarouselItem from './CarouselItem'
import useResponsiveSlideAmount from '../utils/hooks/useResponsiveSlideAmount'
import axios from 'axios'

const ImageCarousel = () => {
  const slideAmount = useResponsiveSlideAmount()
  const [trendingItems, setTrendingItems] = useState([])

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    initialActiveItem: 1,
    slideType: 'fluid',
    slideAmount,
    enableFreeScrollDrag: true,
    draggingSlideTreshold: 35,
    withLoop: true,
    items: trendingItems.map(data => ({
      id: data.id,
      renderItem: <CarouselItem props={data} />
    }))
  })

  const fetchTrendingProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/products/trending-products')
      setTrendingItems(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTrendingProducts()
  }, [])

  return (
    <div className='image-carousel'>
      <div className='container'>
        <h3 className='trending'>Trending</h3>
      </div>
      {/* {trendingItems.length > 0 && <div className='container'>{carouselFragment}</div>} */}
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
