import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Headers from './Headers'
import CartDrawer from './CartDrawer'
import Footer from './Footer'
import SubMenu from './SubMenu'
import RecentlyViewed from './RecentlyViewed'

import useViewportHeightVariable from '../utils/hooks/useViewportHeightVariable'
import MobileSubMenu from './MobileSubMenu'
import { useIsSmallerThan } from '../utils/hooks'

const Layout = ({ children }) => {
  const location = useLocation()
  const isOnSearchPage = location.pathname === '/search'
  const IsSmallerThanDesktop = useIsSmallerThan('desktop')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useViewportHeightVariable()

  return (
    <>
      <Headers />

      <SubMenu />
      {IsSmallerThanDesktop && <MobileSubMenu />}
      <CartDrawer />
      {children}
      {!isOnSearchPage && <RecentlyViewed />}
      <Footer />
    </>
  )
}

export default Layout
