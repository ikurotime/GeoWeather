import { useContext, useEffect } from 'react'

import { WeatherContext } from '../context/WeatherContextProvider'
import useCurrentLocation from '../hooks/useCurrentLocation'
import { DEFAULT_LOCATIONS, geolocationOptions } from './Const'
import Footer from './HeaderFooter/Footer'
import Header from './HeaderFooter/Header'
import MainPanel from './MainPanel'

export default function Routes() {
  const { location } = useCurrentLocation(geolocationOptions)
  const { getWeather } = useContext(WeatherContext)

  useEffect(() => {
    if (location !== undefined) {
      getWeather(location)
    } else {
      getWeather(
        DEFAULT_LOCATIONS[Math.floor(Math.random() * DEFAULT_LOCATIONS.length)]
      )
    }
  }, [location])

  return (
    <>
      <Header />
      <MainPanel />
      <Footer />
    </>
  )
}
