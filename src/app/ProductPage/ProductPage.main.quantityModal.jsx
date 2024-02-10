import * as itemS from "./styled/ProductPage.main.selectModalComponent.style"

function QuantityModal({openQuantityModalHandler}) {
    return(
        <>
            <itemS.SelectModalContainer>
                <itemS.SelectModal onClick={(e) => e.stopPropagation()}>
                    <itemS.Icon>
                        <img src="../../../public/ProductPage/shopping_cart.png" alt="장바구니" />
                    </itemS.Icon>
                    <itemS.InfoTitle>상품 수량을 선택해주세요!</itemS.InfoTitle>
                    <itemS.TextInput placeholder="상품 개수 입력 필드"></itemS.TextInput>
                    <itemS.BtnContainer>
                        <itemS.CheckBtn onClick={openQuantityModalHandler}>아니오</itemS.CheckBtn>
                        <itemS.CheckBtn color="red">네</itemS.CheckBtn>
                    </itemS.BtnContainer>
                </itemS.SelectModal>
            </itemS.SelectModalContainer>
        </>
    )
}

export default QuantityModal