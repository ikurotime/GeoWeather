import { memo, useContext } from 'react'

import { GoogleMap } from '@react-google-maps/api'
import { WeatherContext } from '../context/WeatherContextProvider'

function Map({ className }) {
  const { location } = useContext(WeatherContext)
  const center = {
    lat: location.lat,
    lng: location.lon
  }
  return (
    <GoogleMap mapContainerClassName={className} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  )
}

export default memo(Map)
