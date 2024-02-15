import { useEffect } from 'react'
import * as ItemS from './styled/MainPage.CategoryDetailPage.Item.style'

function Item({ product }) {
    return(
        <>
            <ItemS.ProductListContainer>
                <ItemS.ProductImg src={product.imageUrl} />
                <ItemS.ProductInfoContainer>
                    <ItemS.ProductInfoText type='title'>{product.productName}</ItemS.ProductInfoText> {/* productName 속성에 접근할 때는 product.productName으로 지정 */}
                    <ItemS.RecruitTextContainer>
                        <ItemS.ProductInfoText type='people'>상품 수량 | {product.personnel}개</ItemS.ProductInfoText> {/* personnel 속성에 접근할 때는 product.personnel으로 지정 */}
                        <ItemS.ProductInfoText type='deadline'>모집 마감 | D-{product.dDay}</ItemS.ProductInfoText> {/* dDay 속성에 접근할 때는 product.dDay로 지정 */}
                    </ItemS.RecruitTextContainer>
                    <ItemS.ProductInfoText type='price'>{product.price}원</ItemS.ProductInfoText> {/* price 속성에 접근할 때는 product.price로 지정 */}
                </ItemS.ProductInfoContainer>
            </ItemS.ProductListContainer>
        </>
    )
}

export default Item;
