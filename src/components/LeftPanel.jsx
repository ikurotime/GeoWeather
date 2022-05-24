import { DAY, MONTHS } from './Const'
import { useContext, useEffect, useState } from 'react'

import CurrentDayCard from './CurrentDayCard'
import ForecastCards from './ForecastCards'
import ForecastDayCard from './ForecastDayCard'
import SearchBar from './SearchBar'
import { WeatherContext } from '../context/WeatherContextProvider'
import WelcomeMessage from './WelcomeMessage'
import locationImage from '../img/location.png'

export default function LeftPanel() {
  const [active, setActive] = useState(0)

  const { getWeather, location, address, forecast, current } =
    useContext(WeatherContext)

  const { localtime } = location || {}
  useEffect(() => {
    getWeather()
  }, [])

  const time = localtime?.slice(-5)
  const month = localtime?.slice(5, 7)
  const day = localtime?.slice(8, 10)
  const year = localtime?.slice(0, 4)
  const currentDate = ` ${day} ${MONTHS[month]} ${year}`
  const weekday = new Date(currentDate).getDay()
  const date = `${DAY[weekday] + ', ' + currentDate}`

  return (
    <div className='container'>
      <div className='grid items-start w-full grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 sm:items-center'>
        <div>
          <h2 className='text-xl font-bold'>Local time:</h2>
          <h2 className='font-bold text-7xl'>{time}</h2>
          <h2 className='col-span-2 text-2xl'>{date} </h2>
        </div>

        <div className='w-full col-span-1 gap-3 text-left md:col-span-2'>
          <SearchBar />
          <div className='flex items-center justify-end w-full my-3'>
            <img src={locationImage} alt='Location' width={25} height={25} />
            <h2 className='text-base font-bold'>{address}</h2>
          </div>
        </div>
      </div>
      <WelcomeMessage />
      <h2 className='my-5 text-3xl'>Current Day</h2>
      <CurrentDayCard day={current} />
      <h2 className='my-5 text-3xl'>Forecast</h2>
      <ForecastCards active={active} setActive={setActive} />
      <ForecastDayCard day={forecast?.forecastday?.[active]} />
    </div>
  )
}
