import * as itemS from "./styled/NoticePage.notice.comment.style"

function Comment() {
    return(
        <>
            <itemS.CommentContainer>
                <itemS.UserImg />
                <itemS.TextContainer>
                    <itemS.WriteInfo>
                        <itemS.UserName>KIKI</itemS.UserName>
                        <itemS.Date>2023.12.02 11:29</itemS.Date>
                    </itemS.WriteInfo>
                    <itemS.Comment>확인했습니다!</itemS.Comment>
                    <itemS.ReplyBtn>답글</itemS.ReplyBtn>
                </itemS.TextContainer>
            </itemS.CommentContainer>
        </>
    )
}

export default Comment