import * as itemS from "./styled/ProductPage.main.selectModalComponent.style"
import client from "../../client"

function CancelModal({openCancelModalHandler, id}) {

    const cancelHandle = async() => {
        try {
            const response = await client().delete(
                `/posts/${id}/cancel`
            ) ;
            openCancelModalHandler() ;
            window.location.reload() ;
        } catch (error) {
            console.error("실패", error) ;
        }
    }

    return(
        <>
            <itemS.SelectModalContainer>
                <itemS.SelectModal>
                    <itemS.Icon>
                        <img src="../../../public/ProductPage/question.png" alt="물음표" />
                    </itemS.Icon>
                    <itemS.TextContainer>
                        <itemS.InfoTitle>참여를 취소하시겠어요?</itemS.InfoTitle>
                        <itemS.InfoText>공동구매 참여를 취소하면 다시 참여할 수 없어요</itemS.InfoText>
                    </itemS.TextContainer>
                    <itemS.BtnContainer>
                        <itemS.CheckBtn onClick={openCancelModalHandler}>아니오</itemS.CheckBtn>
                        <itemS.CheckBtn color="red" onClick={cancelHandle}>네</itemS.CheckBtn>
                    </itemS.BtnContainer>
                </itemS.SelectModal>
            </itemS.SelectModalContainer>
        </>
    )
}

export default CancelModal