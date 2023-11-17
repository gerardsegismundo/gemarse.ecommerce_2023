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
        <nav>
          {isMen ? (
            <ul>
              <li>Shirts & Polos</li>
              <li>Tees</li>
              <li>Hoodies</li>
              <li>Sweaters</li>
              <li>Pants & Chinos</li>
              <li>Joggers</li>
              <li>Shorts & Swimwear</li>
              <li>Coats & Jackets</li>
              <li>Activewear</li>
              <li>Underwear</li>
              <li>Accessories</li>
            </ul>
          ) : (
            <ul>
              <li>Sweaters & Knitwear</li>
              <li>Hoodies</li>
              <li>Leggings</li>
              <li>Joggers</li>
              <li>Sport Bras</li>
              <li>Bodysuits & Tops</li>
              <li>Shorts & Skirts</li>
              <li>Coats & Jackets</li>
              <li>Activewear</li>
              <li>Pants</li>
              <li>Underwear</li>
              <li>Swimwear & Beachwear</li>
              <li>Accessories</li>
            </ul>
          )}
        </nav>
      </div>
      <div className='dark-overlay'></div>
    </div>
  )
}

export default MobileSubMenu
