import fetch from 'node-fetch'

export const getWeather = async ({ zip }) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=30545d4fdd3a99247eff407be1803c8c`
  )
  const json = await response.json()

  if (json.cod === '404') {
    return new Error(`${zip} isn't a valid US zip code, please try again`)
  } else if (json.cod === 401) {
    return new Error(`Error: Did you add your API key to the OpenWeather URLs?`)
  }

  return {
    zip,
    city: json.name,
    conditions: json.weather[0].main,
    temp: Math.round(((json.main.temp - 273.15) * 1000000) / 1000000),
    icon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
  }
}
