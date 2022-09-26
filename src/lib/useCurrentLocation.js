import { useState, useEffect } from 'react'

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords

    setLocation({
      latitude,
      longitude,
    })
  }

  const handleError = (err) => {
    setError(err.message)
  }

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }

    geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])

  return { location, error }
}

export default useCurrentLocation
