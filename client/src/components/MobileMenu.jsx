import React, { useState } from 'react'

const MobileMenu = () => {
  const [menuIsOpen, toggleMenu] = useState(false)
  const handleOnToggle = () => toggleMenu(!menuIsOpen)

  return (
    <div className='mobile-menu'>
      <input id='menu-checkbox' type='checkbox' checked={menuIsOpen} onChange={handleOnToggle} />
      <label htmlFor='menu-checkbox'>
        <span className='menu-icon' />
      </label>
    </div>
  )
}

export default MobileMenu
