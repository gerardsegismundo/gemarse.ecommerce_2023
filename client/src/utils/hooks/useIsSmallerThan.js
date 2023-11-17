import { useState, useEffect } from 'react'

function useIsSmallerThan(gadget) {
  const breakpoints = {
    tablet: 768,
    desktop: 1366,
    LGdesktop: 1920
  }

  const breakpoint = breakpoints[gadget]

  const [IsSmallerThanBreakpoint, setIsSmallerThanBreakpoint] = useState(window.innerWidth <= breakpoint)

  const handleResize = () => setIsSmallerThanBreakpoint(window.innerWidth <= breakpoint)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint, handleResize])

  return IsSmallerThanBreakpoint
}

export default useIsSmallerThan
