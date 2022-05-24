import { DAY, WEATHER_CODES } from './Const'

import WindHumData from './WindHumData'

export default function ForecastDayCard({ day }) {
  return (
    <div className='grid'>
      <div
        key={day?.last_updated_epoch}
        className=' border-[3px] border-cardGray bg-white h-96 w-full grid grid-cols-3 grid-rows-2 justify-center items-center px-10'
      >
        <div className='col-span-2'>
          <h3 className='text-3xl '>
            {DAY[new Date(day?.last_updated || day?.date).getDay()]}
          </h3>
          <h3 className='text-xl text-gray-500'>{day?.day?.condition?.text}</h3>
        </div>
        <img
          src={
            './src/img/' +
            WEATHER_CODES[day?.day?.condition?.code]?.[
              (day?.condition?.code === 1000 && day?.day?.isDay) === 0 ? 1 : 0
            ]
          }
          alt='Weather'
          width={120}
          height={120}
        />
        <div className='col-span-2 gap-3 '>
          <WindHumData src='wind' text='km/h' data={day?.wind_kph} />
          <WindHumData src='humidity' text='%' data={day?.humidity} />
        </div>
        <div className='flex flex-col mt-4 place-items-end'>
          <div className='flex items-center '>
            <h2 className='text-5xl '>{day?.day?.temp_c}°C</h2>
            <img
              className='w-12 h-12'
              src='./src/img/Temp.png'
              alt='Max temp'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
