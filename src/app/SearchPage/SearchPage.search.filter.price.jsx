import * as C from "./styled/SearchPage.search.filter.style"
import * as itemS from "./styled/SearchPage.search.filter.price.style"
import { useState } from "react"

function FilterPrice({openPriceFilter, chagePrice}) {

    const auth = import.meta.env.VITE_AUTH ;

    const [minPrice, setMinPrice] = useState('') ;
    const [maxPrice, setMaxPrice] = useState('') ;
    const [minPriceInput, setMinPriceInput] = useState('') ;
    const [maxPriceInput, setMaxPriceInput] = useState('') ;

    const onChageInput = (e) => {
        if(e.target.placeholder === '최소 금액') {
            setMinPriceInput(e.target.value) ;
        } else if (e.target.placeholder === '최대 금액') {
            setMaxPriceInput(e.target.value) ;
        }
    }

    const searchHandle = () => {
        chagePrice(minPriceInput, maxPriceInput)
        openPriceFilter() ;
    }
 
    return(
        <>
        <C.FilterContainer>
             <C.FilterContent>
                <C.FilterTitle>상품 가격</C.FilterTitle>
                <itemS.inputContainer>
                    <itemS.inputText placeholder="최소 금액" onChange={onChageInput}></itemS.inputText>
                    <itemS.line />
                    <itemS.inputText placeholder="최대 금액" onChange={onChageInput}></itemS.inputText>
                </itemS.inputContainer>
                <C.BtnContainer>
                    <C.Btn onClick={openPriceFilter}>취소</C.Btn>
                    <C.Btn color="navy" onClick={searchHandle}>선택 완료</C.Btn>
                </C.BtnContainer>
            </C.FilterContent>
        </C.FilterContainer>
        </>
    )
}

export default FilterPrice