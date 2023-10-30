import { useState, useEffect } from 'react'

function useIsSmallerThanDesktop() {
  const [IsSmallerThanDesktop, setIsSmallerThanDesktop] = useState(window.innerWidth <= 1366)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerThanDesktop(window.innerWidth <= 1366)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return IsSmallerThanDesktop
}

export default useIsSmallerThanDesktop
