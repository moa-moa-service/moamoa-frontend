import * as C from "./styled/SearchPage.search.filter.style"
import * as itemS from "./styled/SearchPage.search.filter.category.style"
import FilterCategoryModal from "../RecruitmentPage/Recruitment.modal.Category"
import { useState } from 'react';

function FilterCategory({openCategoryFilter, chageCategory}) {

    const [selectedCategory, setSelectedCategory] = useState();

    const handleSelected = (value) => {
        setSelectedCategory(value) ;
    }

    const searchHandle = () => {
        chageCategory(selectedCategory) ;
        openCategoryFilter() ;
    }

    return(
        <>
        <C.FilterContainer>
             <C.FilterContent>
                <FilterCategoryModal onSelectCategory={(value) => handleSelected(value)}/>
                <C.BtnContainer>
                    <C.Btn onClick={openCategoryFilter}>취소</C.Btn>
                    <C.Btn color="navy" onClick={searchHandle}>선택 완료</C.Btn>
                </C.BtnContainer>
            </C.FilterContent>
        </C.FilterContainer>
        </>
    )
}

export default FilterCategory