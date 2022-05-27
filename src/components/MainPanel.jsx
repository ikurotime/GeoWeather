import { useContext, useEffect, useState } from 'react'

import CurrentDayCard from './CurrentDayCard'
import ForecastCards from './ForecastCards'
import ForecastDayCard from './ForecastDayCard'
import SearchBar from './SearchBar'
import { WeatherContext } from '../context/WeatherContextProvider'
import WelcomeMessage from './WelcomeMessage'
import locationImage from '../img/location.png'
import useDate from '../hooks/useDate'

export default function MainPanel() {
  const [active, setActive] = useState(0)
  const { time, date } = useDate()
  const { getWeather, address } = useContext(WeatherContext)

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div className='relative z-0 grid justify-center min-h-screen gap-3 p-8 bg-white dark:bg-slate-800'>
      <div className='container max-w-5xl'>
        <WelcomeMessage />
        <div
          className='relative z-20 grid items-start w-full grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 sm:items-center delay-150 duration-700 transform opacity-0 transition-all translate-y-12 ease-out'
          data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
        >
          <div>
            <h2 className='text-xl font-bold dark:text-gray-100'>
              Local time:
            </h2>
            <h2 className='font-bold text-7xl dark:text-gray-100'>
              {time || ''}
            </h2>
            <h2 className='col-span-2 text-2xl dark:text-gray-100'>
              {date || ''}{' '}
            </h2>
          </div>

          <div className='w-full col-span-1 gap-3 text-left md:col-span-2'>
            <SearchBar />
            <div className='flex items-center justify-end w-full my-3'>
              <img src={locationImage} alt='Location' width={25} height={25} />
              <h2 className='text-base font-bold dark:text-gray-100'>
                {address}
              </h2>
            </div>
          </div>
        </div>
        <h2
          className='relative -z-10 my-5 text-3xl delay-200 duration-700 transform opacity-0 transition-all translate-y-12 ease-out dark:text-gray-100'
          data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
        >
          Current Day
        </h2>
        <CurrentDayCard />
        <h2
          className='my-5 text-3xl delay-300 duration-700 transform opacity-0 transition-all translate-y-12 ease-out dark:text-gray-100'
          data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
        >
          Forecast
        </h2>
        <ForecastCards active={active} setActive={setActive} />
        <ForecastDayCard active={active} />
      </div>
    </div>
  )
}
