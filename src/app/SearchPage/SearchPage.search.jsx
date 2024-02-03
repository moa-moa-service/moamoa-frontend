import * as itemS from "./styled/SearchPage.search.style"
import * as C from "./styled/SearchPage.component.style"

import ProductItem from '../MainPage/MainPage.CategoryDetailPage.Item'
import FilterCategory from "./SearchPage.search.Filter.Category"

function Search() {
    return(
        <>
        <C.SearchPageContainer>
            <C.SearchContainer>
                <img src="../../../public/SearchPage/backIcon.png" alt="뒤로가기" />
                <C.SearchBox></C.SearchBox>
                <img src="../../../public/SearchPage/searchIcon.png" alt="검색" />
            </C.SearchContainer>
            <C.MainContainer>
                <C.KeywordContainer>
                    <C.Keyword select="true">지역명</C.Keyword>
                    <C.Keyword>카테고리</C.Keyword>
                    <C.Keyword>모집 기간</C.Keyword>
                    <C.Keyword>상품 수량</C.Keyword>
                    <C.Keyword>상품 가격</C.Keyword>
                </C.KeywordContainer>
                <ProductItem />
                <itemS.ContourLine />
                <ProductItem />
                <itemS.ContourLine />
                <ProductItem />
            </C.MainContainer>
            <FilterCategory />
        </C.SearchPageContainer>
        </>
    )
}

export default Search