import * as itemS from "./styled/MainPage.main.CategoryList.style"
import Category from "./MainPage.main.CategoryList.Category"

function CategoryList() {
    return(
        <>
            <itemS.CategoryListContainer>
                <Category category='ranking'/>
                <Category category='latest'/>
                <Category category='near'/>
                <Category category='recent-keyword'/>
            </itemS.CategoryListContainer>
        </>
    )
}

export default CategoryList