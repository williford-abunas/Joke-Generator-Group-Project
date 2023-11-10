import { useState, useEffect } from 'react'
import { generateImage, getGreeting, getJoke } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

function HomePage() {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  async function asyncFunc() {
    const joke = await getJoke()
    await generateImage(joke.text)
  }

  asyncFunc()

  useEffect(() => {
    async function updateGreeting() {
      try {
        const greeting = await getGreeting()
        setGreeting(greeting)
        setIsError(false)
      } catch (err) {
        setIsError(true)
      }
    }

    updateGreeting()
  }, [count])

  return (
    <>
      {count}
      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>
        <Link to="/frogs/kevin">Is there a frog named Kevin?</Link>
      </p>
    </>
  )
}

export default HomePage
