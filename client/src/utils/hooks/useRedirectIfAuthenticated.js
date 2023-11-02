import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function useRedirectIfAuthenticated() {
  const { isAuthenticated } = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/account/dashboard')
  }, [isAuthenticated])
}

export default useRedirectIfAuthenticated
