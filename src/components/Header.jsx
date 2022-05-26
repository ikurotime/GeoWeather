import { useContext, useState } from 'react'

import { WeatherContext } from '../context/WeatherContextProvider'

export default function Header() {
  const { degreeType, changeDegreeType } = useContext(WeatherContext)
  const [degree, setDegree] = useState('C')

  const changeDegree = () => {
    if (degreeType === 'C') {
      setDegree('F')
      changeDegreeType('F')
    } else {
      setDegree('C')
      changeDegreeType('C')
    }
  }

  return (
    <div className='grid w-full p-5 bg-gray-900 xl:grid-cols-12 2xl:grid-cols-6'>
      <h1 className='col-span-1 text-2xl font-bold text-white xl:col-start-2'>
        GeoWeather
      </h1>
      <div className='flex items-center col-span-1 col-start-12 gap-1 text-base font-bold '>
        <button
          className={degree === 'C' ? 'text-yellow-500' : 'text-white'}
          type='button'
          onClick={() => changeDegree()}
        >
          Cº
        </button>
        <span className='text-white'>/</span>
        <button
          className={degree === 'F' ? 'text-yellow-500' : 'text-white'}
          type='button'
          onClick={() => changeDegree()}
        >
          Fº
        </button>
      </div>
    </div>
  )
}
