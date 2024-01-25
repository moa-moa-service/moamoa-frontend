import * as itemS from "./styled/SearchPage.main.style"
function SearchPageMain() {
    return (
        <>
            <itemS.SearchPageContainer>
                <itemS.SearchContainer>
                    <img src="../../../public/SearchPage/backIcon.png" alt="뒤로가기" />
                    <itemS.SearchBox></itemS.SearchBox>
                    <img src="../../../public/SearchPage/searchIcon.png" alt="검색" />
                </itemS.SearchContainer>
                <itemS.KeywordContainer>
                    <itemS.KeywordTitle>우리 동네 인기 검색어</itemS.KeywordTitle>
                    <itemS.TopKeywordContainer>
                        <itemS.TopKeyword>캘린더</itemS.TopKeyword>
                    </itemS.TopKeywordContainer>
                    <itemS.KeywordTitle>최근 검색어</itemS.KeywordTitle>
                </itemS.KeywordContainer>
            </itemS.SearchPageContainer>
        </>
    )
}

export default SearchPageMain