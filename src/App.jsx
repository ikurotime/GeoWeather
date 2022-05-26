import Footer from './components/Footer'
import Header from './components/Header'
import MainPanel from './components/MainPanel'
import WeatherContextProvider from './context/WeatherContextProvider'

function App() {
  return (
    <WeatherContextProvider>
      <Header />
      <MainPanel />
      <Footer />
    </WeatherContextProvider>
  )
}

export default App
