import { useNavigate } from "react-router-dom";
import * as itemS from "./styled/SearchPage.main.style"
import * as C from "./styled/SearchPage.component.style"
import { useEffect, useState } from "react";
import client from "../../client"

function SearchPageMain() {
    const navigate = useNavigate();

    const [rankingKeyword, setRankingKeyword] = useState([]) ;
    const [recentKeyword, setRecentKeyword] = useState([]) ;

    useEffect(() => {
        const auth = import.meta.env.VITE_AUTH ;

        const rankingKeywordFetchDaya = async () => {
            try {
                const response = await client(auth).get(
                    `keywords/ranking`
                ) ;
                setRankingKeyword(response.data.result.keywords) ;
            } catch (error) {
                console.error(error) ;
            }
        } ;

        const recentKeywordFetchData = async () => {
            try {
                const response = await client(auth).get(
                    `/keywords/recent`
                ) ;
                setRecentKeyword(response.data.result.keywords) ;
            } catch (error) {
                console.error(error) ;
            }
        };

        rankingKeywordFetchDaya() ;
        recentKeywordFetchData() ;
    }, []) ;

    if(!recentKeyword || !rankingKeyword) {
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
                        {rankingKeyword.map((keyword, index) => (
                            <C.Keyword key={index} onClick={() => {navigate(`/search/${keyword.keyword}`)}}>{keyword.keyword}</C.Keyword>
                        ))}
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