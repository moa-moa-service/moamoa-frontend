import * as C from "./styled/SearchPage.search.filter.style"
import * as itemS from "./styled/SearchPage.search.filter.quantity.style"

function FilterQuantity({openQuantityFilter}) {
    return(
        <>
        <C.FilterContainer>
             <C.FilterContent>
                <C.FilterTitle>상품 수량</C.FilterTitle>
                <itemS.selectQuantity type="range" />
                <itemS.quantityText>2개</itemS.quantityText>
                <C.BtnContainer>
                    <C.Btn onClick={openQuantityFilter}>취소</C.Btn>
                    <C.Btn color="navy" onClick={openQuantityFilter}>선택 완료</C.Btn>
                </C.BtnContainer>
            </C.FilterContent>
        </C.FilterContainer>
        </>
    )
}

export default FilterQuantity