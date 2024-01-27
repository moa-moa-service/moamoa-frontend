import * as itemS from "./styled/ProductPage.main.selectModalComponent.style"

function CancelModal() {
    return(
        <>
            <itemS.SelectModalContainer type="Hidden">
                <itemS.SelectModal>
                    <itemS.Icon>
                        <img src="../../../public/ProductPage/question.png" alt="물음표" />
                    </itemS.Icon>
                    <itemS.TextContainer>
                        <itemS.InfoTitle>참여를 취소하시겠어요?</itemS.InfoTitle>
                        <itemS.InfoText>공동구매 참여를 취소하면 다시 참여할 수 없어요</itemS.InfoText>
                    </itemS.TextContainer>
                    <itemS.BtnContainer>
                        <itemS.CheckBtn>아니오</itemS.CheckBtn>
                        <itemS.CheckBtn color="red">네</itemS.CheckBtn>
                    </itemS.BtnContainer>
                </itemS.SelectModal>
            </itemS.SelectModalContainer>
        </>
    )
}

export default CancelModal