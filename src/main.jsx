import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MenuNav from "./app/MenuNav/MenuNav.main"
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MenuNavWrapper } from './app/MenuNav/styled/MenuNav.main.style'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <MenuNav />
    </BrowserRouter>
  </React.StrictMode>,
)
