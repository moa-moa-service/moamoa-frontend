import * as itemS from "./styled/NoticePage.notice.comment.style"
import { format } from "date-fns" ;

function Comment({comment}) {

    const createDate = format(comment.createdAt, 'yyyy.MM.dd HH:mm') ;

    return(
        <>
            <itemS.CommentContainer>
                <itemS.UserImg />
                <itemS.TextContainer>
                    <itemS.WriteInfo>
                        <itemS.UserName>{comment.nickname}</itemS.UserName>
                        <itemS.Date>{createDate}</itemS.Date>
                    </itemS.WriteInfo>
                    <itemS.Comment>{comment.content}</itemS.Comment>
                    <itemS.ReplyBtn>답글</itemS.ReplyBtn>
                </itemS.TextContainer>
            </itemS.CommentContainer>
        </>
    )
}

export default Comment