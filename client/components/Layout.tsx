import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Dadbtn() {
  const [joke, setJoke] = useState('default joke')

  const handleClick = () => {
    setJoke('new joke')
  }

  return (
    <>
      <button onClick={handleClick}>
        <img src="images/dadbtn.png" alt="dadbodsexyasf" />
      </button>
      <p>{joke}</p>
    </>
  )
}
export default function Layout() {
  return (
    <>
      <header>
        <h1>Bad Woke Dad Jokes</h1>
      </header>
      <main>
        <br />
        <Dadbtn />
      </main>
    </>
  )
}
