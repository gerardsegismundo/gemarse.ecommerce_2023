import { useLocation } from 'react-router-dom'
import { useMatch } from 'react-router'

function useIsLightPage() {
  const location = useLocation()

  const lightPages = ['/account', '/account/register', '/account/login', '/account/dashboard', '/cart', '/search']

  const isOnProductPage = useMatch('/product/:product_name')

  return lightPages.includes(location.pathname) || isOnProductPage
}

export default useIsLightPage
