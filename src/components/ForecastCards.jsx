import { DAY, WEATHER_CODES } from './Const'

import TempsData from './TempsData'
import { WeatherContext } from '../context/WeatherContextProvider'
import WindHumData from './WindHumData'
import { useContext } from 'react'

export default function ForecastCards({ active, setActive }) {
  const { forecast } = useContext(WeatherContext)

  return (
    <div className='grid grid-cols-1 grid-rows-3 gap-3 my-3 md:grid-cols-3 md:grid-rows-1 '>
      {forecast?.forecastday?.map((day, index) => (
        <div
          key={day.date_epoch}
          className={`border-[3px] bg-white h-44 w-full grid grid-cols-3 grid-rows-2 justify-center items-center p-6 cursor-pointer ${
            active === index ? 'border-black' : 'border-cardGray'
          }`}
          onClick={() => setActive(index)}
        >
          <div className='col-span-2'>
            <h3 className='text-xl '>{DAY[new Date(day.date).getDay()]}</h3>
            <h3 className='text-xl text-gray-500'>{day.day.condition.text}</h3>
          </div>
          <img
            src={'./src/img/' + WEATHER_CODES[day.day.condition.code][0]}
            alt='Location'
            width={70}
            height={70}
          />

          <div className='col-span-2 gap-3 '>
            <WindHumData src='wind' text='km/h' data={day.day.maxwind_kph} />
            <WindHumData src='humidity' text='%' data={day.day.avghumidity} />
          </div>
          <div className='flex flex-col mt-4 place-items-end'>
            <TempsData temp={day.day.maxtemp_c} />
            <TempsData temp={day.day.mintemp_c} />
          </div>
        </div>
      )) || <div>Loading...</div>}
    </div>
  )
}