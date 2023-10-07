import { useEffect } from 'react'

const useDisableScroll = cartDrawerIsOpen => {
  useEffect(() => {
    if (cartDrawerIsOpen) document.body.classList.add('disable-scrollbar')
    else document.body.classList.remove('disable-scrollbar')

    return () => document.body.classList.remove('disable-scrollbar')
  }, [cartDrawerIsOpen])
}

export default useDisableScroll
