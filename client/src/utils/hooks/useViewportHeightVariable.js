import { useEffect } from 'react'

const useViewportHeightVariable = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])
}

export default useViewportHeightVariable
