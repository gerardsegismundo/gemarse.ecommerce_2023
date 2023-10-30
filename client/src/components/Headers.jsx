import { Link } from 'react-router-dom'

import MobileMenu from './MobileMenu'

import { ReactComponent as CartIcon } from '../assets/svg/cart.svg'
import { ReactComponent as UserIcon } from '../assets/svg/user.svg'

import { useDispatch, useSelector } from 'react-redux'
import { setCartDrawerIsOpen, setSubMenu } from '../redux/actions'

import { useScrollListener, useIsSmallerThanDesktop, useIsLightPage } from '../utils/hooks'

const Header = () => {
  const dispatch = useDispatch()

  const IsSmallerThanDesktop = useIsSmallerThanDesktop()
  const isOnLightPage = useIsLightPage()
  const scrolled = useScrollListener()

  const { totalItemsInCart } = useSelector(state => state.cart)
  const { isOpen: subMenuIsOpen } = useSelector(state => state.ui.subMenu)

  const handleOpenCart = () => dispatch(setCartDrawerIsOpen(true))

  const handleOnHover = gender => {
    dispatch(setSubMenu({ isOpen: true, gender }))
  }

  return (
    <header className={scrolled || subMenuIsOpen || isOnLightPage ? 'active' : ''}>
      <div className='header-container'>
        {IsSmallerThanDesktop && <MobileMenu />}
        <nav>
          <ul>
            <li className='mens' onMouseEnter={() => handleOnHover('mens')}>
              <Link to='/mens'>Mens</Link>
            </li>
            <li className='womens' onMouseEnter={() => handleOnHover('womens')}>
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
          <Link to='/account' aria-label='Account'>
            <UserIcon />
          </Link>
          <div className='cart-group'>
            <CartIcon onClick={handleOpenCart} />
            <i className='items-in-cart'>{totalItemsInCart}</i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
