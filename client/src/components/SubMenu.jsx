import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg'

const MensShopByProductLists = [
  { label: 'Shirts & Polos', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' },
  { label: '', url: '' }
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
