import { useState } from 'react'
import { useSelector } from 'react-redux'

const MobileSubMenu = () => {
  const { mobileSubMenuIsOpen } = useSelector(state => state.ui)
  const [isMen, setIsMen] = useState(true)

  return (
    <div className='mobile-submenu' data-is-open={mobileSubMenuIsOpen}>
      <div className='drawer'>
        <div className='navigation-buttons'>
          <button onClick={() => setIsMen(true)} disabled={isMen}>
            Mens
          </button>
          <button onClick={() => setIsMen(false)} disabled={!isMen}>
            Womens
          </button>
        </div>
      </div>
      <div className='dark-overlay'></div>
    </div>
  )
}

export default MobileSubMenu
