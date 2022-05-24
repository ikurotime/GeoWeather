import Footer from './components/Footer'
import Header from './components/Header'
import LeftPanel from './components/LeftPanel'
import WeatherContextProvider from './context/WeatherContextProvider'

function App() {
  return (
    <WeatherContextProvider>
      <Header />
      <div className='grid justify-center min-h-screen gap-3 p-8 bg-white'>
        <LeftPanel />
      </div>
      <Footer />
    </WeatherContextProvider>
  )
}

export default App
