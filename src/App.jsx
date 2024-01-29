import MainPage from './app/MainPage/MainPage.main.jsx'
import CategoryDetailPage from './app/MainPage/MainPage.CategoryDetailPage.jsx'
import LoginPageComponent from './app/LoginPage/LoginPage.main.jsx'
import RecruitmentPage from './app/RecruitmentPage/Recruitment.main.jsx'
import SearchPageMain from './app/SearchPage/SearchPage.main.jsx'
import ProductPage from './app/ProductPage/ProductPage.main.jsx'
import MyPageComponent from './app/MyPage/MyPage.main.jsx'
import UserPageComponent from './app/UserPage/UserPage.main.jsx'

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
      <Route path="/recruitment" element={<RecruitmentPage />} />
      <Route path="/search" element={<SearchPageMain />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/mypage" element={<MyPageComponent />} />
      <Route path="/userpage" element={<UserPageComponent />} />
    </Routes>
    </>
  )
}

export default App