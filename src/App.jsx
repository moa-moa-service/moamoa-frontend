import MainPage from './app/MainPage/MainPage.main.jsx'

import {
  Route,
  Routes,
} from "react-router-dom";

import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    </>
  )
}

export default App
