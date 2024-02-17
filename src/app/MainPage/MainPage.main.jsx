import * as itemS from "./styled/MainPage.main.style"
import CategoryList from "./MainPage.main.CategoryList"
import MenuNav from "../MenuNav/MenuNav.main"
import BellIcon from "../../../public/MainPage/Bell.png"

import { useNavigate, useLocation } from "react-router-dom"
import { AuthAtom } from '../../recoil/atoms/AuthAtom'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

function MainPage() {
    const navigate = useNavigate()
    const [_, setAccessToken] = useRecoilState(AuthAtom)

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    
    useEffect(() => {
        const _accessToken = params.get('authorization')
        if (_accessToken) {
            setAccessToken(_accessToken)
            params.delete('authorization')
        }
    }, [])
    
    return (
        <>
            <itemS.MainPageContainer>
                <itemS.SearchContainer>
                    <itemS.LocalText>
                        설정 지역명
                    </itemS.LocalText>
                    <itemS.SearchImgWrapper onClick={() => {navigate("/alarm")}}>
                        <itemS.BellImg src={BellIcon}></itemS.BellImg>
                    </itemS.SearchImgWrapper>
                </itemS.SearchContainer>
                <CategoryList />
            </itemS.MainPageContainer>
            <MenuNav />
        </>
    )
}

export default MainPage
