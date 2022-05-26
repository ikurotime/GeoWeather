import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'

import { LABELS } from './Const'
import { Line } from 'react-chartjs-2'

export default function ForecastDayChart({ data }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  )

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
    plugins: {
      legend: {
        position: 'top',
        display: false
      }
    }
  }

  return (
    <div className='chart-container col-span-4 row-start-3  row-span-2'>
      <Line options={options} data={data2} />
    </div>
  )
}
