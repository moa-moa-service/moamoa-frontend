import * as itemS from "./styled/SearchPage.search.style"
import * as C from "./styled/SearchPage.component.style"

function Search() {
    return(
        <>
        <C.SearchPageContainer>
            <C.SearchContainer>
                <img src="../../../public/SearchPage/backIcon.png" alt="뒤로가기" />
                <C.SearchBox></C.SearchBox>
                <img src="../../../public/SearchPage/searchIcon.png" alt="검색" />
            </C.SearchContainer>
            <C.KeywordContainer>
            </C.KeywordContainer>
        </C.SearchPageContainer>
        </>
    )
}

export default Search