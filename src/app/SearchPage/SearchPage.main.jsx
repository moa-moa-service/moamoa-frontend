import * as itemS from "./styled/SearchPage.main.style"
import * as C from "./styled/SearchPage.component.style"

function SearchPageMain() {
    return (
        <>
            <C.SearchPageContainer>
                <C.SearchContainer>
                    <img src="../../../public/SearchPage/backIcon.png" alt="뒤로가기" />
                    <C.SearchBox></C.SearchBox>
                    <img src="../../../public/SearchPage/searchIcon.png" alt="검색" />
                </C.SearchContainer>
                <C.MainContainer>
                    <itemS.KeywordTitle>우리 동네 인기 검색어</itemS.KeywordTitle>
                    <C.KeywordContainer>
                        <C.Keyword>캘린더</C.Keyword>
                        <C.Keyword>보조배터리</C.Keyword>
                        <C.Keyword>다이어리</C.Keyword>
                        <C.Keyword>행거</C.Keyword>
                        <C.Keyword>김치</C.Keyword>
                    </C.KeywordContainer>
                    <itemS.KeywordTitle>
                        최근 검색어
                        <itemS.deleteText>전체 삭제</itemS.deleteText>
                    </itemS.KeywordTitle>
                    <itemS.RecentKeywordContainer>
                        <itemS.RecentKeyword>2024년 달력</itemS.RecentKeyword>
                        <itemS.RecentKeywordDelete>X</itemS.RecentKeywordDelete>
                    </itemS.RecentKeywordContainer>
                    <itemS.RecentKeywordContainer>
                        <itemS.RecentKeyword>올리브유</itemS.RecentKeyword>
                        <itemS.RecentKeywordDelete>X</itemS.RecentKeywordDelete>
                    </itemS.RecentKeywordContainer>
                    <itemS.RecentKeywordContainer>
                        <itemS.RecentKeyword>텀블러</itemS.RecentKeyword>
                        <itemS.RecentKeywordDelete>X</itemS.RecentKeywordDelete>
                    </itemS.RecentKeywordContainer>
                </C.MainContainer>
            </C.SearchPageContainer>
        </>
    )
}

export default SearchPageMain