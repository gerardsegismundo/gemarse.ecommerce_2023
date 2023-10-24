import { useState } from 'react'

import { ReactComponent as ChevDownIcon } from '../assets/svg/chev-down.svg'

const Accordion = ({ children, title, icon: Icon }) => {
  const [isDetailsOpen, toggleDetails] = useState(false)

  const handleToggleDetails = () => toggleDetails(!isDetailsOpen)

  return (
    <div className='accordion'>
      <div className='header' onClick={handleToggleDetails}>
        {Icon && <Icon />}
        <p className='title'>{title}</p>
        <ChevDownIcon className={`${isDetailsOpen ? 'is-open' : ''}`} />
      </div>
      <div className={`details${isDetailsOpen ? ' is-open' : ''}`}>{children}</div>
    </div>
  )
}

export default Accordion
