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
  1000: ['Sunny.svg', 'Moon.png'],
  1003: ['PartlyCloudy.png'],
  1009: ['Cloudy.png'],
  1030: ['Mist.png'],
  1006: ['Cloudy.png'],
  1063: ['RainCloud.png'],
  1066: ['Snow.png'],
  1069: ['IceSnow.png'],
  1072: ['IceSnow.png'],
  1087: ['CloudThunder.png'],
  1114: ['Snow.png'],
  1117: ['Snow.png'],
  1135: ['Mist.png'],
  1147: ['Mist.png'],
  1150: ['RainCloud.png'],
  1153: ['RainCloud.png'],
  1168: ['IceSnow.png'],
  1171: ['IceSnow.png'],
  1180: ['RainCloud.png'],
  1183: ['RainCloud.png'],
  1186: ['RainCloud.png'],
  1189: ['RainCloud.png'],
  1192: ['RainCloud.png'],
  1195: ['RainCloud.png'],
  1198: ['IceSnow.png'],
  1201: ['IceSnow.png'],
  1204: ['IceSnow.png'],
  1207: ['IceSnow.png'],
  1210: ['Snow.png'],
  1213: ['Snow.png'],
  1216: ['Snow.png'],
  1219: ['Snow.png'],
  1222: ['Snow.png'],
  1225: ['Snow.png'],
  1237: ['IceSnow.png'],
  1240: ['RainCloud.png'],
  1243: ['RainCloud.png'],
  1246: ['RainCloud.png'],
  1249: ['IceSnow.png'],
  1252: ['IceSnow.png'],
  1255: ['Snow.png'],
  1258: ['Snow.png'],
  1261: ['IceSnow.png'],
  1264: ['IceSnow.png'],
  1273: ['RainCloud.png'],
  1276: ['RainCloud.png'],
  1279: ['Snow.png'],
  1282: ['Snow.png']
}
export const WEATHER_ICONS = [
  {
    code: 1000,
    day: 'Sunny',
    night: 'Clear',
    icon: 113
  },
  {
    code: 1003,
    day: 'Partly cloudy',
    night: 'Partly cloudy',
    icon: 116
  },
  {
    code: 1006,
    day: 'Cloudy',
    night: 'Cloudy',
    icon: 119
  },
  {
    code: 1009,
    day: 'Overcast',
    night: 'Overcast',
    icon: 122
  },
  {
    code: 1030,
    day: 'Mist',
    night: 'Mist',
    icon: 143
  },
  {
    code: 1063,
    day: 'Patchy rain possible',
    night: 'Patchy rain possible',
    icon: 176
  },
  {
    code: 1066,
    day: 'Patchy snow possible',
    night: 'Patchy snow possible',
    icon: 179
  },
  {
    code: 1069,
    day: 'Patchy sleet possible',
    night: 'Patchy sleet possible',
    icon: 182
  },
  {
    code: 1072,
    day: 'Patchy freezing drizzle possible',
    night: 'Patchy freezing drizzle possible',
    icon: 185
  },
  {
    code: 1087,
    day: 'Thundery outbreaks possible',
    night: 'Thundery outbreaks possible',
    icon: 200
  },
  {
    code: 1114,
    day: 'Blowing snow',
    night: 'Blowing snow',
    icon: 227
  },
  {
    code: 1117,
    day: 'Blizzard',
    night: 'Blizzard',
    icon: 230
  },
  {
    code: 1135,
    day: 'Fog',
    night: 'Fog',
    icon: 248
  },
  {
    code: 1147,
    day: 'Freezing fog',
    night: 'Freezing fog',
    icon: 260
  },
  {
    code: 1150,
    day: 'Patchy light drizzle',
    night: 'Patchy light drizzle',
    icon: 263
  },
  {
    code: 1153,
    day: 'Light drizzle',
    night: 'Light drizzle',
    icon: 266
  },
  {
    code: 1168,
    day: 'Freezing drizzle',
    night: 'Freezing drizzle',
    icon: 281
  },
  {
    code: 1171,
    day: 'Heavy freezing drizzle',
    night: 'Heavy freezing drizzle',
    icon: 284
  },
  {
    code: 1180,
    day: 'Patchy light rain',
    night: 'Patchy light rain',
    icon: 293
  },
  {
    code: 1183,
    day: 'Light rain',
    night: 'Light rain',
    icon: 296
  },
  {
    code: 1186,
    day: 'Moderate rain at times',
    night: 'Moderate rain at times',
    icon: 299
  },
  {
    code: 1189,
    day: 'Moderate rain',
    night: 'Moderate rain',
    icon: 302
  },
  {
    code: 1192,
    day: 'Heavy rain at times',
    night: 'Heavy rain at times',
    icon: 305
  },
  {
    code: 1195,
    day: 'Heavy rain',
    night: 'Heavy rain',
    icon: 308
  },
  {
    code: 1198,
    day: 'Light freezing rain',
    night: 'Light freezing rain',
    icon: 311
  },
  {
    code: 1201,
    day: 'Moderate or heavy freezing rain',
    night: 'Moderate or heavy freezing rain',
    icon: 314
  },
  {
    code: 1204,
    day: 'Light sleet',
    night: 'Light sleet',
    icon: 317
  },
  {
    code: 1207,
    day: 'Moderate or heavy sleet',
    night: 'Moderate or heavy sleet',
    icon: 320
  },
  {
    code: 1210,
    day: 'Patchy light snow',
    night: 'Patchy light snow',
    icon: 323
  },
  {
    code: 1213,
    day: 'Light snow',
    night: 'Light snow',
    icon: 326
  },
  {
    code: 1216,
    day: 'Patchy moderate snow',
    night: 'Patchy moderate snow',
    icon: 329
  },
  {
    code: 1219,
    day: 'Moderate snow',
    night: 'Moderate snow',
    icon: 332
  },
  {
    code: 1222,
    day: 'Patchy heavy snow',
    night: 'Patchy heavy snow',
    icon: 335
  },
  {
    code: 1225,
    day: 'Heavy snow',
    night: 'Heavy snow',
    icon: 338
  },
  {
    code: 1237,
    day: 'Ice pellets',
    night: 'Ice pellets',
    icon: 350
  },
  {
    code: 1240,
    day: 'Light rain shower',
    night: 'Light rain shower',
    icon: 353
  },
  {
    code: 1243,
    day: 'Moderate or heavy rain shower',
    night: 'Moderate or heavy rain shower',
    icon: 356
  },
  {
    code: 1246,
    day: 'Torrential rain shower',
    night: 'Torrential rain shower',
    icon: 359
  },
  {
    code: 1249,
    day: 'Light sleet showers',
    night: 'Light sleet showers',
    icon: 362
  },
  {
    code: 1252,
    day: 'Moderate or heavy sleet showers',
    night: 'Moderate or heavy sleet showers',
    icon: 365
  },
  {
    code: 1255,
    day: 'Light snow showers',
    night: 'Light snow showers',
    icon: 368
  },
  {
    code: 1258,
    day: 'Moderate or heavy snow showers',
    night: 'Moderate or heavy snow showers',
    icon: 371
  },
  {
    code: 1261,
    day: 'Light showers of ice pellets',
    night: 'Light showers of ice pellets',
    icon: 374
  },
  {
    code: 1264,
    day: 'Moderate or heavy showers of ice pellets',
    night: 'Moderate or heavy showers of ice pellets',
    icon: 377
  },
  {
    code: 1273,
    day: 'Patchy light rain with thunder',
    night: 'Patchy light rain with thunder',
    icon: 386
  },
  {
    code: 1276,
    day: 'Moderate or heavy rain with thunder',
    night: 'Moderate or heavy rain with thunder',
    icon: 389
  },
  {
    code: 1279,
    day: 'Patchy light snow with thunder',
    night: 'Patchy light snow with thunder',
    icon: 392
  },
  {
    code: 1282,
    day: 'Moderate or heavy snow with thunder',
    night: 'Moderate or heavy snow with thunder',
    icon: 395
  }
]

export const DAY_MESSAGES = {
  1: "It's a rainy day. Take an umbrella.",
  2: "It's a cloudy day. Take a jacket.",
  3: "It's a sunny day. Take a hat.",
  4: "It's a windy day. Take a scarf.",
  5: "It's a snowy day. Take some warm clothes.",
  6: "It's a foggy day. Be careful."
}
