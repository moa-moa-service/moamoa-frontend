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
        const auth = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImlkIjozLCJleHAiOjE3MDc2NjkyMTJ9.kCcWyzYmzD7bmWWe4L5VmzTqveektLDd-Tixd3XvrTx7l43mDU7GOd985GUmoXRBrz8GG0PFU7DH-3y0T7DjLQ";
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
                    `http://develop.moa-moa.site/api/posts/${category}`
                );
                setProducts(response.data.result.SimplePostDtoList);
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
                    {products.map((product, index) => (
                        <>
                            <ProductItem key={index} product={product} />
                            <itemS.ContourLine />
                        </>
                    ))}
                </itemCategory.CategoryListContainer>
            </itemMain.MainPageContainer>
        </>
    )
}

export default CategoryDetailPage;
