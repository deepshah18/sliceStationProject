import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SecondaryHeader from './components/SecondaryHeader'
import AboutUs from './components/AboutUs'
import { PrimaryHeader } from './components/PrimaryHeader'
import Home from './components/Home'
import Product from './components/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SecondaryHeader />
    <PrimaryHeader/>
    <Home/>
    <AboutUs />
    <Product/>
    </>
  )
}

export default App
