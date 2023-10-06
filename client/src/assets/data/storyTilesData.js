import AboutUs from '../images/story/about.jpg'
import ContactUs from '../images/story/contact.jpg'
import DeliveriesReturn from '../images/story/deliveries.jpg'
import FAQs from '../images/story/FAQs.jpg'
import GiftCards from '../images/story/gift-cards.jpg'

const storyTilesData = [
  {
    to: '/products/gift-card',
    imgSrc: GiftCards,
    message: 'Available from $10',
    title: 'Gift Cards'
  },
  {
    to: '/faq',
    imgSrc: FAQs
  },
  {
    to: '/contact',
    imgSrc: ContactUs
  },
  {
    to: '/delivery-returns',
    imgSrc: DeliveriesReturn
  },
  {
    to: 'about-us',
    imgSrc: AboutUs
  }
]

export default storyTilesData
