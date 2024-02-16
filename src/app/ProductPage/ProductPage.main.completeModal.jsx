import * as itemS from "./styled/ProductPage.main.noticeModal.style"

function CompleteModal({openCompleteModalHandler}) {

    const removeHandler = () => {
        setTimeout(function(){
            openCompleteModalHandler() ;
        }, 2000)
        clearTimeout() ;
    }

    removeHandler() ;

    return(
        <>
            <itemS.NoticeModalContainer onClick={openCompleteModalHandler}> 
                <itemS.NoticeIcon>
                    <img src="../../../public/ProductPage/check.png" alt="체크 표시" />
                </itemS.NoticeIcon>
                <itemS.NoticeText>참여가 완료되었어요!</itemS.NoticeText>
                {/* <itemS.NoticeText size='small'>모집이 완료되면 자동으로 채팅방이 개설되어요!</itemS.NoticeText> */}
            </itemS.NoticeModalContainer>
        </>
    )
}

export default CompleteModal