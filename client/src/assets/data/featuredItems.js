import blazers from '../images/featured/blazers.jpg'
import bodySuit from '../images/featured/body-suit.jpg'
import joggers from '../images/featured/joggers.jpg'
import leggings from '../images/featured/leggings.jpg'
import longSleeve from '../images/featured/long-sleeve.jpg'
import sportBra from '../images/featured/sport-bra.jpg'

const featuredItems = {
  mens: [
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
  womens: [
    {
      id: 20,
      name: 'body suit',
      imgSrc: bodySuit,
      color: 'blue green',
      price: 55.99,
      category: 'women',
      type: 'bodysuit',
      stock: {
        XS: 5,
        S: 2,
        M: 8,
        L: 20,
        XL: 3
      }
    },
    {
      id: 21,
      name: 'leggings',
      imgSrc: leggings,
      color: 'black',
      price: 78.99,
      category: 'women',
      type: 'leggings',
      stock: {
        XS: 18,
        S: 2,
        M: 5,
        L: 3,
        XL: 3
      }
    },
    {
      id: 22,
      name: 'sports bra',
      imgSrc: sportBra,
      color: 'black',
      price: 55.99,
      category: 'women',
      type: 'sports bra',
      stock: {
        XS: 45,
        S: 23,
        M: 18,
        L: 32,
        XL: 32
      }
    }
  ]
}

export default featuredItems
