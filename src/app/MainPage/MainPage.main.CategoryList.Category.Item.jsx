import * as itemS from "./styled/MainPage.main.CategoryList.Category.Item.style"

function Item() {
    return(
        <>
            <itemS.ItemWrapper>
                <itemS.ItemContainer>
                <itemS.ItemImg>
                    <itemS.ItemRecruitContainer>
                        <itemS.ItemRecruitText type='People'>모집 5명</itemS.ItemRecruitText>
                        <itemS.ItemRecruitText type='Deadline'>D-3</itemS.ItemRecruitText>
                    </itemS.ItemRecruitContainer>
                </itemS.ItemImg>
                <itemS.ItemName>헤어드라이기</itemS.ItemName>
                <itemS.ItemPrice>13000원</itemS.ItemPrice>
            </itemS.ItemContainer>
            </itemS.ItemWrapper>
        </>
    )
}

export default Item