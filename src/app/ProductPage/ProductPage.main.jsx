import * as itemS from "./styled/ProductPage.main.style"
import ProductInfo from "./ProductPage.main.info"
import ImgModal from "./ProductPage.main.imgModal"
import CopyLinkModal from "./ProductPage.main.copyLinkModal"
import QuantityModal from "./ProductPage.main.quantityModal"
import CompleteModal from "./ProductPage.main.completeModal"
import CancelModal from "./ProductPage.main.CancelModal"

function ProductPage() {
    return (
        <> 
            <itemS.ProductPageContainer>
                <ImgModal></ImgModal>
                <CopyLinkModal></CopyLinkModal>
                <QuantityModal></QuantityModal>
                <CompleteModal></CompleteModal>
                <CancelModal></CancelModal>
                <itemS.ImgContainer>
                    <itemS.IconContainer>
                        <img src="../../../public/ProductPage/back.png" alt="back Icon"/>
                        <img src="../../../public/ProductPage/button_share.png" alt="share button" />
                    </itemS.IconContainer>
                </itemS.ImgContainer>
                <ProductInfo></ProductInfo>
                <itemS.BtnContainer>
                    <itemS.Btn>참여하기</itemS.Btn>
                </itemS.BtnContainer>
            </itemS.ProductPageContainer>
        </>
    )
}

export default ProductPage
