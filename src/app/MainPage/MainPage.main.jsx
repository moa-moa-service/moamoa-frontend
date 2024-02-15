import * as itemS from "./styled/MainPage.main.style"
// import SearchImg from "./public/MainPage/Search.png"
import CategoryList from "./MainPage.main.CategoryList"
import MenuNav from "../MenuNav/MenuNav.main"

import { useNavigate } from "react-router-dom"
import { AuthAtom } from '../../recoil/atoms/AuthAtom'
import { useRecoilState } from 'recoil'

function MainPage() {
    const navigate = useNavigate()
    const [accessToken] = useRecoilState(AuthAtom)
    console.log(accessToken)
    
    return (
        <>
            <itemS.MainPageContainer>
                <itemS.SearchContainer>
                    <itemS.LocalText>
                        설정 지역명
                    </itemS.LocalText>
                    <itemS.SearchImg onClick={() => {navigate("/alarm")}}></itemS.SearchImg>
                </itemS.SearchContainer>
                <CategoryList />
            </itemS.MainPageContainer>
            <MenuNav />
        </>
    )
}

export default MainPage
