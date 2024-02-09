import * as itemS from "./styled/ProductPage.main.style"
import ProductInfo from "./ProductPage.main.info"
import ImgModal from "./ProductPage.main.imgModal"
import CopyLinkModal from "./ProductPage.main.copyLinkModal"
import QuantityModal from "./ProductPage.main.quantityModal"
import CompleteModal from "./ProductPage.main.completeModal"
import CancelModal from "./ProductPage.main.CancelModal"
import { useState } from "react"

function ProductPage() {
    const [imgOpen, setImgOpen] = useState(false) ;
    const [copyNoticeOpen, setCopyNoticeOpen] = useState(false) ;
    const [quantityOpen, setQuantityOpen] = useState(false) ;

    const openImgModalHandler = () => {
        setImgOpen(!imgOpen) ;
    } ;

    const openCopyNoticeModalHandler = () => {
        setCopyNoticeOpen(!copyNoticeOpen) ;
    }
    
    const openQuantityModalHandler = () => {
        setQuantityOpen(!quantityOpen) ;
    }

    return (
        <> 
            <itemS.ProductPageContainer>
                {imgOpen && <ImgModal openImgModalHandler={openImgModalHandler}/> }
                {copyNoticeOpen && <CopyLinkModal openCopyNoticeModalHandler={openCopyNoticeModalHandler} /> }
                {quantityOpen && <QuantityModal openQuantityModalHandler={openQuantityModalHandler} />}
                <CompleteModal></CompleteModal>
                <CancelModal></CancelModal>
                <itemS.ImgContainer onClick={openImgModalHandler} >
                    <itemS.IconContainer>
                        <img src="../../../public/ProductPage/back.png" alt="back Icon"/>
                        <img src="../../../public/ProductPage/button_share.png" alt="share button" onClick={(e) => {
                            e.stopPropagation() ;
                            openCopyNoticeModalHandler() ;
                        }}/>
                    </itemS.IconContainer>
                </itemS.ImgContainer>
                <ProductInfo></ProductInfo>
                <itemS.BtnContainer>
                    <itemS.Btn onClick={openQuantityModalHandler}>참여하기</itemS.Btn>
                </itemS.BtnContainer>
            </itemS.ProductPageContainer>
        </>
    )
}

export default ProductPage
