/**
 *
 * @param exanple "(min-width: 400px)"
 * @returns true or false
 */

import { useEffect, useState } from 'react'

const useMediaQuery = (mediaQueryString: string) => {
  const [matches, setMaches] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setMaches(window.matchMedia(mediaQueryString).matches)
    }
    window.addEventListener('resize', handleResize)
  }, [mediaQueryString])

  useEffect(() => {
    setMaches(window.matchMedia(mediaQueryString).matches)
  }, [mediaQueryString])

  return matches
}

export default useMediaQuery
