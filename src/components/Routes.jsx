import { useContext, useEffect } from 'react'

import Footer from './Footer'
import Header from './Header'
import Loading from './Loading.jsx'
import MainPanel from './MainPanel'
import { WeatherContext } from '../context/WeatherContextProvider'
import { geolocationOptions } from './Const'
import useCurrentLocation from '../hooks/useCurrentLocation'

export default function Routes() {
  const { location, error } = useCurrentLocation(geolocationOptions)
  const { getWeather } = useContext(WeatherContext)

  useEffect(() => {
    if (location !== undefined) {
      getWeather(location)
    }
    console.log(location)
  }, [location])
  return location ? (
    <>
      <Header />
      <MainPanel />
      <Footer />
    </>
  ) : (
    <Loading error={error} />
  )
}
