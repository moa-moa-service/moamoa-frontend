import * as itemS from "./styled/ProductPage.main.imgModal.style"

function ImgModal() {
    return(
        <>
            <itemS.ImgModalContainer type="Hidden">
                <itemS.ImgModal></itemS.ImgModal>
                <itemS.ImgPageIconContainer>
                    <itemS.ImgPageIcon type="Current"></itemS.ImgPageIcon>
                    <itemS.ImgPageIcon></itemS.ImgPageIcon>
                    <itemS.ImgPageIcon></itemS.ImgPageIcon>
                    <itemS.ImgPageIcon></itemS.ImgPageIcon>
                </itemS.ImgPageIconContainer>
            </itemS.ImgModalContainer>
        </>
    )
}

export default ImgModal