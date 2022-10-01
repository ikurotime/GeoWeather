export const MONTHS = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}
export const DAY = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}
export const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': '2c9def7ff9msh9694b4a32b1be6cp146ff6jsnd33a36f39afd'
  }
}
export const WEATHER_CODES = {
  1000: ['Sunny', 'Moon'],
  1003: ['PartlyCloudy'],
  1009: ['Cloudy'],
  1030: ['Mist'],
  1006: ['Cloudy'],
  1063: ['RainCloud'],
  1066: ['Snow'],
  1069: ['IceSnow'],
  1072: ['IceSnow'],
  1087: ['CloudThunder'],
  1114: ['Snow'],
  1117: ['Snow'],
  1135: ['Mist'],
  1147: ['Mist'],
  1150: ['RainCloud'],
  1153: ['RainCloud'],
  1168: ['IceSnow'],
  1171: ['IceSnow'],
  1180: ['RainCloud'],
  1183: ['RainCloud'],
  1186: ['RainCloud'],
  1189: ['RainCloud'],
  1192: ['RainCloud'],
  1195: ['RainCloud'],
  1198: ['IceSnow'],
  1201: ['IceSnow'],
  1204: ['IceSnow'],
  1207: ['IceSnow'],
  1210: ['Snow'],
  1213: ['Snow'],
  1216: ['Snow'],
  1219: ['Snow'],
  1222: ['Snow'],
  1225: ['Snow'],
  1237: ['IceSnow'],
  1240: ['RainCloud'],
  1243: ['RainCloud'],
  1246: ['RainCloud'],
  1249: ['IceSnow'],
  1252: ['IceSnow'],
  1255: ['Snow'],
  1258: ['Snow'],
  1261: ['IceSnow'],
  1264: ['IceSnow'],
  1273: ['RainCloud'],
  1276: ['RainCloud'],
  1279: ['Snow'],
  1282: ['Snow']
}

export const DAY_MESSAGES = {
  1: "It's a rainy day. Take an umbrella.",
  2: "It's a cloudy day. Take a jacket.",
  3: "It's a sunny day. Take a hat.",
  4: "It's a windy day. Take a scarf.",
  5: "It's a snowy day. Take some warm clothes.",
  6: "It's a foggy day. Be careful."
}

export const LABELS = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00'
]
export const geolocationOptions = {
  enableHighAccuracy: false,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24 // 24 hour
}
export const DEFAULT_LOCATIONS = [
  { latitude: 40.7128, longitude: -74.006 },
  { latitude: 51.5074, longitude: -0.1278 },
  { latitude: 48.8566, longitude: 2.3522 },
  { latitude: 35.6895, longitude: 139.6917 },
  { latitude: 55.7558, longitude: 37.6173 },
  { latitude: 52.52, longitude: 13.405 },
  { latitude: 37.7749, longitude: -122.4194 },
  { latitude: 41.8781, longitude: -87.6298 },
  { latitude: 39.9042, longitude: 116.4074 },
  { latitude: 23.1291, longitude: 113.2644 },
  { latitude: 28.6139, longitude: 77.209 },
  { latitude: 19.076, longitude: 72.8777 }
]
