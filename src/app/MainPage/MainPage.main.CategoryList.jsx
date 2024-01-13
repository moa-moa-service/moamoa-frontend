import * as itemS from "./styled/MainPage.main.CategoryList.style"
import Category from "./MainPage.main.CategoryList.Category"

function CategoryList() {
    return(
        <>
            <itemS.CategoryListContainer>
                <Category />
                <Category />
                <Category />
                <Category />
            </itemS.CategoryListContainer>
        </>
    )
}

export default CategoryList