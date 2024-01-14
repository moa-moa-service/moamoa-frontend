import * as itemS from "./styled/ProductPage.main.style"
import backIcon from "../../../public/ProductPage/back.png"
import ProductInfo from "./ProductPage.main.info"

// import * as itemS from "./styled/MainPage.main.style"
// import SearchImg from "./public/MainPage/Search.png"
// import CategoryList from "./MainPage.main.CategoryList"

function ProductPage() {
    return (
        <>
            <itemS.ProductPageContainer>
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
