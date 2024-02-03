import * as C from "./styled/SearchPage.search.filter.style"
import * as itemS from "./styled/SearchPage.search.filter.price.style"

function FilterPrice() {
    return(
        <>
        <C.FilterContainer display="none">
             <C.FilterContent>
                <C.FilterTitle>상품 가격</C.FilterTitle>
                <itemS.inputContainer>
                    <itemS.inputText placeholder="최소 금액"></itemS.inputText>
                    <itemS.line />
                    <itemS.inputText placeholder="최대 금액"></itemS.inputText>
                </itemS.inputContainer>
                <C.BtnContainer>
                    <C.Btn>취소</C.Btn>
                    <C.Btn color="navy">선택 완료</C.Btn>
                </C.BtnContainer>
            </C.FilterContent>
        </C.FilterContainer>
        </>
    )
}

export default FilterPrice