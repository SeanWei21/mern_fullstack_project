import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import context
import {WorkoutContextProvider} from './context/WorkoutContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </StrictMode>
)
