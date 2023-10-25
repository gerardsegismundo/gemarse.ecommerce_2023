import menWomenImg from '../images/slider_items/men-women.jpg'
import hoodies from '../images/slider_items/hoodies.jpg'
import teesTops from '../images/slider_items/tees-tops.jpg'
import chinosJeans from '../images/slider_items/chinos-jeans.jpg'
import suitsMobile from '../images/slider_items/suits-mobile.jpg'
import suitsDesktop from '../images/slider_items/suits-desktop.jpg'

const homeSliderData = [
  {
    label: 'Gemarse London',
    imgSrc: menWomenImg,
    buttons: [
      {
        title: 'Shop Mens',
        link: '/mens'
      },
      {
        title: 'Shop Womens',
        link: '/womens'
      }
    ]
  },
  {
    label: 'Hoodies',
    imgSrc: hoodies,
    buttons: [
      {
        title: 'Shop Mens',
        link: ''
      },
      {
        title: 'Shop Womens',
        link: ''
      }
    ]
  },
  {
    label: 'Tees Tops',
    imgSrc: teesTops,
    buttons: [
      {
        title: 'Shop Mens',
        link: ''
      },
      {
        title: 'Shop Womens',
        link: ''
      }
    ]
  },
  {
    label: 'Suits',
    imgSrc: {
      mobile: suitsMobile,
      desktop: suitsDesktop
    },
    buttons: [
      {
        title: 'Shop Mens',
        link: ''
      },
      {
        title: 'Shop Womens',
        link: ''
      }
    ]
  },
  {
    label: 'Chinos & Jeans',
    imgSrc: chinosJeans,
    buttons: [
      {
        title: 'Shop Mens',
        link: ''
      },
      {
        title: 'Shop Womens',
        link: ''
      }
    ]
  }
]

export default homeSliderData
