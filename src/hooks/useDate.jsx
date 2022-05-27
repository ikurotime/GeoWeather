import { DAY, MONTHS } from '../components/Const'

import { WeatherContext } from '../context/WeatherContextProvider'
import { useContext } from 'react'

const useDate = () => {
  const { location } = useContext(WeatherContext)

  const { localtime } = location || ''
  const time = localtime?.slice(-5)
  const month = localtime?.slice(5, 7)
  const day = localtime?.slice(8, 10)
  const year = localtime?.slice(0, 4)
  const currentDate = ` ${day} ${MONTHS[month]} ${year}`
  const weekday = new Date(currentDate).getDay() || 0

  const date = `${DAY[weekday] + ', ' + currentDate}`
  return { time, date }
}

export default useDate
