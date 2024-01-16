import * as itemS from "./styled/ProductPage.main.ModalComponent.style"

function QuantityModal() {
    return(
        <>
            <itemS.ModalContainer type="Hidden">
                <itemS.Modal>
                    <itemS.Icon></itemS.Icon>
                    <itemS.InfoTitle>상품 수량을 선택해주세요!</itemS.InfoTitle>
                    <itemS.TextInput placeholder="상품 개수 입력 필드"></itemS.TextInput>
                    <itemS.BtnContainer>
                        <itemS.CheckBtn>아니오</itemS.CheckBtn>
                        <itemS.CheckBtn>네</itemS.CheckBtn>
                    </itemS.BtnContainer>
                </itemS.Modal>
            </itemS.ModalContainer>
        </>
    )
}

export default QuantityModal