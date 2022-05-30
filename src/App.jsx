import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'

import Routes from './components/Routes'
import WeatherContextProvider from './context/WeatherContextProvider'

function App() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  )

  return (
    <WeatherContextProvider>
      <Routes />
    </WeatherContextProvider>
  )
}

export default App
