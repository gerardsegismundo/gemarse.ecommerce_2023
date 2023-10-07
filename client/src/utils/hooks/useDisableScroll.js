import { useEffect } from 'react'

const useDisableScroll = isEnabled => {
  useEffect(() => {
    if (isEnabled) document.body.classList.add('disable-scrollbar')
    else document.body.classList.remove('disable-scrollbar')

    return () => document.body.classList.remove('disable-scrollbar')
  }, [isEnabled])
}

export default useDisableScroll
