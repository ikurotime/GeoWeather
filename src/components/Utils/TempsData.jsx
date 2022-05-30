import DownArrow from '../../img/DownArrow.png'
import Temp from '../../img/Temp.png'
import UpArrow from '../../img/UpArrow.png'
import { WeatherContext } from '../../context/WeatherContextProvider'
import { useContext } from 'react'

export default function TempsData({ temp, max }) {
  const { degreeType } = useContext(WeatherContext)
  return (
    <div className='flex items-center gap-3'>
      <h2 className='text-xl dark:text-gray-100'>
        {temp}º{degreeType}
      </h2>
      <div className='flex'>
        <img className='w-5 h-5' src={Temp} alt='Max temp' />
        {max ? (
          <img className='w-5 h-5 aspect-square' src={UpArrow} alt='Max temp' />
        ) : (
          <img
            className='w-5 h-5 aspect-square'
            src={DownArrow}
            alt='min temp'
          />
        )}
      </div>
    </div>
  )
}
