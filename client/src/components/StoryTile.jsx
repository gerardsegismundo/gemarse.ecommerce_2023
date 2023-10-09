import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ChevronRightIcon } from '../assets/svg/chev-right.svg'

const StoryTile = ({ to, imgSrc, message, title, className }) => {
  return (
    <Link to={to}>
      <img src={imgSrc} alt='about us' />
      <p>{message}</p>
      <h4>
        <ChevronRightIcon />
        {title}
      </h4>
    </Link>
  )
}

export default StoryTile
