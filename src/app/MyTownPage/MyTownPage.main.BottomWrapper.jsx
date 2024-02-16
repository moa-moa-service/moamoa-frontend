import * as itemRec from '../RecruitmentPage/styled/Recruitment.TradingLocation.style'
import * as itemS from './styled/MyTownPage.main.style.js'

function BottomWrapper(product) {
    console.log(product);
    return (
        <>
            <itemRec.BottomWrapper type='town'>
                <itemS.BottomProductWrapper>
                    <itemS.ProductImg src={product.product.simplePostDTO.imageUrl}/>
                    <itemS.ProductTextContainer>
                        <itemS.ProductTextTop>
                            <itemS.ProductText type='title'>{product.product.simplePostDTO.productName}</itemS.ProductText>
                            <itemS.ProductText type='price'>{product.product.simplePostDTO.price}원</itemS.ProductText>
                        </itemS.ProductTextTop>
                        <itemS.ProductTextMiddle>
                            <itemS.ProductText type='place'>{product.product.simplePostDTO.dealTown}</itemS.ProductText>
                            <itemS.ProductText type='location'>{product.product.address.name}</itemS.ProductText>
                        </itemS.ProductTextMiddle>
                        <itemS.ProductTextBottom>
                            <itemS.ProductText type='peopleText' style={{ marginRight: '6px' }}>모집인원</itemS.ProductText>
                            <itemS.ProductText type='people' style={{ marginRight: '18px' }}>{product.product.simplePostDTO.personnel}명</itemS.ProductText>
                            <itemS.ProductText type='dateText' style={{ marginRight: '6px' }}>모집기간</itemS.ProductText>
                            <itemS.ProductText type='date'>D-{product.product.simplePostDTO.dDay}</itemS.ProductText>
                        </itemS.ProductTextBottom>
                    </itemS.ProductTextContainer>
                </itemS.BottomProductWrapper>
            </itemRec.BottomWrapper>
        </>
    )
}

export default BottomWrapper