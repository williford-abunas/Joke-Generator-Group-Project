import { useState, useEffect } from 'react'
import { getWellyWeather } from '../apiClient'
import { Weather } from '../../models/weather'

export default function WellyWeather() {
  const [weather, setWeather] = useState<Weather | null>()

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2)
  }

  useEffect(() => {
    async function fetchWellyWeather() {
      const wellyWeatherData = await getWellyWeather()
      console.log(wellyWeatherData)
      const celsiusWeather = { ...wellyWeatherData }
      celsiusWeather.main.temp = kelvinToCelsius(celsiusWeather.main.temp)
      setWeather(wellyWeatherData)
    }
    fetchWellyWeather()
  }, [])

  return (
    <div style={{ display: 'flex' }}>
      <p style={{ color: 'red' }}>
        {weather?.name}, {weather?.sys.country} ||
      </p>
      <p>
        <span style={{ color: 'blue' }}> Temp:</span> {weather?.main.temp} ||
      </p>
      <p>
        <span style={{ color: 'blue' }}> Weather:</span>{' '}
        {weather?.weather[0].description}{' '}
      </p>
    </div>
  )
}
