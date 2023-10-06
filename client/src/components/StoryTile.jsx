import React from 'react'
import { Link } from 'react-router-dom'

const StoryTile = ({ to, imgSrc, message, title, className }) => {
  return (
    <Link to={to} className={className}>
      <img src={imgSrc} alt='about us' />
      <p>{message}</p>
      <h4>{title}</h4>
    </Link>
  )
}

export default StoryTile
