import * as C from "./styled/SearchPage.search.filter.style"
import * as itemS from "./styled/SearchPage.search.filter.quantity.style"
import FilterQuantityModal from "../RecruitmentPage/Recruitment.modal.Range"
import { useState } from 'react';

function FilterQuantity({openQuantityFilter, chageTotal}) {

    const [selectedQuantity, setSelectedQuantity] = useState() ;

    const handelSelected = (value) => {
        setSelectedQuantity(value) ;
    }

    const searchHandle = () => {
        chageTotal(selectedQuantity) ;
        openQuantityFilter() ;
    }

    return(
        <>
        <C.FilterContainer>
             <C.FilterContent>
                <FilterQuantityModal onSelectPeople={(value) => handelSelected(value)} />
                {/* <C.FilterTitle>상품 수량</C.FilterTitle>
                <itemS.selectQuantity type="range" />
                <itemS.quantityText>2개</itemS.quantityText> */}
                <C.BtnContainer>
                    <C.Btn onClick={openQuantityFilter}>취소</C.Btn>
                    <C.Btn color="navy" onClick={searchHandle}>선택 완료</C.Btn>
                </C.BtnContainer>
            </C.FilterContent>
        </C.FilterContainer>
        </>
    )
}

export default FilterQuantity