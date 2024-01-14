import * as itemS from "./styled/ProductPage.main.copyLinkModal.style"

function CopyLinkModal() {
    return (
        <>
            <itemS.CopyLinkModalContainer type="Hidden">
                <itemS.CopyIcon>
                    <img src="../../../public/ProductPage/copyIcon.png" alt="링크 복사" />
                </itemS.CopyIcon>
                <itemS.CopyText>링크가 복사 되었어요</itemS.CopyText>
                <itemS.CopyText size='small'>함께 공동구매 참여하자고 친구에게 공유해요!</itemS.CopyText>
            </itemS.CopyLinkModalContainer>
        </>
    )
}

export default CopyLinkModal