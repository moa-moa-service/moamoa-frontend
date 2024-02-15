import * as itemS from "./styled/MainPage.main.CategoryList.Category.style";
import Item from "./MainPage.main.CategoryList.Category.Item";
import client from "../../client";

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function Category(props) {
    const navigate = useNavigate();
    const [items, setItems] = useState();
    let categoryText = '';

    switch (props.category) {
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
            categoryText = '최근 검색한 상품 공동구매';
            break;
        default:
            categoryText = '';
    }

    useEffect(() => {
        const auth = import.meta.env.VITE_AUTH;
        const fetchData = async () => {
            try {
                const response = await client(auth).get(
                    `/posts/${props.category}`
                );
                setItems(response.data.result.SimplePostDtoList);
            } catch (error) {
                console.error('안된다!!:', error);
            }
        };
        fetchData();
    }, []);

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
                    {items && items.map(item=> (
                        <Item key={item.postId} item={item} onClick={() => { navigate(`/post/${props.category}`); }} />
                    ))}
                </itemS.ItemsContainer>
            </itemS.CategoryContainer>
        </>
    );
}

export default Category;
