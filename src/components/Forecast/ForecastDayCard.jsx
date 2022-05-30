import { DAY, WEATHER_CODES } from '../Const'
import { useContext, useEffect, useState } from 'react'

import { ForecastDayChart } from '../Forecast'
import { Img } from '../Utils'
import Temp from '../../img/Temp.png'
import { WeatherContext } from '../../context/WeatherContextProvider'
import WindHumData from '../Utils/WindHumData'

export default function ForecastDayCard({ active }) {
  const { forecast, degreeType } = useContext(WeatherContext)
  const day = forecast?.forecastday?.[active]

  const [data, setData] = useState([])

  useEffect(() => {
    setData([])
    day?.hour?.forEach((day, index) => {
      setData((prev) => [
        ...prev,
        {
          x: index,
          y: degreeType === 'C' ? day.temp_c : day.temp_f
        }
      ])
    })
  }, [forecast, degreeType, active])

  return (
    <div
      className='grid grid-cols-1  bg-white  dark:bg-slate-700 gap-y-3 md:gap-y-0 gap-x-0 md:gap-x-3 md:grid-cols-3 delay-300 duration-700 transform opacity-0 transition-all translate-y-12 ease-out'
      data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
    >
      <div className='relative border-[3px] border-cardGray  dark:border-slate-900 col-span-3 h-96 w-full grid grid-cols-2 sm:grid-cols-4 grid-rows-4 justify-center items-center px-5 sm:px-10'>
        <div className='col-start-1 row-start-1'>
          <h3 className='mt-10 text-3xl place-self-start dark:text-gray-100'>
            {DAY[new Date(day?.date).getDay()]}
          </h3>
          <h3 className='mb-6 text-xl text-gray-500 dark:text-cardGray'>
            {day?.day?.condition?.text}
          </h3>
        </div>
        <div className='col-span-1 col-start-3 '></div>
        <Img
          className='mt-5 place-self-end'
          src={
            WEATHER_CODES[day?.day?.condition?.code]?.[
              (day?.day?.condition?.code === 1000 && day?.day?.is_day) === 0
                ? 1
                : 0
            ]
          }
          alt='Weather'
          width={90}
          height={90}
        />
        <ForecastDayChart data={data} />
        <div className='col-span-3 gap-3 '>
          <WindHumData
            src='wind'
            title='Max Wind: '
            text={' km/h '}
            data={`${day?.day?.maxwind_kph}`}
          />

          <WindHumData
            src='humidity'
            title='Avg Humidity: '
            text='%'
            data={day?.day?.avghumidity}
          />
        </div>
        <div className='flex flex-col col-start-4 mt-4 place-items-end'>
          <div className='flex items-center flex-col-reverse sm:flex-row'>
            <h2 className='col-span-2 text-2xl font-bold sm:text-3xl lg:text-4xl dark:text-gray-100'>
              {degreeType === 'C'
                ? day?.day?.avgtemp_c + '°C'
                : day?.day?.avgtemp_f + '°F'}
            </h2>
            <img className='w-12 h-12' src={Temp} alt='Max temp' />
          </div>
        </div>
      </div>
    </div>
  )
}
