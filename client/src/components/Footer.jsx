import React from 'react'
import { ReactComponent as TwitterIcon } from '../assets/svg/twitter.svg'
import { ReactComponent as FacebookIcon } from '../assets/svg/facebook.svg'
import { ReactComponent as InstagramIcon } from '../assets/svg/instagram.svg'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-header'>
          <h2>Gemarse</h2>
          <div className='social-groups'>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className='navigation-cols'></div>
      </div>
    </footer>
  )
}

export default Footer
