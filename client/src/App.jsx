import { Route, Routes } from 'react-router'
import { Home, Mens, Womens, Accessories, Account, Search, Cart, CheckoutSuccess, Product, NotFound } from './pages'
import { Register } from './pages'

import Layout from './layouts/Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/account' element={<Account />} />
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
