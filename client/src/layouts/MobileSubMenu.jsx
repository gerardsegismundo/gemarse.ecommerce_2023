import { useState } from 'react'

const MobileSubMenu = () => {
  const [isMen, setIsMen] = useState(true)

  return (
    <div className='mobile-submenu'>
      <div className='navigation-buttons'>
        <button onClick={() => setIsMen(true)} disabled={isMen}>
          Mens
        </button>
        <button onClick={() => setIsMen(false)} disabled={!isMen}>
          Womens
        </button>
      </div>
    </div>
  )
}

export default MobileSubMenu
