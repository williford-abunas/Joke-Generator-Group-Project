import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import FrogPage from './components/FrogPage'
import Header from './components/Header'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/" element={<Header />} />
    <Route path="/frogs/:name" element={<FrogPage />} />
  </Route>
)
