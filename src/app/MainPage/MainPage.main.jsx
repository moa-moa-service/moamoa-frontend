import * as itemS from "./styled/MainPage.main.style"
// import SearchImg from "./public/MainPage/Search.png"
import CategoryList from "./MainPage.main.CategoryList"
import MenuNav from "../MenuNav/MenuNav.main"

function MainPage() {
    return (
        <>
            <itemS.MainPageContainer>
                <itemS.SearchContainer>
                    <itemS.LocalText>
                        설정 지역명
                    </itemS.LocalText>
                    <itemS.SearchImg></itemS.SearchImg>
                </itemS.SearchContainer>
                <CategoryList />
            </itemS.MainPageContainer>
            <MenuNav />
        </>
    )
}

export default MainPage
