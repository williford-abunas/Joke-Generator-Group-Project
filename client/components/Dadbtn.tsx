import { useState } from 'react'
import { getJoke, generateImage } from '../apiClient'

export function Dadbtn() {
  const [joke, setJoke] = useState(
    'I have a joke about immortality, and it never gets old.'
  )
  const [audio, setAudio] = useState('laugh.mp3')

  const [jokeImage, setImage] = useState(
    'https://i.ytimg.com/vi/nvNnGB3tIWk/maxresdefault.jpg'
  )

  const sound = new Audio(audio)
  sound.play()

  const handleClick = async () => {
    const joke = await getJoke()
    setJoke(joke.text)
    console.log(`Joke: ${joke.text}`)

    const image = await generateImage(joke.text)
    console.log(`image: ${image.text}`)

    setImage(image.text)
  }
  return (
    <>
      <div className="joke-container">
        <button onClick={handleClick}>
          <img src="images/dadbtn.png" alt="dadbodsexyasf" />
        </button>
        <p>{joke}</p>
        <img className="ai-gen" src={jokeImage} alt="AI Generated" />
      </div>
    </>
  )
}
