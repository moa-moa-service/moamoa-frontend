import * as C from "./styled/NoticePage.component.style"
import * as itemS from "./styled/NoticePage.notice.style"

import Comment from "./NoticePage.notice.comment"

function NoticePage() {
    return(
        <>
            <C.NoticeWriteContainer>
                <C.NoticeHeader>
                    <img src="../../../public/SearchPage/backIcon.png" alt="backIcon" />
                    <div>공지사항</div>
                </C.NoticeHeader>
                <C.WriteContainer>
                    <itemS.Title>거래 날짜 및 시간 조정</itemS.Title>
                    <itemS.WriteInfo>
                        <div>핑크퐁</div>
                        <div> | </div>
                        <div>2일 전</div>
                    </itemS.WriteInfo>
                    <itemS.MoreIcon src="../../../public/NoticePage/moreIcon.png" />
                    <itemS.Line />
                    <itemS.Content>안녕하세요</itemS.Content>
                    <itemS.Line />
                    <itemS.CommentContainer>
                        <itemS.CommentHeader>
                            <div>댓글</div>
                            <div>3</div>
                        </itemS.CommentHeader>
                        <Comment />
                        <Comment />
                        <Comment />
                    </itemS.CommentContainer>
                </C.WriteContainer>
                <itemS.WriteCommentContainer>
                    <itemS.UserImg />
                    <itemS.CommentInput placeholder="댓글을 입력해 주세요." />
                    <itemS.DoneBtn>완료</itemS.DoneBtn>
                </itemS.WriteCommentContainer>
            </C.NoticeWriteContainer>
        </>
    )
}

export default NoticePage