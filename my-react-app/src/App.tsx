import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
      {/* surrounds routing */}
        <BrowserRouter>
        <Navbar></Navbar>
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>

  )
}

export default App
