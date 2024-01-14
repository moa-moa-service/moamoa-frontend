import * as itemS from "./styled/ProductPage.main.style"
import ProductInfo from "./ProductPage.main.info"
import ImgModal from "./ProductPage.main.imgModal"
import CopyLinkModal from "./ProductPage.main.copyLinkModal"

function ProductPage() {
    return (
        <> 
            <itemS.ProductPageContainer>
                <ImgModal></ImgModal>
                <CopyLinkModal></CopyLinkModal>
                <itemS.ImgContainer>
                    <itemS.IconContainer>
                        <img src="../../../public/ProductPage/back.png" alt="back Icon"/>
                        <img src="../../../public/ProductPage/button_share.png" alt="share button" />
                    </itemS.IconContainer>
                </itemS.ImgContainer>
                <ProductInfo></ProductInfo>
                <itemS.ChatBtn>채팅하기</itemS.ChatBtn>
            </itemS.ProductPageContainer>
        </>
    )
}

export default ProductPage
