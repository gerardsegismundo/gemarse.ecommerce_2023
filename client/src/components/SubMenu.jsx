import { useState } from 'react'
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg'
import { setSubMenu } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import products from '../assets/data/products'

const SubMenu = () => {
  const { isOpen, gender } = useSelector(state => state.ui.subMenu)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchVal, setSearchVal] = useState('')

  const featuredMens = products.filter(product => product.category === 'men').slice(0, 3)
  const featuredWomens = products.filter(product => product.category === 'women').slice(0, 3)

  const featuredProducts = gender === 'mens' ? featuredMens : featuredWomens

  const hadleOnLeave = () => {
    dispatch(setSubMenu({ isOpen: false, gender: null }))
  }

  const handleOnNavigate = name => {
    const formattedName = name.replace(/ /g, '-')
    navigate(`/product/${formattedName}`)
    dispatch(setSubMenu({ isOpen: false, gender: null }))
  }

  const handleOnChange = e => {
    console.log(e.target.value)
    setSearchVal(e.target.value)
  }
  const handleOnSearch = e => {
    e.preventDefault()
  }

  return (
    <div className={`submenu ${isOpen ? ' open' : ''}`} onMouseLeave={hadleOnLeave}>
      <div className='container'>
        <form className='search-group'>
          <button onClick={handleOnSearch}>
            <SearchIcon />
          </button>
          <input
            type='search'
            name='search'
            value={searchVal}
            onChange={handleOnChange}
            placeholder='Search for products, categories and color'
          />
        </form>

        <div className='row'>
          <div className='nav-list'>
            <div className='col'>
              <ul className='featured'>
                <li>
                  <h5>Featured</h5>
                </li>
                <li>Trending</li>
                <li>NEW: Gemarse London</li>
                <li>Collection</li>
                <li>Sale</li>
              </ul>

              <ul className='gift-cards'>
                <li>
                  <h5>Gift Cards</h5>
                </li>
                <li>Gift Cards</li>
              </ul>

              <ul className='gemarse'>
                <li>
                  <h5>Gemarse</h5>
                </li>
                <li>Gemarse Community</li>
                <li>About Us</li>
              </ul>
            </div>

            <ul className='shop-by-product'>
              <li>
                <h5>Shop By Product</h5>
              </li>
              {gender === 'mens' ? (
                <>
                  <li>Shirts & Polos</li>
                  <li>Tees</li>
                  <li>Hoodies</li>
                  <li>Sweaters</li>
                  <li>Pants & Chinos</li>
                  <li>Joggers</li>
                  <li>Shorts & Swimwear</li>
                  <li>Coats & Jackets</li>
                  <li>Activewear</li>
                  <li>Underwear</li>
                  <li>Accessories</li>
                  <li>Coming Soon</li>
                  <li>View all</li>
                </>
              ) : (
                <>
                  <li>Sweaters & Knitwear</li>
                  <li>Hoodies</li>
                  <li>Leggings</li>
                  <li>Joggers</li>
                  <li>Sport Bras</li>
                  <li>Bodysuits & Tops</li>
                  <li>Shorts & Skirts</li>
                  <li>Coats & Jackets</li>
                  <li>Activewear</li>
                  <li>Pants</li>
                  <li>Underwear</li>
                  <li>Swimwear & Beachwear</li>
                  <li>Accessories</li>
                  <li>View all</li>
                </>
              )}
            </ul>
          </div>

          <div className='featured-items'>
            <h5>Featured {gender}</h5>
            <div className='flex'>
              {featuredProducts.map(item => (
                <div key={item.id + item.name} className='featured-item' onClick={() => handleOnNavigate(item.name)}>
                  <div className='details'>
                    <p className='name'>{item.name}</p>
                    <p className='price'>${item.price}</p>
                  </div>
                  <img src={item.imgSrc} alt={item.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubMenu
