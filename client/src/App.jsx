import { Route, Routes } from 'react-router'
import { Home, Mens, Womens, Accessories, Login, Search, Cart, CheckoutSuccess, Product, NotFound } from './pages'
import { Register, Dashboard } from './pages'

import Layout from './layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const App = () => {
  const { accessToken } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // const getCurrentUser = () => {
  //   console.log('APP CURRENTUSER')
  //   console.log(localStorage.accessToken)
  //   // dispatch(setCurrentUser())
  // }

  // useEffect(() => {
  //   if (localStorage.accessToken) {
  //     getCurrentUser()
  //   }
  // }, [accessToken, localStorage.accessToken])

  return (
    <Layout>
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/account/login' element={<Login />} />
        <Route exact={true} path='/account/dashboard' element={<Dashboard />} />
        <Route exact={true} path='/account/register' element={<Register />} />
        <Route path='/checkout-success' element={<CheckoutSuccess />} />
        <Route exact={true} path='/mens' element={<Mens />} />
        <Route exact={true} path='/womens' element={<Womens />} />
        <Route exact={true} path='/accessories' element={<Accessories />} />
        <Route exact={true} path='/search' element={<Search />} />
        <Route exact={true} path='/cart' element={<Cart />} />
        <Route exact={true} path='/product/:product_name' element={<Product />} />
        <Route exact={true} path='/product/:product_name' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
