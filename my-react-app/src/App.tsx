import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages and components
import Home from './pages/Home'
import NavigationBar from './components/Navbar'

function App() {

  return (

    <>
      {/* surrounds routing */}
        <BrowserRouter>
        <NavigationBar></NavigationBar>
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
