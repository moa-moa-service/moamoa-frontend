import * as itemS from "./styled/ProductPage.main.ModalComponent.style"

function CancelModal() {
    return(
        <>
            <itemS.ModalContainer type="Hidden">
                <itemS.Modal>
                    <itemS.Icon></itemS.Icon>
                    <itemS.TextContainer>
                        <itemS.InfoTitle>참여를 취소하시겠어요?</itemS.InfoTitle>
                        <itemS.InfoText>공동구매 참여를 취소하면 다시 참여할 수 없어요</itemS.InfoText>
                    </itemS.TextContainer>
                    <itemS.BtnContainer>
                        <itemS.CheckBtn>아니오</itemS.CheckBtn>
                        <itemS.CheckBtn>네</itemS.CheckBtn>
                    </itemS.BtnContainer>
                </itemS.Modal>
            </itemS.ModalContainer>
        </>
    )
}

export default CancelModal