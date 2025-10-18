import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import Home from './home.jsx'
import Mensajes from './mensajes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mensajes />
  </StrictMode>,
)
