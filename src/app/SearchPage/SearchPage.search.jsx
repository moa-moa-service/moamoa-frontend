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
import Loading from "../LoadingPage/LoadingPage.main";

import { AuthAtom } from "../../recoil/atoms/AuthAtom"
import { useRecoilState } from "recoil"

function Search() {
    const [accessToken] = useRecoilState(AuthAtom);

    const navigate = useNavigate() ;

    const { keyword } = useParams() ;
    const [searchKeyword, setSearchKeyword] = useState(keyword) ;
    const [inputKeyword, setInputKeyword] = useState(keyword) ;
    const [searchKeywordList, setSearchKeywordList] = useState([]) ;

    const [categoryFilter, setCategoryFilter] = useState(false) ;
    const [periodFilter, setPeriodFilter] = useState(false) ;
    const [quantityFilter, setQuantityFilter] = useState(false) ;
    const [priceFilter, setPriceFilter] = useState(false) ;

    const [categoryId, setCategoryId] = useState('') ;
    const [categoryName, setCategoryName] = useState('') ;
    const [dDay, setDDay] = useState('') ;
    const [total, setTotal] = useState('') ;
    const [minPrice, setMinPrice] = useState('') ;
    const [maxPrice, setMaxPrice] = useState('') ;


    const searchKeywordHandle = async () => {
        setSearchKeyword(inputKeyword) ;
        
        try {
            const response = await client(accessToken).get(
                `/posts?keyword=${searchKeyword}&categoryId=${categoryId}&dDay=${dDay}&total=${total}&minPrice=${minPrice}&maxPrice=${maxPrice}`
            )
            setSearchKeywordList(response.data.result.SimplePostDtoList) ;
            navigate(`/search/${searchKeyword}`) ;
        } catch(error) {
            console.log(error) ;
        }
    } ;

    useEffect(() => {
        searchKeywordHandle() ;
    }, [searchKeyword, categoryId, dDay, total, minPrice, maxPrice])

    const onChangeKeyword = (e) => {
        setInputKeyword(e.target.value) ;
    }

    const filterReset = () => {
        setCategoryId('') ;
        setDDay('') ;
        setTotal('') ;
        setMinPrice('') ;
        setMaxPrice('') ;
    }

    const searchHandle = () => {
        filterReset() ;
        searchKeywordHandle() ;
    }

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchHandle() ;
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

    const chageCategory = (value) => {
        setCategoryId(value.id) ;
        setCategoryName(value.name) ;
    }

    const chageDDay = (value) => {
        setDDay(value) ;
    }

    const chageTotal = (value) => {
        setTotal(value) ;
    }

    const chagePrice = (minValue, maxValue) => {
        setMinPrice(minValue) ;
        setMaxPrice(maxValue) ;
    }

    if (!searchKeywordList) {
        return <Loading />
    }

    return(
        <>
        <C.SearchPageContainer>
            <C.SearchContainer>
                <img src="../../../public/SearchPage/backIcon.png" alt="뒤로가기" onClick={() => navigate(-1)}/>
                    <C.SearchBox onKeyPress={onEnterKeyPress} onChange={onChangeKeyword} />
                    <img src="../../../public/SearchPage/searchIcon.png" alt="검색" onClick={() => searchHandle()}/>
            </C.SearchContainer>
            <C.MainContainer>
                <C.KeywordContainer>
                    <C.Keyword select="true" onClick={filterReset}>초기화</C.Keyword>
                    {categoryId === ''
                        ? <C.Keyword onClick={openCategoryFilter}>카테고리</C.Keyword>
                        : <C.Keyword select="true" onClick={openCategoryFilter}>{categoryName}</C.Keyword>
                    }
                    
                    {dDay === '' 
                        ? <C.Keyword onClick={openPeriodFilter}>모집 기간</C.Keyword>
                        : <C.Keyword select="true" onClick={openPeriodFilter}>{dDay}일 이내</C.Keyword>
                    }

                    {total === ''
                        ? <C.Keyword onClick={openQuantityFilter}>상품 수량</C.Keyword>
                        : <C.Keyword select="true" onClick={openQuantityFilter}>{total}개 이상</C.Keyword>
                    }

                    {minPrice === '' && maxPrice === ''
                        ? <C.Keyword onClick={openPriceFilter}>상품 가격</C.Keyword>
                        : <C.Keyword select="true" onClick={openPriceFilter}>{minPrice} ~ {maxPrice}원</C.Keyword>
                    }
                    
                </C.KeywordContainer>
                {searchKeywordList.map((product, index) => (
                    <div key={index}>
                        <ProductItem product={product}/>
                        <itemS.ContourLine />
                    </div>
                ))}
            </C.MainContainer>
            {categoryFilter && <FilterCategory openCategoryFilter={openCategoryFilter} chageCategory={chageCategory}/>}
            {periodFilter && <FilterPeriod openPeriodFilter={openPeriodFilter} chageDDay={chageDDay}/> }
            {quantityFilter && <FilterQuantity openQuantityFilter={openQuantityFilter} chageTotal={chageTotal}/>}
            {priceFilter && <FilterPrice openPriceFilter={openPriceFilter} chagePrice={chagePrice}/>}
        </C.SearchPageContainer>
        </>
    )
}

export default Search