import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found-page container'>
      <h4>404 Page not found.</h4>

      <p>
        The page you requested does not exist. <Link to='/'>Click here</Link> to continue shopping.
      </p>
    </div>
  )
}

export default NotFound
