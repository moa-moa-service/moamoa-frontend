import MainPage from './app/MainPage/MainPage.main.jsx'
import CategoryDetailPage from './app/MainPage/MainPage.CategoryDetailPage.jsx'

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
      <Route path='/detail' element={<CategoryDetailPage />} />
    </Routes>
    </>
  )
}

export default App
