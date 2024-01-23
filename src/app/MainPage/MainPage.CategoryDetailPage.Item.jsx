import * as ItemS from './styled/MainPage.CategoryDetailPage.Item.style'

function Item() {
    return(
        <>
            <ItemS.ProductListContainer>
                <ItemS.ProductImg />
                <ItemS.ProductInfoContainer>
                    <ItemS.ProductInfoText type='title'>2024 달력</ItemS.ProductInfoText>
                    <ItemS.RecruitTextContainer>
                        <ItemS.ProductInfoText type='people'>모집 인원 | 2명</ItemS.ProductInfoText>
                        <ItemS.ProductInfoText type='deadline'>모집 마감 | D-2</ItemS.ProductInfoText>
                    </ItemS.RecruitTextContainer>
                    <ItemS.ProductInfoText type='price'>5000원</ItemS.ProductInfoText>
                </ItemS.ProductInfoContainer>
            </ItemS.ProductListContainer>
        </>
    )
}

export default Item