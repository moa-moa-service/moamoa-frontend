import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import * as itemMain from './styled/MainPage.main.style';
import * as itemCategory from "./styled/MainPage.main.CategoryList.style";
import * as itemS from './styled/MainPage.CategoryDatailPage.style';
import ProductItem from './MainPage.CategoryDetailPage.Item';
import client from "../../client";

function CategoryDetailPage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [categoryText, setCategoryText] = useState('');

    useEffect(() => {
        const auth =import.meta.env.VITE_AUTH;
        const currentURL = window.location.href;
        const pathParts = currentURL.split("/");
        const category = pathParts[pathParts.length - 1];

        let categoryText = '';
        switch(category) {
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
                categoryText = '최근 검색한 공동구매';
                break;
            default:
                categoryText = '';
        }
        setCategoryText(categoryText);

        const fetchData = async () => {
            try {
                const response = await client(auth).get(
                    `/posts/${category}`
                );
                if (category === 'near') {
                    const simplePostDTOs = response.data.result.SimplePostDtoList.map(item => item.simplePostDTO);
                    setProducts(simplePostDTOs);
                } else {
                    setProducts(response.data.result.SimplePostDtoList);
                }
            } catch (error) {
                console.error('안된다!!:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <itemMain.MainPageContainer>
                <itemS.CategoryTitleContainer>
                    <itemS.BackBtn onClick={() => { navigate(-1); }} />
                    <itemS.CategoryTitle>{categoryText}</itemS.CategoryTitle>
                </itemS.CategoryTitleContainer>
                <itemCategory.CategoryListContainer>
                    {products.map(product => (
                        <div key={product.postId}>
                            <ProductItem product={product} onClick={() => { navigate(`/product/${product.postId}`); }}/>
                            <itemS.ContourLine />
                        </div>
                    ))}
                </itemCategory.CategoryListContainer>
            </itemMain.MainPageContainer>
        </>
    )
}

export default CategoryDetailPage;
