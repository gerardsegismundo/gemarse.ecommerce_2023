import { useDispatch, useSelector } from 'react-redux'

import { toggleMobileSubMenu } from '../redux/slice/uiSlice'
import useDisableScroll from '../utils/hooks/useDisableScroll'

const MobileMenu = () => {
  const { mobileSubMenuIsOpen } = useSelector(state => state.ui)
  const dispatch = useDispatch()

  useDisableScroll(mobileSubMenuIsOpen)

  return (
    <div className='mobile-menu'>
      <input
        id='menu-checkbox'
        type='checkbox'
        checked={mobileSubMenuIsOpen}
        onChange={() => dispatch(toggleMobileSubMenu())}
      />
      <label htmlFor='menu-checkbox'>
        <span className='menu-icon' />
      </label>
    </div>
  )
}

export default MobileMenu
