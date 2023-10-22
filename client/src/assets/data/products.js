import blackJeans from '../images/products/black-jeans.jpg'
import blackShirt from '../images/products/black-shirt.jpg'
import blackWallet from '../images/products/black-wallet.jpg'
import brownLeatherBag from '../images/products/brown-leather-bag.jpg'
import chinosStretch from '../images/products/chinos-stretch.jpg'
import dressPants from '../images/products/dress-pants.jpg'
import leatherJacket from '../images/products/leather-jacket.jpg'
import leggings2 from '../images/products/leggings-2.jpg'
import navyPolo from '../images/products/navy-polo.jpg'
import navySuit from '../images/products/navy-suit.jpg'
import polo from '../images/products/polo.jpg'
import purpleGoldTie from '../images/products/purple-gold-tie.jpg'
import sportShorts from '../images/products/sport-shorts.jpg'
import stripeShirt from '../images/products/stripe-shirt.jpg'
import summerShort from '../images/products/summer-short.jpg'
import weddingBowTie from '../images/products/wedding-bow-tie.jpg'
import blazers from '../images/products/blazers.jpg'
import bodySuit from '../images/products/body-suit.jpg'
import joggers from '../images/products/joggers.jpg'
import leggings from '../images/products/leggings.jpg'
import longSleeve from '../images/products/long-sleeve.jpg'
import sportBra from '../images/products/sport-bra.jpg'

const products = [
  {
    id: 1,
    name: 'black jeans',
    imgSrc: blackJeans,
    color: 'black',
    price: 78.99,
    category: 'men',
    type: 'pants',
    isTrending: false,
    stock: {
      XS: 0,
      S: 2,
      M: 0,
      L: 0,
      XL: 3
    }
  },
  {
    id: 2,
    name: 'plane black shirt',
    imgSrc: blackShirt,
    color: 'black',
    price: 24.99,
    category: 'men',
    type: 'shirt',
    isTrending: false,
    stock: {
      XS: 5,
      S: 10,
      M: 0,
      L: 15,
      XL: 30
    }
  },
  {
    id: 3,
    name: 'black wallet',
    imgSrc: blackWallet,
    color: 'black',
    price: 56.99,
    category: 'men',
    type: 'accessories',
    stock: 1
  },
  {
    id: 4,
    name: 'brown leather bag',
    imgSrc: brownLeatherBag,
    color: 'brown',
    price: 243.99,
    category: 'women',
    type: 'accessories',
    stock: 5
  },
  {
    id: 5,
    name: 'chinos stretch',
    imgSrc: chinosStretch,
    color: 'white',
    price: 67.99,
    category: 'men',
    type: 'pants',
    isTrending: true,
    stock: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 8
    }
  },
  {
    id: 6,
    name: 'gray dress pants',
    imgSrc: dressPants,
    color: 'gray',
    price: 78.99,
    category: 'men',
    type: 'pants',
    isTrending: true,
    stock: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0
    }
  },
  {
    id: 7,
    name: 'black leather jacket',
    imgSrc: leatherJacket,
    color: 'black',
    price: 154.99,
    category: 'mens',
    type: 'jackets',
    isTrending: true,
    stock: {
      XS: 5,
      S: 10,
      M: 0,
      L: 15,
      XL: 30
    }
  },
  {
    id: 8,
    name: 'black leggings',
    imgSrc: leggings2,
    color: 'black',
    price: 58.99,
    category: 'womens',
    type: 'leggings',
    isTrending: false,
    stock: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0
    }
  },
  {
    id: 9,
    name: 'navy polo',
    imgSrc: navyPolo,
    color: 'navy',
    price: 34.99,
    category: 'mens',
    type: 'shirt',
    isTrending: false,
    stock: {
      XS: 5,
      S: 10,
      M: 0,
      L: 15,
      XL: 30
    }
  },
  {
    id: 10,
    name: 'navy suit',
    imgSrc: navySuit,
    color: 'navy',
    price: 87.99,
    category: 'mens',
    type: 'suits',
    isTrending: true,
    stock: {
      XS: 5,
      S: 10,
      M: 0,
      L: 15,
      XL: 30
    }
  },
  {
    id: 11,
    name: 'blue polo',
    imgSrc: polo,
    color: 'blue',
    price: 26.99,
    category: 'mens',
    type: 'shirts',
    isTrending: false,
    stock: {
      XS: 5,
      S: 10,
      M: 0,
      L: 15,
      XL: 30
    }
  },
  {
    id: 12,
    name: 'purple tie',
    imgSrc: purpleGoldTie,
    color: 'purple',
    price: 12.99,
    category: 'mens',
    type: 'accessories',
    stock: 0
  },
  {
    id: 13,
    name: 'Sport shorts',
    imgSrc: sportShorts,
    color: 'pink',
    price: 23.99,
    category: 'womens',
    type: 'shorts',
    isTrending: true,
    stock: {
      XS: 5,
      S: 10,
      M: 0,
      L: 15,
      XL: 30
    }
  },
  {
    id: 14,
    name: 'black stripe shirt',
    imgSrc: stripeShirt,
    color: 'black',
    price: 39.99,
    category: 'mens',
    type: 'shirt',
    isTrending: true,
    stock: {
      XS: 5,
      S: 10,
      M: 0,
      L: 15,
      XL: 30
    }
  },
  {
    id: 15,
    name: 'summer short',
    imgSrc: summerShort,
    color: 'navy',
    price: 25.99,
    category: 'mens',
    type: 'shorts',
    isTrending: true,
    stock: {
      XS: 5,
      S: 10,
      M: 0,
      L: 15,
      XL: 30
    }
  },
  {
    id: 16,
    name: 'wedding bow tie',
    imgSrc: weddingBowTie,
    color: 'black',
    price: 17.99,
    category: 'mens',
    type: 'accessories',
    stock: 0
  },
  {
    _id: 17,
    name: 'joggers',
    imgSrc: joggers,
    color: 'black',
    price: 55.99,
    category: 'men',
    type: 'pants',
    isTrending: true,
    stock: {
      XS: 0,
      S: 2,
      M: 0,
      L: 0,
      XL: 3
    }
  },
  {
    _id: 18,
    name: 'blazers',
    imgSrc: blazers,
    color: 'gray',
    price: 178.99,
    category: 'men',
    type: 'jackets',
    isTrending: true,
    stock: {
      XS: 0,
      S: 2,
      M: 0,
      L: 0,
      XL: 3
    }
  },
  {
    _id: 19,
    name: 'long sleeve',
    imgSrc: longSleeve,
    color: 'navy blue',
    price: 42.99,
    category: 'men',
    type: 'shirt',
    isTrending: false,
    stock: {
      XS: 0,
      S: 2,
      M: 0,
      L: 0,
      XL: 3
    }
  },
  {
    _id: 20,
    name: 'body suit',
    imgSrc: bodySuit,
    color: 'blue green',
    price: 55.99,
    category: 'women',
    type: 'bodysuit',
    isTrending: true,
    stock: {
      XS: 5,
      S: 2,
      M: 8,
      L: 20,
      XL: 3
    }
  },
  {
    _id: 21,
    name: 'leggings',
    imgSrc: leggings,
    color: 'black',
    price: 78.99,
    category: 'women',
    type: 'leggings',
    isTrending: true,
    stock: {
      XS: 18,
      S: 2,
      M: 5,
      L: 3,
      XL: 3
    }
  },
  {
    _id: 22,
    name: 'sports bra',
    imgSrc: sportBra,
    color: 'black',
    price: 55.99,
    category: 'women',
    type: 'sports bra',
    isTrending: false,
    stock: {
      XS: 45,
      S: 23,
      M: 18,
      L: 32,
      XL: 32
    }
  }
]
export default products
