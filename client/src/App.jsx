import { Route, Routes, Outlet } from 'react-router'
import { Home, Mens, Womens, Login, Search, Cart, CheckoutSuccess, Product, NotFound } from './pages'
import { Register, Dashboard } from './pages'

import Layout from './layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentUser } from './redux/thunk/authThunk'

const App = () => {
  const { isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthenticated && localStorage.accessToken) {
      dispatch(getCurrentUser())
    }
  }, [isAuthenticated, dispatch])

  return (
    <Layout>
      <Routes>
        <Route exact={true} path='/' element={<Home />} />

        <Route path='/checkout-success' element={<CheckoutSuccess />} />
        <Route exact={true} path='/mens' element={<Mens />} />
        <Route exact={true} path='/womens' element={<Womens />} />
        <Route exact={true} path='/search' element={<Search />} />
        <Route exact={true} path='/cart' element={<Cart />} />
        <Route exact={true} path='/product/:product_name' element={<Product />} />
        <Route exact={true} path='/product/:product_name' element={<Product />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/account/' element={<Outlet />}>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
