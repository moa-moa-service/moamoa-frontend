import * as itemS from "./styled/ProductPage.main.style"
import ProductInfo from "./ProductPage.main.info"
import ImgModal from "./ProductPage.main.imgModal"
import CopyLinkModal from "./ProductPage.main.copyLinkModal"
import QuantityModal from "./ProductPage.main.quantityModal"
import CompleteModal from "./ProductPage.main.completeModal"
import CancelModal from "./ProductPage.main.CancelModal"
import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import client from "../../client"


function ProductPage() {

    const navigate = useNavigate() ;
    const { id } = useParams() ;

    const [imgOpen, setImgOpen] = useState(false) ;
    const [copyNoticeOpen, setCopyNoticeOpen] = useState(false) ;
    const [quantityOpen, setQuantityOpen] = useState(false) ;
    const [product, setProduct] = useState(null) ;

    useEffect(() => {
        const auth = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImlkIjoyLCJleHAiOjE3MDc3MDA3MDB9.yBVp2K-xYMkUbkPRLgibn_NC30LeTjWoBQIN--4QZApdJrNEwApSJcYravajCsZ4dAP8nCxR_fGeydXiY1rgkA" ;
    
        const fetchData = async () => {
            try {
                const response = await client(auth).post(
                    `/posts/${id}`
                ) ;
                setProduct(response.data.result) ;
                console.log("성공") ;
            } catch (error) {
                console.error("실패", error);
            }
        };
        fetchData() ;
    },[]) ;

    const openImgModalHandler = () => {
        setImgOpen(!imgOpen) ;
    } ;

    const location = useLocation() ;

    const copyLink = async(link) => {
        try {
            await navigator.clipboard.writeText(link) ;
        } catch (error) {
            console.log("링크 복사 실패") ;
            console.log(error) ;
        }
    }

    const openCopyNoticeModalHandler = () => {
        setCopyNoticeOpen(!copyNoticeOpen) ;
    }
    
    const openQuantityModalHandler = () => {
        setQuantityOpen(!quantityOpen) ;
    }

    if (!product) {
        return <itemS.Loading>Loading..</itemS.Loading>
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
                    <itemS.ProductImg src={product.postDto.imageUrl} />
                    <itemS.IconContainer>
                        <img src="../../../public/ProductPage/back.png" alt="back Icon" onClick={(e) => { 
                            e.stopPropagation() ;
                            navigate(-1) ;
                        }}/>
                        <img src="../../../public/ProductPage/button_share.png" alt="share button" onClick={(e) => {
                            e.stopPropagation() ;
                            openCopyNoticeModalHandler() ;
                            copyLink(`http://localhost:5173${location.pathname}`)
                        }}/>
                    </itemS.IconContainer>
                </itemS.ImgContainer>
                <ProductInfo product={product} />
                <itemS.BtnContainer>
                    <itemS.Btn onClick={openQuantityModalHandler}>참여하기</itemS.Btn>
                </itemS.BtnContainer>
            </itemS.ProductPageContainer>
        </>
    )
}

export default ProductPage
