import { useEffect } from 'react'

const useDisableScroll = condition => {
  useEffect(() => {
    if (condition) document.documentElement.classList.add('disable-scrollbar')
    else document.documentElement.classList.remove('disable-scrollbar')

    return () => document.documentElement.classList.remove('disable-scrollbar')
  }, [condition])
}

export default useDisableScroll
