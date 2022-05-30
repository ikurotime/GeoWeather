import { memo, useContext, useEffect, useState } from 'react'

import { GoogleMap } from '@react-google-maps/api'
import { WeatherContext } from '../../context/WeatherContextProvider'

function Map({ className }) {
  const { location, searchWeatherByLatLng } = useContext(WeatherContext)
  const [center, setCenter] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    if (location) {
      setCenter({ lat: location.lat, lng: location.lon })
    }
  }, [location])
  const handleClick = (n) => {
    searchWeatherByLatLng({
      lat: n.latLng.lat(),
      lng: n.latLng.lng()
    })
  }
  return (
    <GoogleMap
      mapContainerClassName={className}
      center={center}
      zoom={10}
      onClick={handleClick}
    />
  )
}

export default memo(Map)
