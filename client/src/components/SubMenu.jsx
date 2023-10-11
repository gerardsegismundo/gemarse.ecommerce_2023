import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg'

const MensShopByProductListItems = [
  { label: 'Shirts & Polos', url: '' },
  { label: 'Tees', url: '' },
  { label: 'Hoodies', url: '' },
  { label: 'Sweaters', url: '' },
  { label: 'Pants & Chinos', url: '' },
  { label: 'Joggers', url: '' },
  { label: 'Shorts & Swimwear', url: '' },
  { label: 'Coats & Jackets', url: '' },
  { label: 'Activewear', url: '' },
  { label: 'Underwear', url: '' },
  { label: 'Accessories', url: '' },
  { label: 'Coming Soon', url: '' },
  { label: 'ViewList', url: '' }
]

const SubMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`submenu ${isOpen ? ' open' : ''}`}>
      <div className='container'>
        <form className='search-group'>
          <button>
            <SearchIcon />
          </button>
          <input type='search' name='search' placeholder='Search for products, categories and color' />
        </form>

        <div className='nav-list'>
          <section className='nav-section'></section>

          <section className='nav-featured'>
            <ul></ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default SubMenu
