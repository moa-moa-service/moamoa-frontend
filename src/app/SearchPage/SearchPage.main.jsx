import { useNavigate } from "react-router-dom";
import * as itemS from "./styled/SearchPage.main.style"
import * as C from "./styled/SearchPage.component.style"
import { useEffect, useState } from "react";
import client from "../../client"
import Loading from "../LoadingPage/LoadingPage.main";

import { AuthAtom } from "../../recoil/atoms/AuthAtom";
import { useRecoilState } from "recoil";

function SearchPageMain() {
    const [accessToken] = useRecoilState(AuthAtom);
    const navigate = useNavigate();

    const [searchKeyword, setSearchKeyword] = useState("") ;
    const [rankingKeyword, setRankingKeyword] = useState([]) ;
    const [recentKeyword, setRecentKeyword] = useState([]) ;

    const onChangeKeyword = (e) => {
        setSearchKeyword(e.target.value) ;
    }

    const rankingKeywordFetchData = async () => {
        try {
            const response = await client(accessToken).get(
                `keywords/ranking`
            ) ;
            setRankingKeyword(response.data.result.keywords) ;
        } catch (error) {
            console.error(error) ;
        }
    } ;

    const recentKeywordFetchData = async () => {
        try {
            const response = await client(accessToken).get(
                `/keywords/recent`
            ) ;
            setRecentKeyword(response.data.result.keywords) ;
        } catch (error) {
            console.error(error) ;
        }
    };
    
    const deleteRecentKeywordHandle = async (keyword) => {
        try {
            const response = await client(accessToken).delete(
                `keywords/${keyword}`
            ) ;
            await recentKeywordFetchData() ;
        } catch(error) {
            console.error(error) ;
        }
    } ;

    const deleteAllRecentKeywordHandle = async() => {
        try {
            await Promise.all(recentKeyword.map(async (keyword) => {
                await client(accessToken).delete(`keywords/${keyword.keyword}`) ;
            })) ;
            await recentKeywordFetchData() ;
        } catch (error) {
            console.log(error) ;
        }
    }

    const searchKeywordHandle = async() => {
        navigate(`/search/${searchKeyword}`) ;
    }

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchKeywordHandle() ;
        }
    } ;

    useEffect(() => {
        rankingKeywordFetchData() ;
        recentKeywordFetchData() ;
    }, []) ;

    if(!recentKeyword || !rankingKeyword) {
        return <Loading/>
    }

    return (
        <>
            <C.SearchPageContainer>
                <C.SearchContainer>
                    <img src="../../../public/SearchPage/backIcon.png" alt="뒤로가기" onClick={() => navigate(-1)} />
                    <C.SearchBox onChange={onChangeKeyword} onKeyPress={onEnterKeyPress}/>
                    <img src="../../../public/SearchPage/searchIcon.png" alt="검색" onClick={() => searchKeywordHandle() }/>
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
                        <itemS.deleteText onClick={() => deleteAllRecentKeywordHandle()}>전체 삭제</itemS.deleteText>
                    </itemS.KeywordTitle>
                    {recentKeyword.map((keyword, index) => (
                        <itemS.RecentKeywordContainer key={index}>
                            <itemS.RecentKeyword onClick={() => {navigate(`/search/${keyword.keyword}`)}}>{keyword.keyword}</itemS.RecentKeyword>
                            <itemS.RecentKeywordDelete onClick={() => deleteRecentKeywordHandle(keyword.keyword)}>X</itemS.RecentKeywordDelete>
                        </itemS.RecentKeywordContainer>
                    ))}
                </C.MainContainer>
            </C.SearchPageContainer>
        </>
    )
}

export default SearchPageMain