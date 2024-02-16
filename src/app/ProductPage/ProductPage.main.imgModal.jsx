import * as itemS from "./styled/ProductPage.main.imgModal.style"
import leftAngle from "../../../public/ProductPage/left_angle.png"
import rightAngle from "../../../public/ProductPage/right_angle.png"
import { useState } from "react";

function ImgModal({openImgModalHandler, imgUrl}) {

    const [currentImgIndex, setCurrentImgIndex] = useState(0) ;
    const [currentImgUrl, setCurrentImgUrl] = useState(imgUrl[currentImgIndex]) ;

    const prevMove = (e) => {
        e.stopPropagation() ;
        const temp = currentImgIndex-1 ;

        if (temp >= 0 && temp < imgUrl.length) {
            setCurrentImgIndex(temp) ;
            setCurrentImgUrl(imgUrl[temp]) ;
        }
    }

    const nextMove = (e) => {
        e.stopPropagation() ;
        const temp = currentImgIndex+1 ;

        if (temp >= 0 && temp < imgUrl.length) {
            setCurrentImgIndex(temp) ;
            setCurrentImgUrl(imgUrl[temp]) ;
        }
    }

    const imgReRender = () => {
        return <img src={currentImgUrl} />
    }
 
    return(
        <>
            <itemS.ImgModalContainer onClick={openImgModalHandler} >
                <itemS.ImgModal>
                    <itemS.angleIcon src={leftAngle} onClick={prevMove}/>
                    {imgReRender()} ;
                    <itemS.angleIcon src={rightAngle} onClick={nextMove}/>
                </itemS.ImgModal>
                <itemS.ImgPageIconContainer>
                    {imgUrl.map((url, index) => (
                        <itemS.ImgPageIcon key={index} type={index === currentImgIndex ? "Current" : ""} />
                    ))}
                </itemS.ImgPageIconContainer>
            </itemS.ImgModalContainer>
        </>
    )
}

export default ImgModal