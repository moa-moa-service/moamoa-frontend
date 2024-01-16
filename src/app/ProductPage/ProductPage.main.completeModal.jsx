import * as itemS from "./styled/ProductPage.main.ModalComponent.style"

function CompleteModal() {
    return(
        <>
            <itemS.ModalContainer type="Hidden">
                <itemS.Modal>
                    <itemS.Icon></itemS.Icon>
                    <itemS.TextContainer>
                        <itemS.InfoTitle>참여가 완료되었어요!</itemS.InfoTitle>
                        <itemS.InfoText>모집이 완료되면 자동으로 채팅방이 개설되어요!</itemS.InfoText>
                    </itemS.TextContainer>
                </itemS.Modal>
            </itemS.ModalContainer>
        </>
    )
}

export default CompleteModal