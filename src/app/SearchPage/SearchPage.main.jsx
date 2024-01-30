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
                <C.KeywordContainer>
                    <itemS.KeywordTitle>우리 동네 인기 검색어</itemS.KeywordTitle>
                    <itemS.TopKeywordContainer>
                        <itemS.TopKeyword>캘린더</itemS.TopKeyword>
                        <itemS.TopKeyword>보조배터리</itemS.TopKeyword>
                        <itemS.TopKeyword>다이어리</itemS.TopKeyword>
                        <itemS.TopKeyword>행거</itemS.TopKeyword>
                        <itemS.TopKeyword>김치</itemS.TopKeyword>
                    </itemS.TopKeywordContainer>
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
                </C.KeywordContainer>
            </C.SearchPageContainer>
        </>
    )
}

export default SearchPageMain