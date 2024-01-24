import * as itemS from "./styled/ProductPage.main.noticeModal.style"

function CopyLinkModal() {
    return (
        <>
            <itemS.NoticeModalContainer type="Hidden">
                <itemS.NoticeIcon>
                    <img src="../../../public/ProductPage/copyIcon.png" alt="링크 복사" />
                </itemS.NoticeIcon>
                <itemS.NoticeText>링크가 복사 되었어요</itemS.NoticeText>
                <itemS.NoticeText size='small'>함께 공동구매 참여하자고 친구에게 공유해요!</itemS.NoticeText>
            </itemS.NoticeModalContainer>
        </>
    )
}

export default CopyLinkModal