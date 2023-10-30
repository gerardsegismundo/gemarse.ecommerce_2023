import { useLocation } from 'react-router-dom'
import { useMatch } from 'react-router'

function useIsLightPage() {
  const location = useLocation()

  const isOnAccountPage = location.pathname === '/account'
  const isOnCartPage = location.pathname === '/cart'
  const isOnSearchPage = location.pathname === '/search'
  const isOnProductPage = useMatch('/product/:product_name')

  return isOnAccountPage || isOnProductPage || isOnSearchPage || isOnCartPage
}

export default useIsLightPage