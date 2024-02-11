import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MenuNavWrapper } from './app/MenuNav/styled/MenuNav.main.style'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <App />
</BrowserRouter>
)
