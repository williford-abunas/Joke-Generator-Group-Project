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
      const celsiusWeather = { ...wellyWeatherData }
      celsiusWeather.main.temp = kelvinToCelsius(celsiusWeather.main.temp)
      setWeather(wellyWeatherData)
    }
    fetchWellyWeather()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '40px',
        backgroundColor: 'slategray',
        position: 'fixed',
        top: '0',
        left: '0',
        paddingBottom: '10px',
        borderBottom: '3px solid black',
      }}
    >
      <p style={{ color: 'white', fontSize: '20px', paddingLeft: '10px' }}>
        {weather?.name}, {weather?.sys.country} ||
      </p>
      <p style={{ fontSize: '20px', color: 'salmon' }}>
        <span style={{ color: 'white' }}>
          <span style={{ color: 'lightslategray' }}>_</span>Temp:
        </span>
        {weather?.main.temp} &deg;C
      </p>
      <p style={{ fontSize: '20px', color: 'salmon' }}>
        <span style={{ color: 'white' }}>
          <span style={{ color: 'lightslategray' }}>_</span>|| Weather:
        </span>
        {weather?.weather[0].description}
      </p>
      <img
        src="https://openweathermap.org/img/w/04d.png"
        alt="Weather Icon"
        style={{ height: '30px', width: '30px', position: 'relative' }}
      />
      <p style={{ color: 'white', fontSize: '20px', paddingLeft: '900px' }}>
        Why did the weather go to school?{' '}
        <span style={{ color: 'salmon' }}>To get a little brighter!</span>
      </p>
    </div>
  )
}
