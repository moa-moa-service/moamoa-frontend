import * as itemS from "./styled/MainPage.main.style"
import CategoryList from "./MainPage.main.CategoryList"
import MenuNav from "../MenuNav/MenuNav.main"
import BellIcon from "../../../public/MainPage/Bell.png"

import { useNavigate } from "react-router-dom"

function MainPage() {
    const navigate = useNavigate();
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
