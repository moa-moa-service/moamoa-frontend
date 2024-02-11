import * as itemS from "./styled/MainPage.main.CategoryList.Category.style";
import Item from "./MainPage.main.CategoryList.Category.Item";
import { useNavigate } from 'react-router-dom';

function Category(props) {
    const navigate = useNavigate();
    let categoryText = '';

    switch(props.category) {
        case 'ranking':
            categoryText = '우리 동네 인기 공동구매';
            break;
        case 'latest':
            categoryText = '최근 모집 시작한 공동구매';
            break;
        case 'near':
            categoryText = '나와 가까운 거리의 공동구매';
            break;
        case 'recent-keyword':
            categoryText = '최근 검색한 ' + props.recentKeyword + ' 공동구매';
            break;
        default:
            categoryText = '';
    }

    return (
        <>
            <itemS.CategoryContainer>
                <itemS.CategoryTextContainer>
                    <itemS.CategoryText>
                        {categoryText}
                    </itemS.CategoryText>
                    <itemS.GreaterThanText onClick={() => { navigate(`/post/${props.category}`); }}>
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
