import * as itemS from "./styled/ProductPage.main.imgModal.style"

function ImgModal({openImgModalHandler, imgUrl}) {
    return(
        <>
            <itemS.ImgModalContainer onClick={openImgModalHandler} >
                {imgUrl.map((url, index) => (
                    <itemS.ImgModal key={index}>
                        <img src={url} />
                    </itemS.ImgModal>
                ))}
                <itemS.ImgPageIconContainer>
                    {imgUrl.map((url, index) => (
                        <itemS.ImgPageIcon key={index} type="Current" />
                    ))}
                </itemS.ImgPageIconContainer>
            </itemS.ImgModalContainer>
        </>
    )
}

export default ImgModal