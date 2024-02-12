import { useNavigate } from "react-router-dom";
import * as itemS from "./styled/SearchPage.main.style"
import * as C from "./styled/SearchPage.component.style"
import { useEffect, useState } from "react";
import client from "../../client"

function SearchPageMain() {
    const navigate = useNavigate();

    const [rankingKeyword, setRankingKeyword] = useState([]) ;
    const [recentKeyword, setRecentKeyword] = useState([]) ;

    const auth = import.meta.env.VITE_AUTH ;

    const rankingKeywordFetchData = async () => {
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
    
    const deleteRecentKeyword = async (keyword) => {
        try {
            const response = await client(auth).delete(
                `keywords/${keyword}`
            ) ;
            await recentKeywordFetchData() ;
        } catch(error) {
            console.error(error) ;
        }
    } ;

    const deleteAllRecentKeyword = async() => {
        try {
            await Promise.all(recentKeyword.map(async (keyword) => {
                await client(auth).delete(`keywords/${keyword.keyword}`) ;
            })) ;
            await recentKeywordFetchData() ;
        } catch (error) {
            console.log(error) ;
        }
    }

    useEffect(() => {
        rankingKeywordFetchData() ;
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
                        <itemS.deleteText onClick={deleteAllRecentKeyword}>전체 삭제</itemS.deleteText>
                    </itemS.KeywordTitle>
                    {recentKeyword.map((keyword, index) => (
                        <itemS.RecentKeywordContainer key={index}>
                            <itemS.RecentKeyword onClick={() => {navigate(`/search/${keyword.keyword}`)}}>{keyword.keyword}</itemS.RecentKeyword>
                            <itemS.RecentKeywordDelete onClick={() => deleteRecentKeyword(keyword.keyword)}>X</itemS.RecentKeywordDelete>
                        </itemS.RecentKeywordContainer>
                    ))}
                </C.MainContainer>
            </C.SearchPageContainer>
        </>
    )
}

export default SearchPageMain