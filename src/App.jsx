import MainPage from './app/MainPage/MainPage.main.jsx'
import CategoryDetailPage from './app/MainPage/MainPage.CategoryDetailPage.jsx'
import LoginPageComponent from './app/LoginPage/LoginPage.main.jsx'
import RecruitmentPage from './app/RecruitmentPage/Recruitment.main.jsx'
import SearchPageMain from './app/SearchPage/SearchPage.main.jsx'
import Search from "./app/SearchPage/SearchPage.search.jsx"
import ProductPage from './app/ProductPage/ProductPage.main.jsx'
import MyPageComponent from './app/MyPage/MyPage.main.jsx'
import UserPageComponent from './app/UserPage/UserPage.main.jsx'
import MyMap from './app/RecruitmentPage/Recruitment.MyMap.jsx'
import TradingLocation from './app/RecruitmentPage/Recruitment.TradingLocation.jsx'
import NoticeWritePage from './app/NoticePage/NoticePage.write.jsx'
import NoticePage from './app/NoticePage/NoticePage.notice.jsx'
import {
  Route,
  Routes,
} from "react-router-dom";
import { NavermapsProvider } from 'react-naver-maps'

import './App.css'

function App() {
  const ncpClientId = import.meta.env.VITE_CLIENT_ID
  return (
    <div className='App'>
      <NavermapsProvider ncpClientId={ncpClientId}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/detail' element={<CategoryDetailPage />} />
          <Route path="/login" element={<LoginPageComponent />} />
          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/search" element={<SearchPageMain />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/notice" element={<NoticePage />} />
          <Route path="/product/notice/write" element={<NoticeWritePage />} />
          <Route path="/mymap" element={<MyMap />} />
          <Route path="/tradinglocation" element={<TradingLocation />} />
          <Route path="/mypage" element={<MyPageComponent />} />
          <Route path="/userpage" element={<UserPageComponent />} />
        </Routes>
      </NavermapsProvider>
    </div>
  )
}

export default App