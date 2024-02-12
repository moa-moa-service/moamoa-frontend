import { useNavigate } from "react-router-dom";
import * as itemS from "./styled/SearchPage.main.style"
import * as C from "./styled/SearchPage.component.style"
import { useEffect, useState } from "react";
import client from "../../client"

function SearchPageMain() {
    const navigate = useNavigate();

    const [recentKeyword, setRecentKeyword] = useState([]) ;

    useEffect(() => {
        const auth = import.meta.env.VITE_AUTH ;

        const fetchData = async () => {
            try {
                const response = await client(auth).get(
                    `/keywords/recent`
                ) ;
                setRecentKeyword(response.data.result.keywords) ;
            } catch (error) {
                console.error(error) ;
            }
        };
        fetchData() ;
    }, []) ;

    if(!recentKeyword) {
        return <itemS.Loading>Loading..</itemS.Loading>
    }

    return (
        <>
            <C.SearchPageContainer>
                <C.SearchContainer>
                    <img src="../../../public/SearchPage/backIcon.png" alt="뒤로가기" onClick={() => navigate(-1)} />
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
                    {recentKeyword.map((keyword, index) => (
                        <itemS.RecentKeywordContainer key={index}>
                            <itemS.RecentKeyword onClick={() => {navigate(`/search/${keyword.keyword}`)}}>{keyword.keyword}</itemS.RecentKeyword>
                            <itemS.RecentKeywordDelete>X</itemS.RecentKeywordDelete>
                        </itemS.RecentKeywordContainer>
                    ))}
                </C.MainContainer>
            </C.SearchPageContainer>
        </>
    )
}

export default SearchPageMain