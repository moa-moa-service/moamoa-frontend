import * as itemS from "./styled/SearchPage.search.style"
import * as C from "./styled/SearchPage.component.style"

import ProductItem from '../MainPage/MainPage.CategoryDetailPage.Item'
import FilterCategory from "./SearchPage.search.Filter.Category"
import FilterQuantity from "./SearchPage.search.filter.quantity"
import FilterPrice from "./SearchPage.search.filter.price"
import FilterPeriod from "./SearchPage.search.filter.period"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import client from "../../client"

function Search() {

    const navigate = useNavigate() ;

    const { keyword } = useParams() ;
    const [searchKeyword, setSearchKeyword] = useState(keyword) ;
    const [inputKeyword, setInputKeyword] = useState(keyword) ;
    const [searchKeywordList, setSearchKeywordList] = useState([]) ;

    const [categoryFilter, setCategoryFilter] = useState(false) ;
    const [periodFilter, setPeriodFilter] = useState(false) ;
    const [quantityFilter, setQuantityFilter] = useState(false) ;
    const [priceFilter, setPriceFilter] = useState(false) ;

    const auth = import.meta.env.VITE_AUTH ;

    const searchKeywordHandle = async () => {
        setSearchKeyword(inputKeyword) ;
        try {
            const response = await client(auth).get(
                `/posts?keyword=${searchKeyword}`
            )
            setSearchKeywordList(response.data.result.SimplePostDtoList) ;
            navigate(`/search/${searchKeyword}`) ;
        } catch(error) {
            console.log(error) ;
        }
    } ;

    useEffect(() => {
        searchKeywordHandle() ;
    }, [searchKeyword])

    const onChangeKeyword = (e) => {
        setInputKeyword(e.target.value) ;
    }

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchKeywordHandle() ;
        }
    } ;

    const openCategoryFilter = () => {
        setCategoryFilter(!categoryFilter) ;
    }

    const openPeriodFilter = () => {
        setPeriodFilter(!periodFilter) ;
    }

    const openQuantityFilter = () => {
        setQuantityFilter(!quantityFilter) ;
    }

    const openPriceFilter = () => {
        setPriceFilter(!priceFilter) ;
    }

    if (!searchKeywordList) {
        return <C.Loading>Loading..</C.Loading>
    }

    return(
        <>
        <C.SearchPageContainer>
            <C.SearchContainer>
                <img src="../../../public/SearchPage/backIcon.png" alt="뒤로가기" onClick={() => navigate(-1)}/>
                    <C.SearchBox onKeyPress={onEnterKeyPress} onChange={onChangeKeyword} />
                    <img src="../../../public/SearchPage/searchIcon.png" alt="검색" onClick={() => searchKeywordHandle()}/>
            </C.SearchContainer>
            <C.MainContainer>
                <C.KeywordContainer>
                    <C.Keyword select="true">지역명</C.Keyword>
                    <C.Keyword onClick={openCategoryFilter}>카테고리</C.Keyword>
                    <C.Keyword onClick={openPeriodFilter}>모집 기간</C.Keyword>
                    <C.Keyword onClick={openQuantityFilter}>상품 수량</C.Keyword>
                    <C.Keyword onClick={openPriceFilter}>상품 가격</C.Keyword>
                </C.KeywordContainer>
                {searchKeywordList.map((product, index) => (
                    <div key={index}>
                        <ProductItem product={product}/>
                        <itemS.ContourLine />
                    </div>
                ))}
            </C.MainContainer>
            {categoryFilter && <FilterCategory openCategoryFilter={openCategoryFilter}/>}
            {periodFilter && <FilterPeriod openPeriodFilter={openPeriodFilter} /> }
            {quantityFilter && <FilterQuantity openQuantityFilter={openQuantityFilter} />}
            {priceFilter && <FilterPrice openPriceFilter={openPriceFilter} />}
        </C.SearchPageContainer>
        </>
    )
}

export default Search