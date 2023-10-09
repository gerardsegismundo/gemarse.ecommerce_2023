import { useState, useEffect } from 'react'

function useResponsiveSlideAmount() {
  const [slideAmount, setSlideAmount] = useState(630) // Default slideAmount

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth

      if (screenWidth < 768) {
        setSlideAmount(365)
      } else if (screenWidth < 1366 && screenWidth > 768) {
        setSlideAmount(497.5)
      } else {
        setSlideAmount(630)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return slideAmount
}

export default useResponsiveSlideAmount
