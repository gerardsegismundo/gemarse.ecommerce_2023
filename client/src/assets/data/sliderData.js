import menWomenImg from '../images/slider_items/men-women.jpg'
import hoodies from '../images/slider_items/hoodies.jpg'
import teesTops from '../images/slider_items/tees-tops.jpg'
import chinosJeans from '../images/slider_items/chinos-jeans.jpg'
import suitsMobile from '../images/slider_items/suits-mobile.jpg'
import suitsDesktop from '../images/slider_items/suits-desktop.jpg'

const sliderData = [
  {
    label: 'Gemarse London',
    imgSrc: menWomenImg,
    shopMensLink: '',
    shopWomensLink: ''
  },
  {
    label: 'Hoodies',
    imgSrc: hoodies,
    shopMensLink: '',
    shopWomensLink: ''
  },
  {
    label: 'Tees Tops',
    imgSrc: teesTops,
    shopMensLink: '',
    shopWomensLink: ''
  },
  {
    label: 'Suits',
    imgSrc: {
      mobile: suitsMobile,
      desktop: suitsDesktop
    },
    shopMensLink: '',
    shopWomensLink: ''
  },
  {
    label: 'Chinos & Jeans',
    imgSrc: chinosJeans,
    shopMensLink: '',
    shopWomensLink: ''
  }
]

export default sliderData
