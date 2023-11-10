import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { getJoke } from '../apiClient'
import { Dadbtn } from './Dadbtn'

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
