import * as C from "./styled/SearchPage.search.filter.style"
import * as itemS from "./styled/SearchPage.search.filter.category.style"

function FilterCategory() {
    return(
        <>
        <C.FilterContainer display="none">
             <C.FilterContent>
                <C.FilterTitle>카테고리</C.FilterTitle>
                <itemS.CategoryContainer>
                    <itemS.CategoryList>
                        <itemS.CategoryCheckbox />
                        <itemS.CategoryText>생활가전</itemS.CategoryText>
                    </itemS.CategoryList>
                    <itemS.CategoryList>
                        <itemS.CategoryCheckbox />
                        <itemS.CategoryText>가구/인테리어</itemS.CategoryText>
                    </itemS.CategoryList>
                    <itemS.CategoryList>
                        <itemS.CategoryCheckbox />
                        <itemS.CategoryText>유아동</itemS.CategoryText>
                    </itemS.CategoryList>
                    <itemS.CategoryList>
                        <itemS.CategoryCheckbox />
                        <itemS.CategoryText>생활/주방</itemS.CategoryText>
                    </itemS.CategoryList>
                    <itemS.CategoryList>
                        <itemS.CategoryCheckbox />
                        <itemS.CategoryText>스포츠/레저</itemS.CategoryText>
                    </itemS.CategoryList>
                </itemS.CategoryContainer>
                <C.BtnContainer>
                    <C.Btn>취소</C.Btn>
                    <C.Btn color="navy">선택 완료</C.Btn>
                </C.BtnContainer>
            </C.FilterContent>
        </C.FilterContainer>
        </>
    )
}

export default FilterCategory