import { useEffect } from 'react'

const useDisableScroll = cartDrawerIsOpen => {
  useEffect(() => {
    if (cartDrawerIsOpen) document.documentElement.classList.add('disable-scrollbar')
    else document.documentElement.classList.remove('disable-scrollbar')

    return () => document.documentElement.classList.remove('disable-scrollbar')
  }, [cartDrawerIsOpen])
}

export default useDisableScroll
