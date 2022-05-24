import {
  CHANGE_ADDRESS,
  GET_WEATHER,
  REFRESH_WEATHER,
  SEARCH_WEATHER,
  SET_ERROR
} from './types'
export default function WeatherReducer(state, action) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        current: action.payload.current,
        forecast: action.payload.forecast,
        location: action.payload.location
      }
    case REFRESH_WEATHER:
      return {
        ...state,
        current: action.payload.current,
        forecast: action.payload.forecast,
        location: action.payload.location
      }
    case SEARCH_WEATHER:
      return {
        ...state,
        current: action.payload.current,
        forecast: action.payload.forecast,
        location: action.payload.location
      }
    case CHANGE_ADDRESS:
      return {
        ...state,
        address: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
