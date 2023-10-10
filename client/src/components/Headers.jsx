import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import { ReactComponent as CartIcon } from '../assets/svg/cart.svg'
import { ReactComponent as UserIcon } from '../assets/svg/user.svg'

import { useDispatch } from 'react-redux'
import { setCartDrawerIsOpen } from '../redux/actions'
import useScrollListener from '../utils/hooks/useScrollListener'

const Header = () => {
  const scrolled = useScrollListener()
  const dispatch = useDispatch()

  const handleOpenCart = () => dispatch(setCartDrawerIsOpen(true))

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className='header-container'>
        <MobileMenu />
        <nav>
          <ul>
            <li className='mens'>
              <Link to='/mens'>Mens</Link>
            </li>
            <li className='womens'>
              <Link to='/womens'>Womens</Link>
            </li>
            <li className='accessories'>
              <Link to='/accessories'>Accessories</Link>
            </li>
          </ul>
        </nav>
        <h1 className='brand'>
          <Link to='/' aria-label='Gemarse Homepage'>
            Gemarse
          </Link>
        </h1>
        <div className='actions'>
          <CartIcon onClick={handleOpenCart} />
          <UserIcon />
        </div>
      </div>
    </header>
  )
}

export default Header
