import { DAY, MONTHS } from './Const'

import { WeatherContext } from '../context/WeatherContextProvider'
import { useContext } from 'react'

export default function Date() {
  const { location } = useContext(WeatherContext)
  const { localtime } = location || {}
  // const time = localtime?.slice(-5)
  const month = localtime?.slice(5, 7)
  const day = localtime?.slice(8, 10)
  const year = localtime?.slice(0, 4)
  const currentDate = ` ${day} ${MONTHS[month]} ${year}`
  const weekday = new Date(currentDate).getDay()

  const date = `${DAY[weekday] + ', ' + currentDate}`
  return date
}
