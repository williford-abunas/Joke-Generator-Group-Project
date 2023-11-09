import request from 'superagent'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}

export async function getJoke() {
  return await request.get('/api/v1/joke')
}