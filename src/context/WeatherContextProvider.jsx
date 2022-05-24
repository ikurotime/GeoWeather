import { createContext, useReducer } from 'react'

import { OPTIONS } from '../components/Const'
import WeatherReducer from './WeatherReducer'

export const WeatherContext = createContext()
const initialState = {
  error: '',
  current: {},
  forecast: {},
  location: {},
  address: '',
  initialCords: {}
}

export default function WeatherContextProvider(props) {
  const [state, dispatch] = useReducer(WeatherReducer, initialState)

  const getWeather = async () => {
    const url = 'https://geolocation-db.com/json/'
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { latitude, longitude } = data
        dispatch({ type: 'SET_COORDS', payload: { latitude, longitude } })
        const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${latitude}%2C${longitude}&days=3`
        fetch(url, OPTIONS)
          .then((res) => res.json())
          .then((data) => {
            dispatch({
              type: 'GET_WEATHER',
              payload: data
            })
            const { location } = data
            const { name, region, country } = location
            dispatch({
              type: 'CHANGE_ADDRESS',
              payload: `${name}, ${region}, ${country}`
            })
          })
      })
  }
  const searchWeather = ({ newAddress }) => {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${newAddress}&days=3`
    try {
      fetch(url, OPTIONS)
        .then((res) => {
          if (!res.ok) {
            res.json().then((data) => {
              dispatch({
                type: 'SET_ERROR',
                payload: data.error.message
              })
            })
            throw new Error(res.statusText)
          } else {
            return res.json()
          }
        })
        .then((data) => {
          dispatch({
            type: 'SEARCH_WEATHER',
            payload: data
          })
          const { location } = data
          const { name, region, country } = location
          dispatch({
            type: 'CHANGE_ADDRESS',
            payload: `${name}, ${region}, ${country}`
          })
        })
    } catch (err) {
      console.log(err)
    }
  }
  const refreshWeather = ({ address }) => {
    console.log('refreshWeather', address)

    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${address}&days=3`
    try {
      fetch(url, OPTIONS)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: 'REFRESH_WEATHER',
            payload: data
          })
        })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <WeatherContext.Provider
      value={{
        current: state.current,
        forecast: state.forecast,
        location: state.location,
        address: state.address,
        error: state.error,
        getWeather,
        searchWeather,
        refreshWeather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  )
}