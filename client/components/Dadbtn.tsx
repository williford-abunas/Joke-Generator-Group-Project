import { useState } from 'react'
import { getJoke } from '../apiClient'

export function Dadbtn() {
  const [joke, setJoke] = useState(
    'I have a joke about immortality, and it never gets old.'
  )
  const [audio, setAudio] = useState('laugh.mp3')
  const sound = new Audio(audio)
  sound.play()

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
