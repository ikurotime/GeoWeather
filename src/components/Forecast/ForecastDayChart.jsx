import { LABELS } from '../Const'
import { Line } from 'react-chartjs-2'

export default function ForecastDayChart({ data }) {
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
    },
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
    <div className='chart-container col-span-4 row-start-3  row-span-2'>
      <Line options={options} data={data2} />
    </div>
  )
}
