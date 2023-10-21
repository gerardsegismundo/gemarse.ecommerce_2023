import { useState, useEffect } from 'react'

function useScrollListener() {
  const [scrolled, setScrolled] = useState(false)
  console.log('WHEY!')
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(scrolled)
  return scrolled
}

export default useScrollListener
