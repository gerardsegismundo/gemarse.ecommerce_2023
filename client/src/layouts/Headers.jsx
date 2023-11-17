import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon } from '../assets/svg/cart.svg'
import { ReactComponent as UserIcon } from '../assets/svg/user.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setCartDrawerIsOpen, setSubMenu } from '../redux/actions'
import { useScrollListener, useIsSmallerThan, useIsLightPage } from '../utils/hooks'
import MobileMenu from './MobileMenu'

const Header = () => {
  const dispatch = useDispatch()

  const IsSmallerThanDesktop = useIsSmallerThan('desktop')
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
        {IsSmallerThanDesktop ? (
          <MobileMenu />
        ) : (
          <nav>
            <ul>
              <li className='mens' onMouseEnter={() => handleOnHover('mens')}>
                <Link to='/mens'>Mens</Link>
              </li>
              <li className='womens' onMouseEnter={() => handleOnHover('womens')}>
                <Link to='/womens'>Womens</Link>
              </li>
            </ul>
          </nav>
        )}

        <h1 className='brand'>
          <Link to='/' aria-label='Gemarse Homepage'>
            Gemarse
          </Link>
        </h1>
        <div className='actions'>
          <Link to='/account/login' aria-label='Account'>
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
