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
    const [completeModalOpen, setCompleteModalOpen] = useState(false) ;
    const [cancelModalOpen, setCancelModalOpen] = useState(false) ;

    useEffect(() => {
        const auth = import.meta.env.VITE_AUTH ;

        const fetchData = async () => {
            try {
                const response = await client(auth).post(
                    `/posts/${id}`
                ) ;
                setProduct(response.data.result) ;
            } catch (error) {
                console.error("실패", error);
            }
        };
        fetchData() ;
    },[product]) ;

    const location = useLocation() ;

    const openImgModalHandler = () => {
        setImgOpen(!imgOpen) ;
    } ;

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

    const openCompleteModalHandler = () => {
        setCompleteModalOpen(!completeModalOpen) ;
    }

    const openCancelModalHandler = () => {
        setCancelModalOpen(!cancelModalOpen) ;
    }

    let button;

    if (!product) {
        return <itemS.Loading>Loading..</itemS.Loading>
    } else {
        if (product.joinStatus === null) {
            button = <itemS.Btn onClick={openQuantityModalHandler}>참여하기</itemS.Btn>;
        } else if (product.joinStatus === "PARTICIPATOR") {
            button = <itemS.Btn onClick={openCancelModalHandler}>참여 취소하기</itemS.Btn>;
        } else if (product.joinStatus === "AUTHOR") {
            button = (
                <>
                    <itemS.SmallBtn color="white">상태변경</itemS.SmallBtn> ;
                    <itemS.SmallBtn>수정하기</itemS.SmallBtn> ;
                </>
            )
        }
    }

    return (
        <> 
            <itemS.ProductPageContainer>
                {imgOpen && <ImgModal openImgModalHandler={openImgModalHandler} imgUrl={product.postDto.imageUrl} /> }
                {copyNoticeOpen && <CopyLinkModal openCopyNoticeModalHandler={openCopyNoticeModalHandler} /> }
                {quantityOpen && <QuantityModal openQuantityModalHandler={openQuantityModalHandler} id={id} openCompleteModalHandler={openCompleteModalHandler}/>}
                {completeModalOpen && <CompleteModal openCompleteModalHandler={openCompleteModalHandler} />}
                {cancelModalOpen && <CancelModal openCancelModalHandler={openCancelModalHandler} id={id} /> }
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
                <ProductInfo product={product} id={id} />
                <itemS.BtnContainer>
                    {button}
                </itemS.BtnContainer>
            </itemS.ProductPageContainer>
        </>
    )
}

export default ProductPage
