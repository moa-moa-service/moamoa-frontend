import * as itemS from "./styled/MainPage.main.CategoryList.Category.Item.style"

function Item(props) {
    return (
        <>
            <itemS.ItemWrapper>
                <itemS.ItemContainer>
                    <itemS.ItemImgContainer>
                        <itemS.ItemImg src={props.item.imageUrl} />
                        <itemS.ItemRecruitContainer>
                            <itemS.ItemRecruitTextContainer>
                                <itemS.ItemRecruitText type='People'>모집 {props.item.personnel}명</itemS.ItemRecruitText>
                                <itemS.ItemRecruitText type='Deadline'>D-{props.item.dDay}</itemS.ItemRecruitText>
                            </itemS.ItemRecruitTextContainer>
                        </itemS.ItemRecruitContainer>
                    </itemS.ItemImgContainer>
                    <itemS.ItemName>{props.item.productName}</itemS.ItemName>
                    <itemS.ItemPrice>{props.item.price}원</itemS.ItemPrice>
                </itemS.ItemContainer>
            </itemS.ItemWrapper>
        </>
    )
}

export default Item