import { Outlet } from 'react-router-dom'

import Header from './Header'

import { useState } from 'react'
import { getJoke } from '../apiClient'
import { Dadbtn } from './Dadbtn'

export default function Layout() {
  return (
    <>

      <Header />
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
