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
    <div className='flex justify-around w-full p-5 bg-gray-900 items-center'>
      <h1 className='text-2xl font-bold text-white lg:col-start-2'>
        GeoWeather
      </h1>
      <div className='flex gap-1 text-base'>
        <button
          className={
            degree === 'C'
              ? 'text-yellow-500 font-bold'
              : 'text-white font-bold'
          }
          type='button'
          onClick={() => changeDegree()}
        >
          Cº
        </button>
        <span className='text-white font-bold'>/</span>
        <button
          className={
            degree === 'F'
              ? 'text-yellow-500 font-bold'
              : 'text-white font-bold'
          }
          type='button'
          onClick={() => changeDegree()}
        >
          Fº
        </button>
      </div>
    </div>
  )
}
