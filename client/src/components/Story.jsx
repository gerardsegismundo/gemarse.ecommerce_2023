import React from 'react'

import AboutUs from '../assets/images/story/about-us.jpg'
import ContactUs from '../assets/images/story/contact.jpg'
import DeliveriesReturn from '../assets/images/story/deliveries-return.jpg'
import FAQs from '../assets/images/story/FAQs.jpg'
import GiftCards from '../assets/images/story/gift-cards.jpg'

const Story = () => {
  return (
    <div className='story'>
      <h3>Read the Gemarse story</h3>
      <div className='gallery-grid'>
        <img src={AboutUs} alt='about us' />
        <img src={ContactUs} alt='contact us' />
        <img src={DeliveriesReturn} alt='deliveries return' />
        <img src={FAQs} alt='FAQs' />
        <img src={GiftCards} alt='gift cards' />
      </div>
    </div>
  )
}

export default Story
