import { DAY, WEATHER_CODES } from '../Const'

import CurrentDayChart from './CurrentDayChart'
import Img from '../Utils/Img'
import Map from '../Utils/Map'
import Temp from '../../img/Temp.png'
import { WeatherContext } from '../../context/WeatherContextProvider'
import WindHumData from '../Utils/WindHumData'
import { useContext } from 'react'

export default function CurrentDayCard() {
  const { current, degreeType, forecast } = useContext(WeatherContext)

  return (
    <div
      className='relative z-0 grid grid-cols-1 gap-y-3 md:gap-y-0 gap-x-0 md:gap-x-3 md:grid-cols-3   delay-200 duration-700 transform opacity-0 transition-all translate-y-12 ease-out'
      data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
    >
      <div className='relative border-[3px] bg-white dark:bg-slate-700 dark:border-slate-900 col-span-2 h-fit w-full grid grid-cols-2 sm:grid-cols-4 grid-rows-4 justify-center items-center px-5 sm:px-10'>
        <div className='col-start-1 row-start-1'>
          <h3 className='mt-10 text-3xl place-self-start dark:text-gray-100'>
            {DAY[new Date(current.last_updated).getDay()] || 'Today'}
          </h3>
          <h3 className='mb-6 text-md sm:text-xl text-gray-500 dark:text-cardGray'>
            {current.condition?.text}
          </h3>
        </div>
        <Img
          className='col-start-4 mt-5 place-self-end'
          src={
            WEATHER_CODES[current.condition?.code]?.[
              (current?.condition?.code === 1000 && current?.is_day) === 0
                ? 1
                : 0
            ]
          }
          alt='Weather'
          width={90}
          height={90}
        />
        <CurrentDayChart />
        <div className='row-start-2 col-span-2 gap-3 '>
          <WindHumData
            src='wind'
            title='Wind: '
            text={` km/h - ${current.wind_dir}`}
            data={`${current.wind_kph}`}
          />
          <WindHumData
            src='humidity'
            title='Humidity: '
            text='%'
            data={current.humidity}
          />
          <WindHumData
            src='WindDegree'
            title='Wind Degree: '
            text='º'
            data={current.wind_degree}
          />
          <WindHumData
            src='Temp'
            title='Feels like: '
            text='º'
            data={
              degreeType === 'C' ? current.feelslike_c : current.feelslike_f
            }
          />
        </div>
        <div>
          <WindHumData
            src='sunrise'
            title='Sunrise: '
            text=''
            data={forecast?.forecastday?.[0].astro.sunrise}
            newLine
          />
          <WindHumData
            src='sunset'
            title='Sunset: '
            text=''
            data={forecast?.forecastday?.[0].astro.sunset}
            newLine
          />
        </div>
        <div className='flex flex-col col-start-4 mt-4 place-items-end'>
          <div className='flex items-center flex-col-reverse sm:flex-row'>
            <h2 className='col-span-2 text-2xl md:text-4xl font-bold sm:text-5xl dark:text-gray-100'>
              {degreeType === 'C'
                ? current.temp_c + 'ºC'
                : current.temp_f + 'ºF'}
            </h2>
            <img className='w-12 h-12' src={Temp} alt='Max temp' />
          </div>
        </div>
      </div>
      <Map
        isMarkerShown
        className=' items-end w-full row-span-1 h-96 md:h-full'
      />
    </div>
  )
}
