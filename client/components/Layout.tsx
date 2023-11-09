import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { getJoke } from '../apiClient'

function Dadbtn() {
  const [joke, setJoke] = useState('default joke')

  const handleClick = () => {
    getJoke()
      .then((result) => {
        console.log(result)
        setJoke(result.text)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  return (
    <>
      <div className="joke-container">
        <button onClick={handleClick}>
          <img src="images/dadbtn.png" alt="dadbodsexyasf" />
        </button>
        <p>{joke}</p>
      </div>
    </>
  )
}
export default function Layout() {
  return (
    <>
      <header>
        <h1>Bad Woke Dad Joke</h1>
      </header>
      <main>
        <br />
        <Dadbtn />
      </main>
    </>
  )
}
