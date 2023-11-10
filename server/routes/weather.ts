import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
const APIKey = process.env.WEATHER_API_KEY

router.get('/', async (req, res) => {
  const wellyWeather = await request.get(
    `http://api.openweathermap.org/data/2.5/weather?q=wellington&appid=${APIKey}`
  )
  console.log(APIKey)
  console.log(wellyWeather)
  res.json(wellyWeather.body)
})

export default router
