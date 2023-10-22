import { Route, Routes } from 'react-router'
import { Home, Mens, Womens, Accessories, Account } from './pages'
import Header from './components/Headers'
import { CartDrawer, Footer, SubMenu, RecentlyViewed, Product } from './components'

const App = () => {
  return (
    <>
      <Header />
      <SubMenu />
      <CartDrawer />

      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/account' element={<Account />} />
        <Route exact={true} path='/mens' element={<Mens />} />
        <Route exact={true} path='/womens' element={<Womens />} />
        <Route exact={true} path='/accessories' element={<Accessories />} />
        <Route exact={true} path='/product/:product_name' element={<Product />} />
      </Routes>

      <RecentlyViewed />
      <Footer />
    </>
  )
}

export default App
