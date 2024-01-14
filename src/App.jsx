import MainPage from './app/MainPage/MainPage.main.jsx'
import CategoryDetailPage from './app/MainPage/MainPage.CategoryDetailPage.jsx'
import LoginPageComponent from './app/LoginPage/LoginPage.main.jsx'
import ProductPage from './app/ProductPage/ProductPage.main.jsx'
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
      <Route path="/login" element={<LoginPageComponent />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
    </>
  )
}

export default App
