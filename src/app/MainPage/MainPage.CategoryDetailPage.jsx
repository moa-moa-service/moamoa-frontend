import { useNavigate } from 'react-router-dom';

import * as itemMain from './styled/MainPage.main.style'
import * as itemCategory from "./styled/MainPage.main.CategoryList.style"
import * as itemS from './styled/MainPage.CategoryDatailPage.style'
import ProductItem from './MainPage.CategoryDetailPage.Item' 

function CategoryDetailPage() {
    const navigate = useNavigate();
    return(
        <>
            <itemMain.MainPageContainer>
                <itemS.CategoryTitleContainer>
                    <itemS.BackBtn onClick={() => { navigate(-1); }}/>
                    <itemS.CategoryTitle>우리 동네 인기 공동구매</itemS.CategoryTitle>
                </itemS.CategoryTitleContainer>
                <itemCategory.CategoryListContainer onClick={() => { navigate('/product'); }}>
                    <ProductItem />
                    <itemS.ContourLine />
                    <ProductItem />
                </itemCategory.CategoryListContainer>
            </itemMain.MainPageContainer>
        </>
    )
}

export default CategoryDetailPage