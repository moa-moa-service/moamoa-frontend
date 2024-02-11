import { useEffect } from 'react'
import * as ItemS from './styled/MainPage.CategoryDetailPage.Item.style'

function Item(product) {
    
    return(
        <>
            <ItemS.ProductListContainer>
                <ItemS.ProductImg />
                <ItemS.ProductInfoContainer>
                    <ItemS.ProductInfoText type='title'>{product.product.productName}</ItemS.ProductInfoText>
                    <ItemS.RecruitTextContainer>
                        <ItemS.ProductInfoText type='people'>모집 인원 | {product.product.personnel}명</ItemS.ProductInfoText>
                        <ItemS.ProductInfoText type='deadline'>모집 마감 | D{product.product.dDay}</ItemS.ProductInfoText>
                    </ItemS.RecruitTextContainer>
                    <ItemS.ProductInfoText type='price'>{product.product.price}</ItemS.ProductInfoText>
                </ItemS.ProductInfoContainer>
            </ItemS.ProductListContainer>
        </>
    )
}

export default Item