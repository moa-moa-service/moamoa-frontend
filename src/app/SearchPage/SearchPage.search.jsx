import * as itemS from "./styled/SearchPage.search.style"
import * as C from "./styled/SearchPage.component.style"

import ProductItem from '../MainPage/MainPage.CategoryDetailPage.Item'
import FilterCategory from "./SearchPage.search.Filter.Category"
import FilterQuantity from "./SearchPage.search.filter.quantity"
import FilterPrice from "./SearchPage.search.filter.price"
import FilterPeriod from "./SearchPage.search.filter.period"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Search() {

    const navigator = useNavigate() ;

    const [categoryFilter, setCategoryFilter] = useState(false) ;
    const [periodFilter, setPeriodFilter] = useState(false) ;
    const [quantityFilter, setQuantityFilter] = useState(false) ;
    const [priceFilter, setPriceFilter] = useState(false) ;

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

    return(
        <>
        <C.SearchPageContainer>
            <C.SearchContainer>
                <img src="../../../public/SearchPage/backIcon.png" alt="뒤로가기" onClick={() => navigator(-1)}/>
                <C.SearchBox></C.SearchBox>
                <img src="../../../public/SearchPage/searchIcon.png" alt="검색" />
            </C.SearchContainer>
            <C.MainContainer>
                <C.KeywordContainer>
                    <C.Keyword select="true">지역명</C.Keyword>
                    <C.Keyword onClick={openCategoryFilter}>카테고리</C.Keyword>
                    <C.Keyword onClick={openPeriodFilter}>모집 기간</C.Keyword>
                    <C.Keyword onClick={openQuantityFilter}>상품 수량</C.Keyword>
                    <C.Keyword onClick={openPriceFilter}>상품 가격</C.Keyword>
                </C.KeywordContainer>
                <ProductItem />
                <itemS.ContourLine />
                <ProductItem />
                <itemS.ContourLine />
                <ProductItem />
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