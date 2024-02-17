import { useEffect } from 'react'
import * as ItemS from './styled/MainPage.CategoryDetailPage.Item.style'

function Item({ product }) {
    return (
        <>
            <ItemS.ProductListContainer>
                <ItemS.AllProductInfoContainer>
                    <ItemS.ProductImg src={product.imageUrl} />
                    <ItemS.ProductInfoContainer>
                        <ItemS.ProductInfoText type='title'>{product.productName}</ItemS.ProductInfoText>
                        {product.status === 'FULL' || product.dDay < 0 ? (
                            <ItemS.RecruitTextContainer>
                                <ItemS.ProductInfoText type='people'>상품 수량 | 마감</ItemS.ProductInfoText>
                                <ItemS.ProductInfoText type='deadline'>모집 마감 | 마감</ItemS.ProductInfoText>
                            </ItemS.RecruitTextContainer>
                        ) : (
                            <ItemS.RecruitTextContainer>
                                <ItemS.ProductInfoText type='people'>상품 수량 | {product.personnel}개</ItemS.ProductInfoText>
                                <ItemS.ProductInfoText type='deadline'>모집 마감 | D-{product.dDay}</ItemS.ProductInfoText>
                            </ItemS.RecruitTextContainer>
                        )}
                        <ItemS.ProductInfoText type='price'>{product.price}원</ItemS.ProductInfoText>
                    </ItemS.ProductInfoContainer>
                </ItemS.AllProductInfoContainer>
                {product.status === 'FULL' || product.dDay < 0 ? (
                    <ItemS.CloseWrapper>
                        <ItemS.CloseTagWrapper>
                            <ItemS.CloseTagText>모집 완료</ItemS.CloseTagText>
                        </ItemS.CloseTagWrapper>
                    </ItemS.CloseWrapper>
                ) : null}
            </ItemS.ProductListContainer>
        </>
    )
}

export default Item;
