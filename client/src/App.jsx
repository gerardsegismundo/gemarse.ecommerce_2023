import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { Home, Mens, Womens, Accessories, Account, Search, Cart, CheckoutSuccess } from './pages'
import Header from './components/Headers'
import { CartDrawer, Footer, SubMenu, RecentlyViewed, Product } from './components'
import { useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()

  const isOnSearchPage = location.pathname === '/search'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Header />
      <SubMenu />
      <CartDrawer />

      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/account' element={<Account />} />
        <Route path='/checkout-success' element={<CheckoutSuccess />} />
        <Route exact={true} path='/mens' element={<Mens />} />
        <Route exact={true} path='/womens' element={<Womens />} />
        <Route exact={true} path='/accessories' element={<Accessories />} />
        <Route exact={true} path='/search' element={<Search />} />
        <Route exact={true} path='/cart' element={<Cart />} />
        <Route exact={true} path='/product/:product_name' element={<Product />} />
      </Routes>

      {!isOnSearchPage && <RecentlyViewed />}
      <Footer />
    </>
  )
}

export default App
