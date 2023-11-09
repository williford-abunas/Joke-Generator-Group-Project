import { useState, useEffect } from 'react'
import { getWellyWeather } from '../apiClient'

export default function WellyWeather() {
  const [weather, setWeather] = useState< | null>()

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2)
  }

  useEffect(() => {
    async function fetchWellyWeather() {
      const wellyWeatherData = await getWellyWeather()
      const celsiusWeather = { ...wellyWeatherData }
      celsiusWeather.main.temp = kelvinToCelsius(celsiusWeather.main.temp)
      setWeather(wellyWeatherData)
    }
    fetchWellyWeather()
  }, [])

  console.log(weather)

  return (
    <div>
      <h4>{weather?.name}</h4>
    </div>
  )
}
