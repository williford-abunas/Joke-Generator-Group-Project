import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

import weather from './routes/weather'

import request from 'superagent'
import 'dotenv/config'

const server = express()

server.get('/api/v1/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  const index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

server.get('/api/v1/joke', async (req, res) => {
  console.log('making api request')

  if (process.env.KEY == undefined) {
    throw new Error('KEY is undefined')
  }

  const response = await request
    .get('https://api.api-ninjas.com/v1/dadjokes?limit=1')
    .set('X-API-Key', process.env.KEY)

  const jokeObj = response.body

  console.log(jokeObj[0].joke)

  res.send(jokeObj[0].joke)
})

server.use(express.json())
server.use(cors('*' as CorsOptions))
server.use('/api/v1/weather/wellington', weather)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
