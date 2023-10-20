import { Route, Routes } from 'react-router'
import { Home, Mens, Womens, Accessories } from './pages'
import Header from './components/Headers'
import { CartDrawer, Footer, SubMenu, RecentlyViewed } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <SubMenu />
      <CartDrawer />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/mens' element={<Mens />} />
        <Route exact={true} path='/womens' element={<Womens />} />
        <Route exact={true} path='/accessories' element={<Accessories />} />
      </Routes>
      <RecentlyViewed />
      <Footer />
    </div>
  )
}

export default App
