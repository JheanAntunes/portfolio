/**
 *
 * @param exanple "(min-width: 400px)"
 * @returns true or false
 */

import { useEffect, useState } from 'react'

const useMediaQuery = (mediaQueryString: string) => {
  const [matches, setMaches] = useState(false)

  useEffect(() => {
    setMaches(window.matchMedia(mediaQueryString).matches)
  }, [setMaches, mediaQueryString])

  return matches
}

export default useMediaQuery
