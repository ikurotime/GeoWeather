import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'

import Footer from './components/Footer'
import Header from './components/Header'
import MainPanel from './components/MainPanel'
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
      <Header />
      <MainPanel />
      <Footer />
    </WeatherContextProvider>
  )
}

export default App
