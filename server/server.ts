import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

import weather from './routes/weather'

import request from 'superagent'
import 'dotenv/config'

import OpenAI from 'openai'
const openai = new OpenAI()

const server = express()

server.use(express.json())
server.use(cors('*' as CorsOptions))
server.use('/api/v1/weather/wellington', weather)

server.get('/api/v1/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  const index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

server.get('/api/v1/joke', async (req, res) => {
  if (process.env.KEY == undefined) {
    throw new Error('KEY is undefined')
  }

  const response = await request
    .get('https://api.api-ninjas.com/v1/dadjokes?limit=1')
    .set('X-API-Key', process.env.KEY)

  const jokeObj = response.body

  res.send(jokeObj[0].joke)
})

server.post('/api/v1/image', async (req, res) => {
  try {
    const response = await openai.images.generate({
      model: 'dall-e-2',
      prompt: `Hyper relistic, ${req.body.text}`,
      n: 1,
      size: '512x512',
    })
    const image_url = response.data[0].url
    res.send(image_url)
  } catch (error) {
    console.error('Violates content policy')

    res.send('')
  }
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
