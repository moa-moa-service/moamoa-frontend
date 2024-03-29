import MainPage from './app/MainPage/MainPage.main.jsx'
import CategoryDetailPage from './app/MainPage/MainPage.CategoryDetailPage.jsx'
import LoginPageComponent from './app/LoginPage/LoginPage.main.jsx'
import RecruitmentPage from './app/RecruitmentPage/Recruitment.main.jsx'
import SearchPageMain from './app/SearchPage/SearchPage.main.jsx'
import Search from "./app/SearchPage/SearchPage.search.jsx"
import ProductPage from './app/ProductPage/ProductPage.main.jsx'
import MyPageComponent from './app/MyPage/MyPage.main.jsx'
import UserPageComponent from './app/UserPage/UserPage.main.jsx'
import NoticeWritePage from './app/NoticePage/NoticePage.write.jsx'
import NoticePage from './app/NoticePage/NoticePage.notice.jsx'
import AddressSetup from './app/LoginPage/LoginPage.main.AddressSetup.jsx'
import MyTown from './app/MyTownPage/MyTownPage.main.jsx'
import MemberInfoComponent from './app/LoginPage/LoginPage.main.MemberInfo.jsx'
import Loading from './app/LoadingPage/LoadingPage.main.jsx'
import Alarm from './app/MainPage/MainPage.Alarm.jsx'

import {
  Route,
  Routes,
} from "react-router-dom";
import { NavermapsProvider } from 'react-naver-maps'

import './App.css'
import { RecoilRoot } from 'recoil'
import BasicInformation from './app/LoginPage/LoginPage.main.BasicInformation.jsx'

function App() {
  const ncpClientId = import.meta.env.VITE_CLIENT_ID
  return (
    <RecoilRoot>
      <div className='App'>
        <NavermapsProvider ncpClientId={ncpClientId} submodules={["geocoder"]}>
          <Routes>
            <Route path='/addresssetup' element={<AddressSetup />} />
            <Route path="/" element={<MainPage />} />
            <Route path='/post/:category' element={<CategoryDetailPage />} />
            <Route path="/login" element={<LoginPageComponent />} />
            <Route path="/signup" element={<BasicInformation />} />
            <Route path="/signup/address-setup" element={<AddressSetup />} />
            <Route path="/member-info" element={<MemberInfoComponent />} />
            <Route path="/recruitment" element={<RecruitmentPage />} />
            <Route path="/search" element={<SearchPageMain />} />
            <Route path="/search/:keyword" element={<Search />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/product/:id/notice/:noticeId" element={<NoticePage />} />
            <Route path="/product/:id/notice/write" element={<NoticeWritePage />} />
            <Route path="/product/:id/notice/:noticeId/update" element={<NoticeWritePage />} />
            <Route path="/alarm" element={<Alarm />} />
            <Route path="/mypage" element={<MyPageComponent />} />
            <Route path="/userpage" element={<UserPageComponent />} />
            <Route path="/mytown" element={<MyTown />} />
            <Route path='/loading' element={<Loading />} />
          </Routes>
        </NavermapsProvider>
      </div>
    </RecoilRoot>
  )
}

export default App