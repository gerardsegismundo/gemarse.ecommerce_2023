import menWomenImg from '../images/home_slider/men-women.jpg'
import hoodies from '../images/home_slider/hoodies.jpg'
import teesTops from '../images/home_slider/tees-tops.jpg'
import chinosJeans from '../images/home_slider/chinos-jeans.jpg'
import suitsMobile from '../images/home_slider/suits-mobile.jpg'
import suitsDesktop from '../images/home_slider/suits-desktop.jpg'

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
