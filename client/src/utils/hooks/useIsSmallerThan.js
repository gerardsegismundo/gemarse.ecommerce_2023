import { useState, useEffect } from 'react'

function useIsSmallerThan(gadget) {
  const breakpoints = {
    tablet: 768,
    desktop: 1366,
    LGdesktop: 1920
  }

  const breakpoint = breakpoints[gadget]

  const [isSmallerThanBreakpoint, setIsSmallerThanBreakpoint] = useState(window.innerWidth <= breakpoint)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerThanBreakpoint(window.innerWidth <= breakpoint)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint])

  return isSmallerThanBreakpoint
}

export default useIsSmallerThan
