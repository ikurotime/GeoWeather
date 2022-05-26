import { DAY, WEATHER_CODES } from './Const'
import { useContext, useEffect, useState } from 'react'

import LineGraph from 'react-line-graph'
import Map from './Map'
import { WeatherContext } from '../context/WeatherContextProvider'
import WindHumData from './WindHumData'

export default function CurrentDayCard() {
  const { degreeType, current, forecast } = useContext(WeatherContext)

  const [degrees, setDegrees] = useState([0, 0])
  const [data, setData] = useState([])
  useEffect(() => {
    setData([])
    forecast?.forecastday?.[0]?.hour?.forEach((day, index) => {
      setData((prev) => [
        ...prev,
        {
          x: index,
          y: degreeType === 'C' ? day.temp_c : day.temp_f
        }
      ])
    })
  }, [forecast, degreeType])

  const props = {
    data,
    smoothing: 1,
    accent: '#EAC435',
    fillBelow: 'rgba(234, 196, 53,0.1)',
    hover: true,
    compression: 0.1,
    onHover: (n) => {
      if (n !== degrees) {
        setDegrees(n)
      }
    }
  }

  return (
    <div className='grid grid-cols-1 bg-white gap-y-3 md:gap-y-0 gap-x-0 md:gap-x-3 md:grid-cols-3 border-cardGray'>
      <div className='relative border-[3px] col-span-2 h-96 w-full grid grid-cols-2 sm:grid-cols-4 grid-rows-4 justify-center items-center px-5 sm:px-10'>
        <div className='col-start-1 row-start-1'>
          <h3 className='mt-10 text-3xl place-self-start'>
            {DAY[new Date(current.last_updated).getDay()]}
          </h3>
          <h3 className='mb-6 text-xl text-gray-500'>
            {current.condition?.text}
          </h3>
        </div>
        <div className='col-span-1 col-start-3 '></div>
        <img
          className='mt-5 place-self-end'
          src={
            './src/img/' +
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
        <div className='absolute self-end w-full col-span-3 row-span-2 border-t-2 h-2/5'>
          <p className='absolute text-gray-500 top-2 left-5'>
            Temp: {degrees[1]}º{degreeType}
          </p>
          <p className='absolute text-gray-500 top-8 left-5'>
            Hour: {degrees[0]}h
          </p>
          <div className='absolute w-full overflow-hidden text-center bottom-2'></div>

          <LineGraph {...props}>
            <p>{degrees}</p>
          </LineGraph>
        </div>
        <div className='col-span-2 gap-3 '>
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
        <div className='flex flex-col col-start-4 mt-4 place-items-end'>
          <div className='flex items-center '>
            <h2 className='col-span-2 text-4xl font-bold sm:text-5xl'>
              {degreeType === 'C'
                ? current.temp_c + 'ºC'
                : current.temp_f + 'ºF'}
            </h2>
            <img
              className='w-12 h-12'
              src='./src/img/Temp.png'
              alt='Max temp'
            />
          </div>
        </div>
      </div>
      <Map
        isMarkerShown
        className='items-end w-full row-span-1 h-96 md:h-full'
      />
    </div>
  )
}
