import { useContext, useEffect, useState } from 'react'

import { LABELS } from '../Const'
import { Line } from 'react-chartjs-2'
import { WeatherContext } from '../../context/WeatherContextProvider'

export default function CurrentDayChart() {
  const { degreeType, forecast } = useContext(WeatherContext)

  const [data, setData] = useState([])
  useEffect(() => {
    setData([])
    forecast?.forecastday?.[0]?.hour?.forEach((day, index) => {
      setData((prev) => [...prev, degreeType === 'C' ? day.temp_c : day.temp_f])
    })
  }, [forecast, degreeType])

  const data2 = {
    labels: LABELS,
    datasets: [
      {
        label: 'Temperature',
        backgroundColor: '#EAC435',
        borderColor: 'rgba(234, 196, 53,0.5)',
        data
      }
    ]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 3,
    scales: {
      x: {
        ticks: {
          color: 'gray'
        }
      },
      y: {
        ticks: {
          color: 'gray'
        }
      }
    }
  }

  return (
    <div className='relative chart-container col-span-4 row-start-3 row-span-2 h-[85%]'>
      <Line options={options} data={data2} />
    </div>
  )
}
