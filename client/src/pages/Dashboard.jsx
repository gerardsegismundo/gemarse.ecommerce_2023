import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/thunk/authThunk'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logoutAsync())

  useEffect(() => {
    if (!isAuthenticated) navigate('/account/login')
  }, [isAuthenticated, navigate])

  return (
    <div className='dashboard-page'>
      <div className='container'>
        <h1>Welcome to Dashboard</h1>
        {user && user.email}
        <button className='btn-dark bordered' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
