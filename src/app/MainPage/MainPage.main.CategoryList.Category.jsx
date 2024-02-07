import { useNavigate } from 'react-router-dom';
import * as itemS from "./styled/MainPage.main.CategoryList.Category.style";
import Item from "./MainPage.main.CategoryList.Category.Item";

function Category() {
    const navigate = useNavigate();
    
    return (
        <>
            <itemS.CategoryContainer>
                <itemS.CategoryTextContainer>
                    <itemS.CategoryText>
                        우리 동네 인기 공동구매
                    </itemS.CategoryText>
                    <itemS.GreaterThanText onClick={() => { navigate('/detail'); }}>
                        &gt;
                    </itemS.GreaterThanText>
                </itemS.CategoryTextContainer>
                <itemS.ItemsContainer>
                    <Item onClick={() => { navigate('/product'); }} />
                    <Item />
                    <Item />
                </itemS.ItemsContainer>
            </itemS.CategoryContainer>
        </>
    );
}

export default Category;
