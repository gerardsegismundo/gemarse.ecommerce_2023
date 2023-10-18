import blazers from '../images/featured/blazers.jpg'
import joggers from '../images/featured/joggers.jpg'
import longSleeve from '../images/featured/long-sleeve.jpg'

const featuredItems = {
  men: [
    {
      id: 17,
      name: 'joggers',
      imgSrc: joggers,
      color: 'black',
      price: 55.99,
      category: 'men',
      type: 'pants',
      stock: {
        XS: 0,
        S: 2,
        M: 0,
        L: 0,
        XL: 3
      }
    },
    {
      id: 18,
      name: 'blazers',
      imgSrc: blazers,
      color: 'gray',
      price: 178.99,
      category: 'men',
      type: 'jackets',
      stock: {
        XS: 0,
        S: 2,
        M: 0,
        L: 0,
        XL: 3
      }
    },
    {
      id: 19,
      name: 'long sleeve',
      imgSrc: longSleeve,
      color: 'navy blue',
      price: 42.99,
      category: 'men',
      type: 'shirt',
      stock: {
        XS: 0,
        S: 2,
        M: 0,
        L: 0,
        XL: 3
      }
    }
  ],
  women: {}
}

export default featuredItems
