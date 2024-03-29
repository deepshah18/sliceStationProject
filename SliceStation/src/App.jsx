import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SecondaryHeader from './components/SecondaryHeader'
import AboutUs from './components/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SecondaryHeader />
    <AboutUs />
    </>
  )
}

export default App
